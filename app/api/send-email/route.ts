import { Resend } from 'resend'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'

// Commented out because this is just for testing purposes

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  // await resend.emails.send({
  //   from: 'jonmar@daytwo.no',
  //   to: 'jonmarmontaniel@gmail.com',
  //   subject: 'Hello from Resend!',
  //   react: WelcomeTemplate({ name: 'Jonmar Montaniel' }),
  // })

  return NextResponse.json({})
}
