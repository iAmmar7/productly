import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://dummyjson.com/',
});

// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

export default client;
