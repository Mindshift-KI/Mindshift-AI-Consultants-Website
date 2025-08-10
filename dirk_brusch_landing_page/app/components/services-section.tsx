
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Brain,
      title: "Mindset-Entwicklung",
      description: "Wo steht Ihr Unternehmen mental und wie entwickeln wir es weiter?",
      details: [
        "KI-Angst in KI-Begeisterung verwandeln",
        "Führungskräfte für den Wandel gewinnen", 
        "Unternehmenskultur KI-ready machen"
      ]
    },
    {
      icon: Users,
      title: "Transformations-Begleitung",
      description: "Sind Sie bereit für den KI-Wandel und wie gestalten wir ihn gemeinsam?",
      details: [
        "Strukturierte KI-Roadmap entwickeln",
        "Change-Prozesse erfolgreich steuern",
        "Teams durch die Transformation führen"
      ]
    },
    {
      icon: Zap,
      title: "Change-Beschleunigung",
      description: "Wie schaffen wir Akzeptanz und Begeisterung für Veränderung?",
      details: [
        "Widerstände in Chancen verwandeln",
        "Mitarbeiter zu KI-Botschaftern machen",
        "Momentum für nachhaltigen Wandel schaffen"
      ]
    },
    {
      icon: TrendingUp,
      title: "Zukunftsfähigkeit",
      description: "Wie bleiben Sie langfristig relevant und wettbewerbsfähig?",
      details: [
        "KI-Strategien für nachhaltigen Erfolg",
        "Kontinuierliche Anpassungsfähigkeit aufbauen",
        "Marktposition durch KI stärken"
      ]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Brain className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Was ich wirklich tue
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ich verkaufe keine Technologie. Ich verkaufe <span className="font-semibold text-blue-600">Mut</span>. 
            Mut, die KI-Transformation als Chance zu begreifen.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-lg text-blue-800 font-medium">
              Mein Ansatz ist strukturiert, aber flexibel: Das Wichtigste ist, dass ich auf die vorhandene 
              Situation und die Menschen eingehe. Jedes Unternehmen ist anders, jede Transformation einzigartig.
            </p>
          </div>
        </motion.div>



        {/* KI-Klarheits-Kompass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Der KI-Klarheits-Kompass
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Meine strukturierte Herangehensweise orientiert sich an vier Kernbereichen, 
                die gemeinsam den Weg zu einer erfolgreichen KI-Transformation weisen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Mindset-Entwicklung: Die richtige Einstellung schaffen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Transformations-Begleitung: Strukturiert und sicher vorankommen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Change-Beschleunigung: Schwung aufbauen und halten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Zukunftsfähigkeit: Nachhaltig erfolgreich bleiben</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Image
                src="https://cdn.abacus.ai/images/cd5dd1e5-3a3c-41f8-a793-5e87f68cd751.png"
                alt="KI-Klarheits-Kompass"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Warum Unternehmen mir vertrauen
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Vertrauen rechtfertigen</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Ich kenne die Herausforderungen von Unternehmen – den Druck bei wichtigen Projekten, die schwierigen Entscheidungen in unsicheren Zeiten.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mut belohnen</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Weil ich die Verantwortung kenne, die Unternehmen mir anvertrauen. Ihren Mut für Veränderungen führe ich erfolgreich zum Ziel.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Menschen bewegen</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Hinter jedem Projekt stehen Menschen mit Ängsten, Hoffnungen und Träumen – von der Führungsebene bis zum einzelnen Mitarbeiter.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/dbr-business-professional.png"
                alt="Dirk Brusch - Vertrauensvoller Berater"
                width={300}
                height={360}
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.open('https://calendly.com/dirk-brusch-cre8web3', '_blank')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Jetzt KI-Readiness Check + Beratung buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
