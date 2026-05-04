import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "PortugalSitesDeApostas | Melhores Casas de Apostas Licenciadas SRIJ 2025",
  description:
    "Comparador independente das melhores casas de apostas desportivas em Portugal. Análises detalhadas, bónus verificados e operadores licenciados pelo SRIJ. A sua referência em apostas seguras.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PortugalSitesDeApostas | Top Casas de Apostas 2025",
    description:
      "Encontre as melhores casas de apostas licenciadas em Portugal. Comparações imparciais, bónus exclusivos e guias completos.",
    siteName: "PortugalSitesDeApostas",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} antialiased bg-background`}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#f8f8fb" />
        <meta name="author" content="PortugalSitesDeApostas" />
        <meta property="og:site_name" content="PortugalSitesDeApostas - Comparador de Apostas" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Site de comparação independente. Não somos uma casa de apostas. Links para sites licenciados pelo SRIJ."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
