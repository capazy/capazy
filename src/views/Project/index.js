import React, { useEffect, useContext } from 'react';
import qs from 'qs';

// components
import ProjectForm from './components/ProjectForm';
import VacancyForm from './components/VacancyForm';

// context
import { ProjectContext } from '../../context/ProjectContext';

// utils
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';

const Project = (props) => {
  const { location } = props;
  const {
    setProjectId,
    projectId,
    update,
    project,
    getProjectById,
    createProject,
    createVacancy,
  } = useContext(ProjectContext);
  const { projectId: projectIdQuery } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    const fetchProjectIdQuery = async () => {
      if (projectId) {
        await setQueryStringWithoutPageReload(location, 'projectId', projectId);
      }
      if (projectIdQuery) {
        await setProjectId(projectIdQuery);
        await getProjectById({ variables: { projectId: projectIdQuery } });
      }
    };
    fetchProjectIdQuery();
  }, [projectId, getProjectById, location, projectIdQuery, setProjectId]);

  const publish = () => {
    // const values = { projectid: projectId, isOpen: false };
    // update({ variables: values });
  };

  return (
    <div className="max-w-lg mx-auto px-2">
      <ProjectForm
        setProjectId={setProjectId}
        projectId={projectId}
        update={update}
        project={project}
        createProject={createProject}
      />
      {projectId && (
        <VacancyForm
          projectId={projectId}
          project={project}
          createVacancy={createVacancy}
        />
      )}
      <div className="flex items-center justify-end mt-10">
        <button className="mb-3 rounded-full  items-center shadow bg-gray-500 px-4 py-2 text-white hover:bg-gray-400 m-2">
          Save
        </button>
        <button
          className="mb-3 rounded-full  items-center shadow bg-brand-blue px-4 py-2 text-white hover:bg-blue-400 m-2"
          onClick={() => publish()}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Project;
