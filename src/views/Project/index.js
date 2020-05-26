import React, { useEffect, useContext, useState } from 'react';
import qs from 'qs';
import ProjectForm from './components/ProjectForm';
import VacancyForm from './components/VacancyForm';
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';
import { ProjectContext } from '../../context/ProjectContext';

const Project = (props) => {
  const { location } = props;
  const { setProjectId, projectId, update, project } = useContext(
    ProjectContext
  );
  const { projectId: projectIdQuery } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [vancancies, setVacancies] = useState();

  const isCreateMode = projectIdQuery;

  useEffect(() => {
    const fetchProjectIdQuery = async () => {
      if (projectId) {
        console.log('QUERY STRING');
        await setQueryStringWithoutPageReload(location, 'projectId', projectId);
        await setVacancies(true);
      }
      if (projectIdQuery) {
        await setProjectId(projectIdQuery);
      }
    };
    fetchProjectIdQuery();
  }, [projectId]);
  return (
    <div>
      <ProjectForm
        setProjectId={setProjectId}
        projectId={projectId}
        isCreateMode={isCreateMode}
        update={update}
        project={project}
      />
      {projectId && <VacancyForm />}
    </div>
  );
};

export default Project;
