import React, { useEffect, useContext, useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import StepWizard from 'react-step-wizard';
import qs from 'qs';

// components
import ProjectForm from './components/ProjectForm';
import ProjectFiles from './components/ProjectFiles';
import VacancyForm from './components/VacancyForm';

// context
import { ProjectContext } from '../../context/ProjectContext';

// utils
import toggleAlert from '../../utils/toggleAlert';
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';

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
    deleteVacancy,
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

  const handlePublish = async () => {
    try {
      const values = { projectId, isOpen: true };
      await update(values);
      setIsPublished(true);
      toggleAlert('Your project has been published', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  if (isPublished) {
    return <Redirect push to="/created-projects" />;
  }

  return (
    <Fragment>
      <div className="max-w-2xl mx-auto px-2 mt-6">
        <StepWizard transitions={'none'}>
          <ProjectForm
            setProjectId={setProjectId}
            projectId={projectId}
            update={update}
            project={project}
            create={create}
          />

          <VacancyForm
            projectId={projectId}
            project={project}
            createVacancy={createVacancy}
            deleteVacancy={deleteVacancy}
            handlePublish={handlePublish}
          />
          <ProjectFiles
            projectId={projectId}
            update={update}
            handlePublish={handlePublish}
          />
        </StepWizard>
      </div>
    </Fragment>
  );
};

export default Project;
