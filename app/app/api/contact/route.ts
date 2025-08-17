
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, timestamp, formType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, Email und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    // Since we're using Calendly for contact, we'll just log and return success
    console.log('Contact form submission:', { name, email, company, message, formType })

    // For now, we'll just return success since Calendly handles contact collection
    return NextResponse.json({ 
      success: true, 
      message: 'Nachricht erfolgreich übermittelt. Wir melden uns bald bei Ihnen.',
      redirectToCalendly: true
    })

  } catch (error) {
    console.error('Error processing contact:', error)
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Nachricht' },
      { status: 500 }
    )
  }
}
