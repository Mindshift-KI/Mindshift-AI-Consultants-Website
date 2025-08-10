
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Globe, Send, CheckCircle, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const openCalendly = () => {
    window.open('https://calendly.com/dirkbrusch/ki-erstberatung', '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Send className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Der nächste Schritt
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Die KI-Revolution wartet nicht auf Sie. Aber Sie können sie für sich nutzen – 
            wenn Sie das richtige Mindset haben.
          </p>
          <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sie haben zwei Möglichkeiten:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-600 mb-2">Warten</h4>
                <p className="text-gray-500">und hoffen, dass die KI-Revolution an Ihrem Unternehmen vorbeigeht</p>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Handeln</h4>
                <p className="text-blue-700">und mit mir die Zukunft Ihres Unternehmens aktiv gestalten</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hauptelement: Terminbuchung - angepasst auf halbe Breite */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            <div className="text-center mb-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                KI-Readiness Check + Erstberatung
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                30 Min. Analyse Ihrer KI-Potentiale + persönlicher Aktionsplan für Ihre erfolgreiche KI-Transformation
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Was Sie in unserem Gespräch erwartet:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">30 Min. Analyse Ihrer KI-Potentiale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Persönlicher Aktionsplan für Ihre KI-Transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Identifikation konkreter KI-Potentiale für Ihr Business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ehrliche Einschätzung: Wo stehen Sie wirklich?</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold w-full"
              >
                Jetzt Termin buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Unverbindlich • Kostenfrei • 30 Minuten • Online
              </p>
            </div>
          </motion.div>

          {/* Rechte Spalte: Zwei kleinere Boxen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Was Sie von mir erwarten können
              </h3>
              <ul className="space-y-3">
                {[
                  'Ehrlichkeit: Ich sage Ihnen, was Sie hören müssen',
                  'Erfahrung: 37 Jahre als Berater in Zeiten technologischer Umbrüche', 
                  'Leidenschaft: Ich brenne für das, was ich tue',
                  'Flexibilität: Ich passe mich an Ihre Situation an',
                  'Ergebnisse: Am Ende zählen nur messbare Erfolge',
                  'Netzwerk-Power: Zugriff auf starke Expertise'
                ].map((promise, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex-1">
              <h3 className="text-xl font-bold mb-4">
                Alternative Wege zu mir
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold text-sm">Direkte E-Mail</p>
                    <a 
                      href="mailto:dirk.brusch@mindshift-ai-consultants.de"
                      className="text-blue-200 hover:text-white transition-colors text-xs"
                    >
                      dirk.brusch@mindshift-ai-consultants.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/dirkbrusch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors text-xs"
                    >
                      linkedin.com/in/dirkbrusch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abschließendes Zitat - volle Breite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              "KI verstehen statt fürchten"
            </h3>
            <p className="text-xl text-blue-100 mb-4">
              Das ist der Weg für Entscheidungsträger, die ihre Zukunft selbst gestalten wollen.
            </p>
            <p className="text-blue-200 font-semibold text-lg">– Dirk Brusch</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
