import { NextRequest, NextResponse } from 'next/server'

import { PAGES } from './shared/config/page.config'
import { getTokens } from './shared/lib/apollo/server/get-tokens.server'
import { jwtVerifyServer } from './shared/lib/apollo/server/jwt-verify.server'

export async function proxy(req: NextRequest) {

    const tokens = await getTokens(req)

    if (!tokens) {
        return NextResponse.redirect(new URL(PAGES.LOGIN, req.url))
    }

    if ('isRefreshedToken' in tokens) {

        const response = NextResponse.next()

        if (tokens.setCookie) {
            response.headers.set('set-cookie', tokens.setCookie)
        }

        return response
    }

    const verifiedData = await jwtVerifyServer(tokens.accessToken)

    if (!verifiedData) {
        return NextResponse.redirect(new URL(PAGES.LOGIN, req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*']
}