import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'

interface Props {
  params: { id: number }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  return NextResponse.json({ id, name: 'Milk', price: 2.5 })
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      {
        error: validation.error.errors,
      },
      { status: 400 }
    )
  }

  return NextResponse.json({ id, name: body.name, price: body.price })
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  return NextResponse.json({})
}
