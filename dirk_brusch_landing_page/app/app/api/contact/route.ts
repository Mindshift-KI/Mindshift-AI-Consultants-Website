
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company: company || '',
        message,
        formType: formType || 'general',
        status: 'new',
        createdAt: new Date(timestamp || Date.now())
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Nachricht erfolgreich gespeichert',
      id: contact.id 
    })

  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Fehler beim Speichern der Nachricht' },
      { status: 500 }
    )
  }
}
