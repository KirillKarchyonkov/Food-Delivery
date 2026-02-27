import type { Metadata } from 'next'
import { AuthForm } from '@/features/auth/ui/AuthForm'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constans'

export const metadata: Metadata = {
    title: 'Login',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <div>
        <AuthForm
            type="login"
        />
    </div>
}
