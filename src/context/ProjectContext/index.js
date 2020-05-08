import React, { createContext, useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { CREATE_USER, LOGIN } from '../../graphql/mutation/user';
// import { projectReducer } from '../../reducers/projectReducer';

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
