
'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Shield } from 'lucide-react'

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8 text-center">
                Ihre Privatsphäre ist uns wichtig. Hier finden Sie Informationen zum Umgang mit Ihren Daten.
              </p>
              
              <div className="grid gap-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlicher</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-1 text-gray-700">
                      <p className="font-semibold">Mindshift AI Consultants</p>
                      <p>Am Schäfersberg 16</p>
                      <p>65527 Niedernhausen</p>
                      <p>E-Mail: info@mindshift-ai-consultants.de</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Datenverarbeitung</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4 text-gray-700">
                      <p>Wir verarbeiten personenbezogene Daten nur im rechtlich zulässigen Rahmen.</p>
                      <p>Bei Websitebesuchen werden technisch notwendige Daten erfasst (IP-Adresse, Browser, Zugriffszeit).</p>
                      <p>Kontaktdaten werden nur zur Bearbeitung Ihrer Anfragen verwendet.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4 text-gray-700">
                      <p>Diese Website verwendet Cookies zur Verbesserung der Funktionalität.</p>
                      <p>Sie können Cookie-Einstellungen in Ihrem Browser anpassen.</p>
                      <p>Notwendige Cookies sind für den Betrieb der Website erforderlich.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Rechte</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>• Auskunft über gespeicherte Daten</p>
                      <p>• Berichtigung falscher Daten</p>
                      <p>• Löschung nicht mehr benötigter Daten</p>
                      <p>• Einschränkung der Datenverarbeitung</p>
                      <p>• Datenübertragbarkeit</p>
                      <p>• Beschwerde bei Aufsichtsbehörden</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      Bei Fragen zum Datenschutz kontaktieren Sie uns unter: 
                      info@mindshift-ai-consultants.de
                    </p>
                    <p className="text-gray-600 text-xs mt-4">Stand: August 2025</p>
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
