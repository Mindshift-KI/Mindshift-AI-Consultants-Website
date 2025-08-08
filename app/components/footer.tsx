
import Link from 'next/link'
import { Brain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Dirk Brusch</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              KI-Transformationsberater mit 37 Jahren Erfahrung. 
              Ihr Partner für erfolgreiche KI-Transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>dirk.brusch@mindshift-ai-consultants.de</p>
              <p>linkedin.com/in/dirkbrusch</p>
              <p>mindshift-ai-consultants.de</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link 
                href="/impressum" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400" suppressHydrationWarning>
            © 2025 Dirk Brusch. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
