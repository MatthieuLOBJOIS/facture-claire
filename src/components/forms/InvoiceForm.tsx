"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { invoiceSchema, type InvoiceValues } from "@/lib/schemas/invoice"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function InvoiceForm() {
  const form = useForm<InvoiceValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      invoiceNumber: "",
      issueDate: new Date().toISOString().split("T")[0],
      issuerSiren: "",
      netAmount: 0,
      vatRate: 20,
      totalAmount: 0,
    },
  })

  function onSubmit(values: InvoiceValues) {
    toast.success("Analyse terminée", {
      description: `La facture ${values.invoiceNumber} est valide.`,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="invoiceNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° de Facture</FormLabel>
                <FormControl>
                  <Input placeholder="FA-2026-001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="issuerSiren"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SIREN</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Add more fields here as you go */}

        <Button type="submit" className="w-full font-bold">
          Vérifier la conformité
        </Button>
      </form>
    </Form>
  )
}
