import React, { createContext, useState, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_PROJECT } from '../../graphql/project';
import { projectReducer } from '../../reducers/projectReducer';

const ProjectContext = createContext({
  projectId: null,
});

const ProjectProvider = (props) => {
  const [state, dispatch] = useReducer(projectReducer, {
    project: null,
  });
  const { project } = state;
  const [projectId, setProjectId] = useState(null);

  //Update
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    update(_, { data: { updateProject: project } }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: project });
    },
  });

  const update = async (values) => {
    try {
      await updateProject(values);
    } catch (error) {
      console.log('PROJECT ERROR', error);
    }
  };
  return (
    <ProjectContext.Provider
      value={{ projectId, setProjectId, update, project }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
