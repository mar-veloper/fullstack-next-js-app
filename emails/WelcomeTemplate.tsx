import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from '@react-email/components'
import React from 'react'

interface Props {
  name: string
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.jonmardev.com">
              Click here to confirm your email
            </Link>
          </Container>{' '}
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
