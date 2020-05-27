import React, { Fragment } from 'react';
import { firebaseApp } from '../../firebase';
import { useFormik } from 'formik';

const FileUploader = ({ action, field, accept, multiple }) => {
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
          [field.fileName]: file.name,
          [field.fileUrl]: await fileRef.getDownloadURL(),
        };
        await action(formData);
      });
    },
  });

  return (
    <Fragment>
      <div className="bg-red-600">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => setFieldValue('files', Array.from(e.target.files))}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </Fragment>
  );
};

export default FileUploader;
