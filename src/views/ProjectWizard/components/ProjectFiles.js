import React, { useContext, Fragment } from 'react';
import { firebaseApp } from '../../../firebase';

// components
import { FileUploader, PictureUploader, NoData } from '../../../components';

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

  return (
    <Fragment>
      <div className="w-full">
        <h1 className="text-lg font-semibold pt-2 mb-4">
          Step 3 of 3: Support files
        </h1>
        <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
          <div className="text-center mx-auto mb-4">
            <div className="md:flex-shrink">
              <div className="mb-4 ">
                <label htmlFor="upload" className="btn-small my-3">
                  Choose project picture
                </label>
                <PictureUploader
                  id={'upload'}
                  projectId={projectId}
                  action={update}
                  field={{
                    fileName: 'projectPictureName',
                    fileUrl: 'projectPictureUrl',
                  }}
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

            <div className="border-b-2 my-4" />

            <div className="md:flex-shrink">
              <div className="mb-4">
                <label htmlFor="uploadFiles" className="btn-small my-3">
                  Select files
                </label>
              </div>
              <FileUploader
                id={'uploadFiles'}
                projectId={projectId}
                action={update}
                field={{
                  fileName: 'name',
                  fileUrl: 'url',
                }}
              />

              <div className="mb-4">
                {project && project.files && project.files.length >= 1 ? (
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
            </div>
          </div>

          <div className="border-b-2 my-4" />

          <div className="flex justify-between mt-5">
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
      </div>
    </Fragment>
  );
};

export default ProjectFiles;
