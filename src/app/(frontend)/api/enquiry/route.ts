import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

import config from '@/payload.config'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'enquiries',
      data: {
        name,
        email,
        phone: phone || '',
        subject: subject || 'general',
        message,
        status: 'new',
      },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try calling us directly.' },
      { status: 500 },
    )
  }
}
