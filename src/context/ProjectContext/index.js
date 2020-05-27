import React, { createContext, useState, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  UPDATE_PROJECT,
  GET_PROJECT_BY_ID,
  CREATE_PROJECT,
} from '../../graphql/project';
import { projectReducer } from '../../reducers/projectReducer';
import { CREATE_VACANCY } from '../../graphql/vacancy';

const ProjectContext = createContext({
  projectId: null,
});

const ProjectProvider = (props) => {
  const [state, dispatch] = useReducer(projectReducer, {
    project: null,
  });
  const { project } = state;
  const [projectId, setProjectId] = useState(null);

  //Create
  const [createProject] = useMutation(CREATE_PROJECT, {
    update(_, { data }) {
      dispatch({ type: 'CREATE_PROJECT', payload: data.createProject });
      setProjectId(data.createProject._id);
    },
  });

  //Update
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    update(_, { data: { updateProject: project } }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: project });
    },
  });

  //Get project
  const [getProjectById] = useLazyQuery(GET_PROJECT_BY_ID, {
    onCompleted: (data) => {
      dispatch({ type: 'GET_PROJECT_BY_ID', payload: data.projectById });
    },
  });

  const [createVacancy] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: data.createVacancy });
    },
  });

  //update
  const update = async (values) => {
    try {
      await updateProject(values);
    } catch (error) {
      console.log('PROJECT ERROR', error);
    }
  };

  //Reset Project
  const resetProject = async () => {
    try {
      await setProjectId(null);
      await dispatch({ type: 'RESET_PROJECT', payload: null });
    } catch (error) {
      console.log('RESET PROJETC', error);
    }
  };
  return (
    <ProjectContext.Provider
      value={{
        projectId,
        setProjectId,
        update,
        project,
        getProjectById,
        resetProject,
        createProject,
        createVacancy,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
