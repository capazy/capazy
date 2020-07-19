import React, { createContext, useState, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  UPDATE_PROJECT,
  GET_PROJECT_BY_ID,
  CREATE_PROJECT,
  DELETE_PROJECT_FILE,
} from '../../graphql/project';
import { projectReducer } from '../../reducers/projectReducer';
import {
  CREATE_VACANCY,
  CANCEL_VACANCY,
  GET_VACANCIES,
} from '../../graphql/vacancy';

const ProjectContext = createContext({
  projectId: null,
  vacancies: null,
});

const ProjectProvider = (props) => {
  const [state, dispatch] = useReducer(projectReducer, {
    project: null,
    vacancies: null,
  });
  const { project, vacancies } = state;
  const [projectId, setProjectId] = useState(null);

  // APOLLO FUNTIONS
  // create
  const [createProject] = useMutation(CREATE_PROJECT, {
    update(_, { data }) {
      dispatch({ type: 'CREATE_PROJECT', payload: data.createProject });
      setProjectId(data.createProject._id);
    },
  });

  // update
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    update(_, { data: { updateProject: project } }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: project });
    },
  });

  // get project
  const [getProjectById] = useLazyQuery(GET_PROJECT_BY_ID, {
    onCompleted: (data) => {
      dispatch({ type: 'GET_PROJECT_BY_ID', payload: data.projectById });
    },
  });

  // create vacancy
  const [createVacancy] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: data.createVacancy });
    },
  });

  // delete vacancy
  const [cancelVacancy] = useMutation(CANCEL_VACANCY, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: data.cancelVacancy });
    },
  });

  // delete project file
  const [deleteProjectFile] = useMutation(DELETE_PROJECT_FILE, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_PROJECT', payload: data.deleteProjectFile });
    },
  });

  // get project
  const [getVacanciesQuery] = useLazyQuery(GET_VACANCIES, {
    onCompleted: (data) => {
      dispatch({ type: 'GET_VACANCIES', payload: data.vacancies });
    },
  });

  // CONTEXT FUNTIONS
  // Create
  const create = async (values) => {
    try {
      await createProject({ variables: values });
    } catch (error) {
      console.log(error);
    }
  };

  // update
  const update = async (values) => {
    try {
      await updateProject({ variables: values });
    } catch (error) {
      console.log(error);
    }
  };

  // cancel vacancy
  const deleteVacancy = async (values) => {
    try {
      await cancelVacancy({ variables: values });
    } catch (error) {
      console.log(error);
    }
  };

  // cancel vacancy
  const getVacancies = async (values) => {
    try {
      await getVacanciesQuery({ variables: values });
    } catch (error) {
      console.log(error);
    }
  };

  // Reset Project
  const resetProject = async () => {
    try {
      await setProjectId(null);
      await dispatch({ type: 'RESET_PROJECT', payload: null });
    } catch (error) {
      console.log('RESET PROJETC', error);
    }
  };

  // delete project file
  const deleteFile = async (values) => {
    try {
      await deleteProjectFile({ variables: values });
    } catch (error) {
      console.log(error);
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
        create,
        createVacancy,
        deleteVacancy,
        deleteFile,
        getVacancies,
        vacancies,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
