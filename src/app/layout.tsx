import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"; // Import of the notification

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FactureClaire | Vérifiez la conformité de vos factures",
  description: "L'assistant simple pour les TPE/PME face à la facture électronique 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}