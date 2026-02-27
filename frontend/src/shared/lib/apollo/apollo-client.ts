import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { httpLink } from "./links/apollo-http.link";
import { IS_CLIENT } from "@/shared/constants/app.constans";

const createApolloClient = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
    devtools: {
        enabled: true
    }
});

export const simpleApolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    devtools: {
        enabled: true
    }
});

export const serverApolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    devtools: {
        enabled: true
    },
    ssrMode: true,
defaultOptions: {
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
}
});

export function getApolloClient() {
    return IS_CLIENT ? createApolloClient : serverApolloClient;
}