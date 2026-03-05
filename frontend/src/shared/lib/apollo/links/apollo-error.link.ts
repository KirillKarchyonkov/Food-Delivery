import { Observable } from '@apollo/client'
import { ErrorLink } from '@apollo/client/link/error'
import { CombinedGraphQLErrors } from '@apollo/client'

import { GetNewTokensDocument } from '@/__generated__/graphql'
import { simpleApolloClient } from '../apollo-client'

export const errorLink = new ErrorLink(({ error, operation, forward }) => {
  if (!CombinedGraphQLErrors.is(error)) return

  for (const gqlError of error.errors) {
    if (gqlError.extensions?.code === 'UNAUTHENTICATED') {
      return new Observable(observer => {
        simpleApolloClient
          .query({
            query: GetNewTokensDocument,
            fetchPolicy: 'no-cache'
          })
          .then(() => {
            forward(operation).subscribe(observer)
          })
          .catch(err => {
            observer.error(err)
          })
      })
    }
  }
  return
})