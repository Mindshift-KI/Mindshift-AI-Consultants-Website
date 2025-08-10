
# Dirk Brusch - Professionelle Landing Page

Eine moderne, responsive Landing Page für KI-Transformationsberatung.

## 🌟 Features

- **Responsive Design** - Optimiert für Desktop, Tablet und Mobile
- **DSGVO-konform** - Cookie-Banner und Datenschutz-Integration
- **Kontaktformular** - Funktionierendes Kontaktformular mit E-Mail-Versand
- **SEO-optimiert** - Meta-Tags und strukturierte Daten
- **Performance** - Schnelle Ladezeiten durch Next.js-Optimierung

## 🚀 Technologie-Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (empfohlen)

## 📁 Projekt-Struktur

```
app/
├── app/                    # Next.js App Router
│   ├── api/contact/       # Kontaktformular API
│   ├── datenschutz/       # Datenschutz-Seite
│   ├── impressum/         # Impressum-Seite
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Hauptseite
├── components/            # React Komponenten
│   ├── Contact.tsx        # Kontaktformular
│   ├── CookieBanner.tsx   # Cookie-Banner
│   ├── Hero.tsx           # Hero-Sektion
│   ├── About.tsx          # Über mich Sektion
│   └── ...
└── public/               # Statische Assets
```

## 🔧 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Produktion
npm run build
```

## 📋 Deployment

Siehe `DEPLOYMENT_ANLEITUNG.md` für eine detaillierte Schritt-für-Schritt Anleitung.

## 📞 Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue in diesem Repository.

---

**Entwickelt für Dirk Brusch - KI-Transformationsberatung**
