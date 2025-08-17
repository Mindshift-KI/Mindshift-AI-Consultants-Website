
# 🚀 Deployment-Anleitung: Dirk Brusch Landing Page

## Überblick
Diese Anleitung führt Sie Schritt für Schritt durch die Veröffentlichung Ihrer professionellen Landing Page unter Ihrer eigenen Domain.

**Geschätzte Zeit:** 15-20 Minuten  
**Kosten:** 0€ (kostenlose Accounts ausreichend)

---

## Phase 1: Account-Erstellung (5 Minuten)

### 1.1 GitHub Account erstellen

1. **Besuchen Sie:** https://github.com
2. **Klicken Sie:** "Sign up" (rechts oben)
3. **Füllen Sie aus:**
   - Username: z.B. "dirkbrusch" (wird Teil Ihrer GitHub-URL)
   - Email: Ihre geschäftliche E-Mail-Adresse
   - Password: Sicheres Passwort
4. **Verifizieren Sie** Ihre E-Mail-Adresse
5. **Wählen Sie:** "Free" Plan (ausreichend für Ihre Bedürfnisse)

### 1.2 Vercel Account erstellen

1. **Besuchen Sie:** https://vercel.com
2. **Klicken Sie:** "Sign Up" (rechts oben)
3. **Wählen Sie:** "Continue with GitHub" (empfohlen)
4. **Autorisieren Sie** Vercel für Ihren GitHub Account
5. **Wählen Sie:** "Hobby" Plan (kostenlos)

---

## Phase 2: Code zu GitHub hochladen (3 Minuten)

### 2.1 Repository erstellen

1. **In GitHub:** Klicken Sie auf das "+" Symbol (rechts oben)
2. **Wählen Sie:** "New repository"
3. **Füllen Sie aus:**
   - Repository name: `dirk-brusch-website`
   - Description: `Professionelle Landing Page für KI-Transformation`
   - ✅ Public (damit Vercel darauf zugreifen kann)
   - ✅ Add a README file
4. **Klicken Sie:** "Create repository"

### 2.2 Code hochladen

**WICHTIG:** Ich habe Ihren kompletten Website-Code vorbereitet. Sie finden alle Dateien in:
`/home/ubuntu/dirk_brusch_landing_page/`

**Upload-Optionen:**

**Option A: Drag & Drop (Einfachste Methoden)**
1. **Öffnen Sie** Ihr neues GitHub Repository
2. **Klicken Sie:** "uploading an existing file"
3. **Ziehen Sie** alle Dateien aus dem `dirk_brusch_landing_page` Ordner in das Browser-Fenster
4. **Commit message:** "Initial website upload"
5. **Klicken Sie:** "Commit changes"

**Option B: GitHub Desktop (Alternative)**
1. **Download GitHub Desktop:** https://desktop.github.com
2. **Klonen Sie** Ihr Repository
3. **Kopieren Sie** alle Website-Dateien in den lokalen Ordner
4. **Committen und pushen** Sie die Änderungen

---

## Phase 3: Website auf Vercel deployen (5 Minuten)

### 3.1 Projekt importieren

1. **In Vercel Dashboard:** Klicken Sie "New Project"
2. **Wählen Sie:** Ihr GitHub Repository `dirk-brusch-website`
3. **Framework Preset:** Next.js (wird automatisch erkannt)
4. **Root Directory:** `app` (WICHTIG!)
5. **Build Settings:** (Standard-Einstellungen beibehalten)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3.2 Deployment starten

1. **Klicken Sie:** "Deploy"
2. **Warten Sie** ca. 2-3 Minuten (Build-Prozess)
3. **Ergebnis:** Temporäre URL (z.B. `dirk-brusch-website.vercel.app`)

### 3.3 Website testen

1. **Klicken Sie** auf die generierte URL
2. **Testen Sie** alle Seiten:
   - Hauptseite
   - Kontaktformular
   - Impressum (Platzhalter)
   - Datenschutz (Platzhalter)
3. **Testen Sie** auf verschiedenen Geräten (Handy, Tablet, Desktop)

---

## Phase 4: Eigene Domain verbinden (7 Minuten)

