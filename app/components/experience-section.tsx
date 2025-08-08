
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Award, Building, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timeline = [
    {
      year: "1988",
      title: "Der Moment der Wahrheit",
      description: "Start als EDV-Berater. Das Internet war noch ein Geheimtipp, Google existierte nicht. Bei CompuNet (heute ComputaCenter) implementierte ich die ersten LAN-Netzwerke im Frankfurter Bankenumfeld.",
      icon: Calendar
    },
    {
      year: "1999-2003",
      title: "Die schmerzhafte Lektion",
      description: "Als Gesellschafter der YIC AG erlebte ich den Dot-Com-Boom hautnah mit – und den Crash. Das war mein erster großer Fehler: Ich hatte die Technologie überschätzt und die Menschen unterschätzt.",
      icon: Lightbulb
    },
    {
      year: "2004-heute",
      title: "Die Erkenntnis",
      description: "Seit 2004 als freiberuflicher Consultant zahlreiche IT-Projekte begleitet. Von Banken bis Automobilhersteller, von öffentlichen Vergaben bis zu internationalen Outsourcing-Deals.",
      icon: Building
    },
    {
      year: "2023",
      title: "Die KI-Revolution",
      description: "Intensive Auseinandersetzung mit KI-Technologien. Entwicklung von KI-spezifischen Transformationsansätzen basierend auf 37 Jahren Erfahrung.",
      icon: Award
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meine Geschichte: Von Zweifeln zu Klarheit
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            37 Jahre Erfahrung in der Begleitung technologischer Revolutionen – 
            jede Phase hat mich für die KI-Transformation vorbereitet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <item.icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xl font-bold text-blue-600">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-lg p-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Warum KI anders ist – und warum meine Erfahrung jetzt zählt
              </h3>
              <p className="text-xl text-blue-700 font-semibold mb-4">
                "Ich habe alle großen Tech-Veränderungen nicht nur miterlebt, sondern mitgestaltet. 
                Diese Erfahrung ist bei KI unbezahlbar."
              </p>
              <p className="text-gray-700 leading-relaxed">
                Heute, mit 62, stehe ich vor der größten technologischen Revolution seit der Industrialisierung. 
                Und diesmal bringe ich 37 Jahre Berufserfahrung mit – genau das, was Unternehmen jetzt brauchen.
              </p>
            </div>
            
            <div className="relative flex justify-center">
              <Image
                src="/images/dirk-causual-confident.png"
                alt="Dirk Brusch - 37 Jahre Erfahrung"
                width={380}
                height={480}
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
