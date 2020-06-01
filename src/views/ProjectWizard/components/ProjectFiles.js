import React, { useContext } from 'react';

// components
import { FileUploader } from '../../../components';

// context
import { ProjectContext } from '../../../context/ProjectContext';

const ProjectFiles = ({ projectId, update, nextStep, previousStep }) => {
  const { project } = useContext(ProjectContext);
  console.log(project);
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
          <ul>
            {project.files.map((file) => (
              <li key={file._id}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
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
