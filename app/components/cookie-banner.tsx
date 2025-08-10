
'use client'

import { useState, useEffect } from 'react'
import { Cookie, X, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start space-x-4">
            <Cookie className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Diese Website nutzt Cookies zur Verbesserung der Benutzererfahrung und für Analysezwecke. 
                Sie können Ihre Einstellungen jederzeit anpassen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-gray-300"
                >
                  Nur notwendige
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="border-gray-300"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Cookie-Einstellungen</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Notwendige Cookies</h3>
                  <p className="text-sm text-gray-600">Erforderlich für die Grundfunktionen</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4 text-blue-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Analyse-Cookies</h3>
                  <p className="text-sm text-gray-600">Helfen uns die Website zu verbessern</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="h-4 w-4 text-blue-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Marketing-Cookies</h3>
                  <p className="text-sm text-gray-600">Für personalisierte Inhalte</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  className="h-4 w-4 text-blue-600"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={savePreferences}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Einstellungen speichern
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="flex-1"
              >
                Abbrechen
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
