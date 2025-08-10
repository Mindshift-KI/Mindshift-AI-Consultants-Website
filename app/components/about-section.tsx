
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Lightbulb, Zap, Users, Trophy } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const strengths = [
    {
      icon: "https://cdn.abacus.ai/images/633b9363-46e8-4fa2-8a41-89d2ff854a3e.png",
      title: "Leistungsorientierung",
      description: "Jeden Tag bei null anfangen, am Abend ein greifbares Ergebnis haben – das ist mein Lebenselixier."
    },
    {
      icon: "https://cdn.abacus.ai/images/032d16f3-cb39-47d3-9d1e-0aa0f001b157.png",
      title: "Tatkraft", 
      description: "Während andere noch diskutieren, habe ich bereits die halbe Wegstrecke hinter mir."
    },
    {
      icon: "https://cdn.abacus.ai/images/7477bc8b-c3b7-4062-b09b-55c1bb295b04.png",
      title: "Vorstellungskraft",
      description: "Ich sehe Verbindungen, wo andere nur Chaos erkennen – meine Superkraft bei Transformationen."
    },
    {
      icon: "https://cdn.abacus.ai/images/4ad4996d-05a7-454a-8889-deb5612a3ef1.png",
      title: "Wettbewerbsorientierung",
      description: "Ich will gewinnen. Immer. Besonders wenn es um die Zukunft meiner Klienten geht."
    },
    {
      icon: "https://cdn.abacus.ai/images/d3483e16-3dc3-44c1-b431-e91a52ef496c.png",
      title: "Kontaktfreudigkeit",
      description: "In meiner Welt gibt es keine Fremden – nur Freunde, die ich noch nicht kennengelernt habe."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Warum ich tue, was ich tue
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Es war ein Dienstagmorgen im März 2023, als mir klar wurde: 
            Ich habe alle großen Tech-Revolutionen nicht nur miterlebt, sondern aktiv mitgestaltet.
          </p>
        </motion.div>

        {/* Tech-Revolutionen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            37 Jahre Tech-Revolutionen - Von Anfang an dabei
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">1988</div>
                <div className="text-sm text-gray-600">PC-Ära beginnt</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">1991</div>
                <div className="text-sm text-gray-600">World Wide Web</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">1995</div>
                <div className="text-sm text-gray-600">E-Commerce Boom</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2000</div>
                <div className="text-sm text-gray-600">Dotcom-Revolution</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2007</div>
                <div className="text-sm text-gray-600">Mobile Revolution</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2010</div>
                <div className="text-sm text-gray-600">Cloud Computing</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2015</div>
                <div className="text-sm text-gray-600">Big Data & Analytics</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2020</div>
                <div className="text-sm text-gray-600">Remote Work Era</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2023</div>
                <div className="text-sm text-gray-600">KI-Revolution</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-sm text-gray-600">Zukunft gestalten</div>
              </div>
            </div>
            <p className="text-center text-lg text-gray-700 mt-6 font-medium">
              Von 1988 bis 2025 – Kontinuierliche Innovation und Transformation
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meine Mission</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>Ich bin Dirk Brusch, 63 Jahre alt, verheiratet, Vater von drei Kindern.</strong> 
                  Nach 21 Jahren als IT-Consultant habe ich eine Mission: Unternehmen dabei zu helfen, 
                  die KI-Revolution nicht als Bedrohung, sondern als größte Chance ihrer Geschichte zu begreifen.
                </p>
                <p className="font-semibold text-blue-600">
                  "Nicht die Technologie entscheidet über Erfolg oder Misserfolg, 
                  sondern das Mindset der Menschen dahinter."
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/dirk-causual-friendly.png"
                alt="Dirk Brusch - Vertrauensvolle Beratung"
                width={320}
                height={400}
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 rounded-lg p-6 mb-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">Der Wendepunkt</h3>
          <p className="text-gray-700 mb-2">
            <em>"Herr Brusch, ich habe Angst vor KI. Nicht vor der Technologie – 
            vor dem, was sie mit meinen Menschen macht."</em>
          </p>
          <p className="text-lg font-semibold text-blue-700">
            In diesem Moment wusste ich: Das ist meine Mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meine Stärken - ehrlich und transparent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <Image
                    src={strength.icon}
                    alt={strength.title}
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{strength.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
