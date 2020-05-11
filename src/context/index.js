import React, { createContext } from 'react';
import { AuthProvider } from './AuthContext';
import { ProjectProvider } from './ProjectContext';
import { UserProvider } from './UserContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <ProjectProvider>
        <UserProvider>
          <AuthProvider>{props.children}</AuthProvider>
        </UserProvider>
      </ProjectProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
