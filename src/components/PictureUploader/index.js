import React from 'react';
import { firebaseApp } from '../../firebase';

const PictureUploader = ({ id, projectId, action, field }) => {
  // const fileExists = async (fileName) => {
  //   const storageRef = firebaseApp.storage().ref();
  //   const files = await (await storageRef.listAll()).items;
  //   console.log(files);
  // };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    let uploadTask = storageRef.child(file.name).put(file);

    uploadTask.on(
      'state_changed',
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      function (error) {
        // Handle unsuccessful uploads
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      }
    );
    // uploadTask.on('state_changed', (snapshot) => {
    //   let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');
    // });
    // const values = {
    //   [field.fileName]: file.name,
    //   [field.fileUrl]: await fileRef.getDownloadURL(),
    // };
    // if (projectId) {
    //   values.projectId = projectId;
    //   values.method = '$set';
    //   await action(values);
    // }
    // await action(values);
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
