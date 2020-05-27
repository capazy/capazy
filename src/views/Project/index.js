import React, { useEffect, useContext } from 'react';
import qs from 'qs';
import ProjectForm from './components/ProjectForm';
import VacancyForm from './components/VacancyForm';
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';
import { ProjectContext } from '../../context/ProjectContext';

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

  const isCreateMode = projectIdQuery;

  useEffect(() => {
    const fetchProjectIdQuery = async () => {
      if (projectId) {
        console.log('QUERY STRING');
        await setQueryStringWithoutPageReload(location, 'projectId', projectId);
      }
      if (projectIdQuery) {
        await setProjectId(projectIdQuery);
        await getProjectById({ variables: { projectId: projectIdQuery } });
      }
    };
    fetchProjectIdQuery();
  }, [projectId, getProjectById, location, projectIdQuery, setProjectId]);
  return (
    <div>
      <ProjectForm
        setProjectId={setProjectId}
        projectId={projectId}
        isCreateMode={isCreateMode}
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
    </div>
  );
};

export default Project;