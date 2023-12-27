import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import prisma from '@/prisma/client'

interface Props {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: Props) {
  const id = Number(params.id)

  const product = await prisma.product.findUnique({ where: { id } })
  return NextResponse.json(product)
}

export async function PUT(request: NextRequest, { params }: Props) {
  const id = Number(params.id)
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

  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      price: body.price,
    },
  })

  return NextResponse.json(updatedProduct)
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const id = Number(params.id)
  const product = await prisma.product.findUnique({ where: { id } })

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const deletedProduct = prisma.product.delete({ where: { id } })
  return NextResponse.json(deletedProduct)
}
