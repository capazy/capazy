import React, { createContext } from 'react';
import { AuthProvider } from './AuthContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <AuthProvider>{props.children}</AuthProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
