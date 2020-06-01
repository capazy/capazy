import React from 'react';
import { firebaseApp } from '../../firebase';

const FileUploader = ({ id, projectId, action, field, accept, multiple }) => {
  const oneFile = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const formData = {
      [field.fileName]: file.name,
      [field.fileUrl]: await fileRef.getDownloadURL(),
    };
    await action(formData);
  };

  const multipleFiles = async (e) => {
    let formData = [];
    const files = Array.from(e.target.files);
    const storageRef = firebaseApp.storage().ref();
    files.map(async (file) => {
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      formData.push({
        [field.fileName]: file.name,
        [field.fileUrl]: await fileRef.getDownloadURL(),
      });
      await action({ projectId, files: formData });
    });
  };

  return (
    <input
      type="file"
      id={id}
      accept={accept}
      multiple={multiple}
      onChange={multiple ? multipleFiles : oneFile}
      style={{ display: 'none' }}
    />
  );
};

export default FileUploader;