### 4.1 Domain in Vercel hinzufügen

1. **In Vercel:** Gehen Sie zu Ihrem Projekt
2. **Klicken Sie:** "Settings" → "Domains"
3. **Geben Sie ein:** Ihre Domain (z.B. `dirkbrusch.de`)
4. **Klicken Sie:** "Add"

### 4.2 DNS bei Ihrem Domain-Provider konfigurieren

**Sie erhalten von Vercel Anweisungen wie:**

```
Fügen Sie diese DNS-Records hinzu:

A Record:
Name: @
Value: 76.76.19.61

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**Bei den meisten Providern (1&1, Strato, GoDaddy, etc.):**

1. **Loggen Sie sich** in Ihr Domain-Control-Panel ein
2. **Suchen Sie:** "DNS-Verwaltung" oder "DNS-Einstellungen"
3. **Fügen Sie hinzu:**
   - **A-Record:** `@` → IP-Adresse von Vercel
   - **CNAME-Record:** `www` → Vercel-CNAME
4. **Speichern Sie** die Änderungen

### 4.3 SSL-Zertifikat (automatisch)

- **Vercel erstellt automatisch** ein kostenloses SSL-Zertifikat
- **Warten Sie** 5-10 Minuten nach der DNS-Konfiguration
- **Ihre Website ist dann verfügbar unter:**
  - `https://dirkbrusch.de`
  - `https://www.dirkbrusch.de`

---

## Phase 5: Finalisierung

### 5.1 Content aktualisieren

**Impressum und Datenschutz:**
1. **Bereiten Sie** Ihre Impressum- und Datenschutz-Texte vor
2. **In GitHub:** Editieren Sie die Dateien:
   - `app/app/impressum/page.tsx`
   - `app/app/datenschutz/page.tsx`
3. **Vercel deployt automatisch** nach jedem GitHub-Commit

### 5.2 Kontaktdaten anpassen

**Falls erforderlich, passen Sie an:**
- E-Mail-Adresse
- Telefonnummer
- LinkedIn-Profil
- Adresse

**Dateien zum Bearbeiten:**
- `app/components/Contact.tsx`
- `app/components/Hero.tsx`

---

## 📋 Checkliste vor Go-Live

- [ ] Website lädt schnell und ist responsive
- [ ] Alle Links funktionieren
- [ ] Kontaktformular sendet E-Mails
- [ ] Cookie-Banner funktioniert
- [ ] Impressum und Datenschutz sind ausgefüllt
- [ ] SSL-Zertifikat ist aktiv (grünes Schloss im Browser)
- [ ] Google Analytics/Tracking (optional)

---

## 🆘 Häufige Probleme und Lösungen

### Problem: DNS-Änderungen dauern zu lange
**Lösung:** DNS-Propagation kann 24-48h dauern. Testen Sie mit einem DNS-Checker: https://dnschecker.org

### Problem: Website zeigt 404-Fehler
**Lösung:** Überprüfen Sie, ob der "Root Directory" in Vercel auf `app` gesetzt ist.

### Problem: Build schlägt fehl
**Lösung:** Stellen Sie sicher, dass alle Dateien korrekt hochgeladen wurden, besonders `package.json`.

### Problem: Kontaktformular funktioniert nicht
**Lösung:** Überprüfen Sie die API-Route in `app/app/api/contact/route.ts`.

---

## 📞 Support

**Bei Problemen:**
1. **GitHub Issues:** Erstellen Sie ein Issue in Ihrem Repository
2. **Vercel Support:** https://vercel.com/help
3. **Dokumentation:** https://nextjs.org/docs

---

## 🎉 Herzlichen Glückwunsch!

Ihre professionelle Landing Page ist jetzt live unter Ihrer eigenen Domain!

**Nächste Schritte:**
- Teilen Sie Ihre neue Website in sozialen Medien
- Fügen Sie sie zu Ihrer E-Mail-Signatur hinzu
- Verwenden Sie sie in Ihrer Geschäftskorrespondenz
- Optimieren Sie basierend auf Benutzer-Feedback

**Viel Erfolg mit Ihrer neuen Online-Präsenz!** 🚀
