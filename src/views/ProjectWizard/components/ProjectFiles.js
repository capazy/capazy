import React, { useContext, Fragment } from 'react';
import { firebaseApp } from '../../../firebase';

// components
import { FileUploader, NoData } from '../../../components';

// context
import { ProjectContext } from '../../../context/ProjectContext';

const ProjectFiles = ({
  projectId,
  update,
  nextStep,
  previousStep,
  handlePublish,
}) => {
  const { project, deleteFile } = useContext(ProjectContext);

  const handleDelete = (fileId, fileName) => {
    const values = { projectId, fileId };
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(fileName);
    fileRef.delete();
    deleteFile(values);
  };
  console.log(project);
  return (
    <Fragment>
      <h1 className="text-lg font-semibold pt-2 mb-4">
        Step 3 of 3: Project info
      </h1>
      <div className="pt-2 w-full max-w-xl mx-auto my-auto shadow-md rounded  h-auto pb-2 px-2">
        <div className="text-center mx-auto mb-4">
          <Fragment>
            <div className="md:flex-shrink pr-4  border-b-2 pb-2">
              <div className="mb-4">
                <button className="btn-small mt-3" type="button">
                  <label htmlFor="upload">Choose project picture</label>
                </button>
                <FileUploader
                  id={'upload'}
                  projectId={projectId}
                  action={update}
                  field={{
                    fileName: 'projectPictureName',
                    fileUrl: 'projectPictureUrl',
                  }}
                  accept={'image/*'}
                  multiple={false}
                />
              </div>
              {project && project.projectPictureUrl ? (
                <img
                  className="rounded-lg w-full h-64 object-cover object-center"
                  src={project.projectPictureUrl}
                  alt={project.title}
                />
              ) : (
                <NoData text={"You don't have a picture yet"} />
              )}
            </div>
          </Fragment>

          <button className="btn-small mt-3" type="button">
            <label htmlFor="upload">Select files</label>
          </button>
          <FileUploader
            id={'upload'}
            projectId={projectId}
            action={update}
            field={{
              fileName: 'name',
              fileUrl: 'url',
            }}
            accept={''}
            multiple={true}
          />
        </div>

        <div className="border-b-2">
          {project && project.files && !project.files.length === 0 ? (
            <table>
              <tbody>
                {project.files.map((file) => (
                  <tr key={file._id}>
                    <th>
                      <button
                        className="btn-small"
                        onClick={() => handleDelete(file._id, file.name)}
                      >
                        X
                      </button>
                    </th>
                    <th className="text-left">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file.name}
                      </a>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoData text={"You don't have files yet"} />
          )}
        </div>

        <div className="flex justify-between my-5">
          <button
            className="btn bg-brand-blue text-white mb-0"
            onClick={previousStep}
          >
            Back
          </button>
          <button
            className="btn bg-brand-blue text-white mb-0"
            onClick={handlePublish}
          >
            Post
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectFiles;
