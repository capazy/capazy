import React from 'react';
import { firebaseApp } from '../../firebase';

const PictureUploader = ({ id, projectId, action, field }) => {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const values = {
      [field.fileName]: file.name,
      [field.fileUrl]: await fileRef.getDownloadURL(),
    };
    if (projectId) {
      values.projectId = projectId;
      values.method = '$set';
      await action(values);
    }
    await action(values);
  };

  return (
    <input
      type="file"
      id={id}
      accept="image/*"
      onChange={handleChange}
      style={{ display: 'none' }}
    />
  );
};

export default PictureUploader;
