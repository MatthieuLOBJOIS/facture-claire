import { InvoiceForm } from "@/components/forms/InvoiceForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            FactureClaire
          </h1>
          <p className="text-slate-500">
            {
              "L'outil d'auto-diagnostic pour la réforme de la facturation 2026."
            }
          </p>
        </div>

        <Card className="shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle>Nouvelle Analyse</CardTitle>
            <CardDescription>
              Remplissez les informations pour tester la conformité.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InvoiceForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
