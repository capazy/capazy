import React from 'react';
import App from './App';
import { StoreProvider } from 'easy-peasy';

// apollo
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

// global Context
import GlobalProvider from './context';

// error store
import store from './errorsStore';
import toggleAlert from './utils/toggleAlert';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_API_URI,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      if (message.includes('Unauthenticated')) {
        console.log('redirect to /login');
      } else {
        toggleAlert(message);
      }
      return null;
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <StoreProvider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </StoreProvider>
  </ApolloProvider>
);
