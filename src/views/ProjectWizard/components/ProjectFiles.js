import React, { useContext } from 'react';

// components
import { FileUploader } from '../../../components';

// context
import { ProjectContext } from '../../../context/ProjectContext';

const ProjectFiles = ({ projectId, update, nextStep, previousStep }) => {
  const { project, deleteFile } = useContext(ProjectContext);

  const handleDelete = (fileId) => {
    const values = { projectId, fileId };
    deleteFile(values);
  };

  return (
    <div className="pt-5 w-full max-w-xl mx-auto my-auto shadow-md rounded">
      <div className="text-center mx-auto mb-4">
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
      <div>
        {project && project.files ? (
          <table>
            <tbody>
              {project.files.map((file) => (
                <tr key={file._id}>
                  <th>
                    <button
                      className="btn-small"
                      onClick={() => handleDelete(file._id)}
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
          <p>No files</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="btn bg-brand-blue text-white mb-0"
          onClick={previousStep}
        >
          Back
        </button>
        <button
          className="btn bg-brand-blue text-white mb-0"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectFiles;
