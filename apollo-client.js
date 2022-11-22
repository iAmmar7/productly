import { ApolloClient, InMemoryCache, concat } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { RetryLink } from '@apollo/client/link/retry';

// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://dummyjson.com/',
});

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(restLink, retryLink),
});

export default client;
