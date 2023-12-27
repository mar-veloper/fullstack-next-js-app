'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Case, Default, Switch } from 'react-if'

const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <div className="flex space-x-3 bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>

      <Switch>
        <Case condition={status === 'authenticated'}>
          <div>{session?.user!.name}</div>
          <Link href="/api/auth/signout">Logout</Link>
        </Case>
        <Case condition={status === 'unauthenticated'}>
          <Link href="/api/auth/signin">Login</Link>
        </Case>
        <Default>
          <span className="loading loading-dots loading-l"></span>
        </Default>
      </Switch>
    </div>
  )
}

export default NavBar
