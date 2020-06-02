import React from 'react';
import { firebaseApp } from '../../firebase';

const FileUploader = ({ id, projectId, action, field }) => {
  const handleChange = async (e) => {
    const files = Array.from(e.target.files);
    const storageRef = firebaseApp.storage().ref();
    const result = files.map(async (file) => {
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      return {
        [field.fileName]: file.name,
        [field.fileUrl]: await fileRef.getDownloadURL(),
      };
    });
    Promise.all(result).then((values) => {
      action({ projectId, method: '$push', files: values });
    });
  };

  return (
    <input
      type="file"
      id={id}
      multiple
      onChange={handleChange}
      style={{ display: 'none' }}
    />
  );
};

export default FileUploader;
