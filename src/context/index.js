import React, { createContext } from 'react';
import { AuthProvider } from './AuthContext';
import { ProjectProvider } from './ProjectContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <ProjectProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </ProjectProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
