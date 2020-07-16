import React, { Fragment, useState, useContext } from 'react';
import { firebaseApp } from '../../firebase';

// components
import { ProgressBar } from '../index';
import { ChatContext } from '../../context/ChatContext';

const PictureUploader = ({ id, projectId, action, field }) => {
  const { sb, updateSbProfile } = useContext(ChatContext);

  // const fileExists = async (fileName) => {
  //   const storageRef = firebaseApp.storage().ref();
  //   const files = await (await storageRef.listAll()).items;
  //   console.log(files);
  // };
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
          method: '$set',
        };
        if (projectId) {
          values.projectId = projectId;
          action(values);
        } else {
          updateSbProfile(sb, null, values[field.fileUrl]);
          action(values);
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
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </Fragment>
  );
};

export default PictureUploader;
