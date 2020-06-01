import React, { Fragment } from 'react';
import { firebaseApp } from '../../firebase';
import { useFormik } from 'formik';

const FileUploader = ({
  projectId,
  action,
  field,
  accept,
  multiple,
  handleOpen,
}) => {
  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: ({ files }) => {
      let formData = [];
      const storageRef = firebaseApp.storage().ref();
      files.map(async (file) => {
        const fileRef = storageRef.child(file.name);
        fileRef.put(file);
        formData.push({
          [field.fileName]: file.name,
          [field.fileUrl]: await fileRef.getDownloadURL(),
        });
        await action({ projectId, files: formData });
      });
    },
  });

  return (
    <Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => setFieldValue('files', Array.from(e.target.files))}
          />
          <button type="submit">Upload</button>
        </form>
        <button onClick={() => handleOpen(false)}>Cancel</button>
      </div>
    </Fragment>
  );
};

export default FileUploader;
