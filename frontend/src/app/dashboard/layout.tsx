import { Header } from '@/features/layout/header/Header'
import type { PropsWithChildren } from 'react'


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}