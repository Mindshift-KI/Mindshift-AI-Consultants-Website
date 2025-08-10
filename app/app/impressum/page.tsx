
'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FileText } from 'lucide-react'

export default function ImpressumPage() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8" suppressHydrationWarning>
            <div className="prose max-w-none" suppressHydrationWarning>
              <p className="text-lg text-gray-600 mb-8 text-center" suppressHydrationWarning>
                Die Inhalte dieser Seite werden vom Website-Betreiber bereitgestellt.
              </p>
              
              <div className="grid gap-8" suppressHydrationWarning>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-1 text-gray-700">
                      <p className="font-semibold">Mindshift AI Consultants</p>
                      <p>Dirk Brusch</p>
                      <p>Am Schäfersberg 16</p>
                      <p>65527 Niedernhausen</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">E-Mail:</span> info@mindshift-ai-consultants.de
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">DE113759650</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Weitere rechtliche Hinweise</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4 text-gray-700 text-sm">
                      <p>Dirk Brusch ist als Freiberufler tätig.</p>
                      <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit.</p>
                      <p>Für Inhalte sind wir nach den allgemeinen Gesetzen verantwortlich.</p>
                      <p>Bei Links zu externen Seiten liegt die Verantwortung beim jeweiligen Betreiber.</p>
                      <p>Alle Inhalte unterliegen dem deutschen Urheberrecht.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
