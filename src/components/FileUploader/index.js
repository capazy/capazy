import React, { Fragment, useState } from 'react';
import { firebaseApp } from '../../firebase';

// components
import { ProgressBar } from '../index';

const FileUploader = ({ id, projectId, action, field }) => {
  const [progress, setProgress] = useState(0);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    const uploadTask = fileRef.put(file);
    await uploadTask.on(
      'state_changed',
      function (snapshot) {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const values = {
          [field.fileName]: file.name,
          [field.fileUrl]: await uploadTask.snapshot.ref.getDownloadURL(),
        };
        if (projectId !== null) {
          action({ projectId, method: '$push', files: values });
        } else {
          action({ method: '$push', files: values });
        }
      }
    );
  };

  return (
    <Fragment>
      {progress === 0 || progress === 100 ? null : (
        <ProgressBar progress={progress} />
      )}
      <input
        type="file"
        id={id}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </Fragment>
  );
};

export default FileUploader;
