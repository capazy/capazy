import React, { Fragment } from 'react';
import { firebaseApp } from '../../firebase';
// import { useFormik } from 'formik';

const FileUploader2 = ({ id, action, field, accept, multiple }) => {
  const handleChange = async (e) => {
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

  return (
    <Fragment>
      <input
        type="file"
        id={id}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </Fragment>
  );
};

export default FileUploader2;
