import * as z from "zod";

export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, "Le numéro de facture est obligatoire"),
  issueDate: z.string().min(1, "La date est obligatoire"),
  // French business ID (SIREN)
  issuerSiren: z
    .string()
    .length(9, "Le SIREN doit comporter exactement 9 chiffres")
    .regex(/^\d+$/, "Le SIREN ne doit contenir que des chiffres"),
  
  netAmount: z.coerce.number().min(0.01, "Le montant HT doit être supérieur à 0"),
  vatRate: z.coerce.number(),
  totalAmount: z.coerce.number().min(0.01, "Le montant TTC doit être supérieur à 0"),
}).refine((data) => {
  // Business logic: check if Net + VAT = Total
  const calculatedVat = data.netAmount * (data.vatRate / 100);
  const theoreticalTotal = data.netAmount + calculatedVat;
  
  // Tolerance of 0.02€ for rounding
  return Math.abs(theoreticalTotal - data.totalAmount) < 0.02;
}, {
  message: "Le montant TTC ne correspond pas au calcul (HT + TVA).",
  path: ["totalAmount"],
});

export type InvoiceValues = z.infer<typeof invoiceSchema>;