import React, { createContext, useState, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { UPDATE_PROJECT, GET_PROJECT_BY_ID } from '../../graphql/project';
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

  //
  const [getProjectById] = useLazyQuery(GET_PROJECT_BY_ID, {
    onCompleted: (data) => {
      dispatch({ type: 'GET_PROJECT_BY_ID', payload: data.projectById });
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
      value={{ projectId, setProjectId, update, project, getProjectById }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
