import React, { Fragment } from 'react';
import { firebaseApp } from './../../firebase';
import { useFormik } from 'formik';

function FileUploader() {
  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: async ({ files }) => {
      const storageRef = firebaseApp.storage().ref();
      files.map(async (file) => {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const formData = {
          fileName: file.name,
          fileUrl: await fileRef.getDownloadURL(),
        };
        console.log(formData);
      });
    },
  });

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={(e) => setFieldValue('files', Array.from(e.target.files))}
        />
        <button type="submit">Upload</button>
      </form>
    </Fragment>
  );
}

export default FileUploader;
