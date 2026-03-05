'use client'

import { LogoutDocument } from "@/__generated__/graphql"
import { Button } from "@/shared/components/ui/button"
import { PAGES } from "@/shared/config/page.config"
import { useApolloClient, useMutation } from "@apollo/client/react"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Logout() {

    const [logout, { loading }] = useMutation(LogoutDocument)

    const client = useApolloClient()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await logout()
            await client.clearStore()

            router.push(PAGES.LOGIN)
        } catch (error){
            console.error('Logout error:', error)
        }
    }

    return <Button
        variant="soft"
        size="icon"
        className="mr-6 rounded-full"
        onClick={handleLogout}
        disabled={loading}
    >
        <LogOut className="size-5" />
    </Button>
}
