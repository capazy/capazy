import React, { useEffect, useContext, useState, Fragment } from 'react';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

// components
import ProjectForm from './components/ProjectForm';
import VacancyForm from './components/VacancyForm';

// context
import { ProjectContext } from '../../context/ProjectContext';

// utils
import toggleAlert from '../../utils/toggleAlert';
import { setQueryStringWithoutPageReload } from '../../utils/setQueryStringWithoutPageReload';

const Project = (props) => {
  const { location } = props;
  const [isPublished, setIsPublished] = useState(false);

  // scroll to bottom when mounting vacancy-form component
  // const bottomPage = useRef(null);
  // const scrollToBottom = () => {
  //   bottomPage.current.scrollIntoView();
  // };
  // useEffect(scrollToBottom);

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
      const values = { ...project, projectId: projectId, isOpen: true };
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
      <div className="max-w-lg mx-auto px-2">
        <ProjectForm
          setProjectId={setProjectId}
          projectId={projectId}
          update={update}
          project={project}
          create={create}
        />
        {projectId && (
          <Fragment>
            <VacancyForm
              projectId={projectId}
              project={project}
              createVacancy={createVacancy}
              deleteVacancy={deleteVacancy}
            />

            <div className="flex items-center justify-end mt-4">
              <button
                className="mb-3 rounded-full items-center shadow bg-gray-500 px-4 py-2 text-white hover:bg-gray-400 m-2"
                onClick={() => toggleAlert('Project saved', 'success')}
              >
                Save
              </button>

              <button
                className="mb-3 rounded-full  items-center shadow bg-brand-blue px-4 py-2 text-white hover:bg-blue-400 m-2"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
          </Fragment>
        )}
      </div>
      {/* <div ref={bottomPage} /> */}
    </Fragment>
  );
};

export default Project;
