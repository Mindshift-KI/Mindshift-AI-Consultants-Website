
'use client'

import { ArrowRight, Brain, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:text-left text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4" />
              <span>37 Jahre Transformationserfahrung</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">KI verstehen</span> statt fürchten
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Der Weg für Entscheidungsträger: Nach 37 Jahren als Wegbereiter technologischer Revolutionen 
              gestalte ich jetzt die <span className="font-semibold text-gray-900">KI-Transformation aktiv mit</span>.
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                🎯 KI-Readiness Check + Erstberatung
              </h3>
              <p className="text-blue-800">
                <strong>30 Min. Analyse</strong> Ihrer KI-Potentiale + <strong>persönlicher Aktionsplan</strong> für Ihre erfolgreiche KI-Transformation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mb-8">
              <Button 
                onClick={() => window.open('https://calendly.com/dirk-brusch-cre8web3', '_blank')}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Jetzt Termin buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('about')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Mehr erfahren
              </Button>
            </div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/dbr-business-welcome.png"
              alt="Dirk Brusch - KI-Transformationsberater"
              width={400}
              height={500}
              className="mx-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bewährte Methoden</h3>
            <p className="text-gray-600">37 Jahre Erfahrung in Transformationen aller großen Tech-Revolutionen</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mindset-Fokus</h3>
            <p className="text-gray-600">Nicht nur Technologie - Menschen und ihre Einstellung stehen im Mittelpunkt</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Starkes Netzwerk</h3>
            <p className="text-gray-600">Persönliche Beratung mit der Skalierbarkeit eines Expertennetzwerks</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
