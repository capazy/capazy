import React, { createContext } from 'react';
import { UserProvider } from './UserContext';
import { ProjectProvider } from './ProjectContext';
import { ChatProvider } from './ChatContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <ProjectProvider>
        <ChatProvider>
          <UserProvider>{props.children}</UserProvider>
        </ChatProvider>
      </ProjectProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
