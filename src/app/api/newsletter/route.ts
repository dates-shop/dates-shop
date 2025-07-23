import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'newsletter-emails.txt')
    // append the email with a newline
    await fs.appendFile(filePath, email.trim() + '\n')

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Failed to save email:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

