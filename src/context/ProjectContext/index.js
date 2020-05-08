import React, { createContext, useState } from 'react';

const ProjectContext = createContext({
  projectId: null,
});

const ProjectProvider = (props) => {
  const [projectId, setProjectId] = useState(null);

  return (
    <ProjectContext.Provider value={{ projectId, setProjectId }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
