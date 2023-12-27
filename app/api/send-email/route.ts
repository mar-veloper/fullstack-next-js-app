import { Resend } from 'resend'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  resend.emails.send({
    from: 'jonmar@daytwo.no',
    to: 'jonmarmontaniel@gmail.com',
    subject: 'Hello from Resend!',
    react: WelcomeTemplate({ name: 'Jonmar Montaniel' }),
  })

  return NextResponse.json({})
}
