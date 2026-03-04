import { MeDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client/react";

export function useAuth() {
    const { data, loading, } = useQuery(MeDocument, {
        fetchPolicy: 'cache-first',
        nextFetchPolicy: 'cache-first'
    })

    return {
        user: data?.me ?? null,
        isLoading: loading,
        isLoggedIn: !!data?.me
    }
}