import React, { createContext } from 'react';
import { UserProvider } from './UserContext';
import { ProjectProvider } from './ProjectContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <ProjectProvider>
        <UserProvider>{props.children}</UserProvider>
      </ProjectProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
