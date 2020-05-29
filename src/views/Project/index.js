import React, { useEffect, useContext, useState } from 'react';
import qs from 'qs';
import toggleAlert from '../../utils/toggleAlert';
// components
import ProjectForm from './components/ProjectForm';
import VacancyForm from './components/VacancyForm';

// context
import { ProjectContext } from '../../context/ProjectContext';

// utils
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';
import { Redirect } from 'react-router-dom';

const Project = (props) => {
  const { location } = props;
  const [isPublished, setIsPublished] = useState(false);
  const {
    setProjectId,
    projectId,
    update,
    project,
    getProjectById,
    create,
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

  const publish = async () => {
    try {
      const values = { projectId: projectId, isOpen: true };
      await update(values);
      setIsPublished(true);
      toggleAlert('Your project has been published', 'success');
    } catch (error) {
      console.log('Publish', error);
    }
  };
  if (isPublished) {
    return <Redirect push to="/created-projects" />;
  }
  return (
    <div className="max-w-lg mx-auto px-2">
      <ProjectForm
        setProjectId={setProjectId}
        projectId={projectId}
        update={update}
        project={project}
        create={create}
      />
      {projectId && (
        <VacancyForm
          projectId={projectId}
          project={project}
          createVacancy={createVacancy}
        />
      )}
      <div className="flex items-center justify-end mt-10">
        <button
          className="mb-3 rounded-full  items-center shadow bg-gray-500 px-4 py-2 text-white hover:bg-gray-400 m-2"
          onClick={() => toggleAlert('Project saved', 'success')}
        >
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
