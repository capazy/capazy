import React from 'react';
import App from './App';

// apollo
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

//Global Context
import GlobalProvider from './context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_API_URI,
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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ApolloProvider>
);
