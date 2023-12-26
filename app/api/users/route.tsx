import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'Jonmar',
    },
    {
      id: 2,
      name: 'Alexandra',
    },
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    )
  }

  const { name, price } = body
  return NextResponse.json({ id: 1, name, price }, { status: 201 })
}
