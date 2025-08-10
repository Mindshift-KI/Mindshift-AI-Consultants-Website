
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dirk Brusch - KI verstehen statt fürchten | KI-Transformationsberater',
  description: 'Der Weg für Entscheidungsträger: Nach 37 Jahren als Wegbereiter technologischer Revolutionen gestalte ich jetzt die KI-Transformation aktiv mit.',
  keywords: 'KI Transformation, KI Beratung, Digitale Transformation, Change Management, KI Strategie, Mittelstand, Geschäftsführung',
  authors: [{ name: 'Dirk Brusch' }],
  openGraph: {
    title: 'Dirk Brusch - KI verstehen statt fürchten',
    description: 'Ihr Partner für erfolgreiche KI-Transformation mit 37 Jahren Erfahrung',
    type: 'website',
    locale: 'de_DE',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
