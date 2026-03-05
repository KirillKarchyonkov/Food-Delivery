'use server'

import type { Role } from '@/__generated__/graphql'
import { jwtVerify } from 'jose'


type TAuthTokenData = {
  id: string
  role: Role
}

export async function jwtVerifyServer(accessToken: string) {
  try {
    const { payload }: { payload: TAuthTokenData } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    )
    console.log(payload)
    return payload
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('exp claim timestamp check failed')
    ) {
      console.log('Token has expired')
      return null
    }

    console.log('Error verifying JWT:', error)
    return null
  }
}