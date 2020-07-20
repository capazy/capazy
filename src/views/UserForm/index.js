import React, { useState, useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

// components
import { SelectMulti, PictureUploader, FileUploader } from '../../components';

// context
import { UserContext } from '../../context/UserContext';
import { ChatContext } from '../../context/ChatContext';

// utils
// import skillsData from '../../data/skillsData.json';
import allSkillsData from '../../data/allSkillsData.json';
import countriesData from '../../data/countriesData.json';
import languagesData from '../../data/languagesData.json';
import { transformArray } from '../../utils/transformArray';
import { originalArray } from '../../utils/originalArray';
import { userFormSchema } from '../../utils/formikSchemas';

// components
import Exprience from './Exprience';
import Education from './Education';

const UserForm = ({ match }) => {
  const { update, user: userData, userLoading, deleteFile } = useContext(
    UserContext
  );
  const { sb, updateSbProfile, sbUser } = useContext(ChatContext);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // const [skillData, setSkillData] = useState();
  const { id } = match.params;
  const isCreateMode = !id;

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    handleChange,
  } = useFormik({
    initialValues: {
      description: '',
      languages: [],
      country: '',
      additionalSkills: [],
    },
    validationSchema: userFormSchema,
    onSubmit: async (values, { resetForm }) => {
      values.languages = await transformArray(values, 'languages');
      values.additionalSkills = await transformArray(
        values,
        'additionalSkills'
      );
      values.method = '$set';
      await update(values);
      setUpdateSuccess(true);
      resetForm();
    },
  });
  const { description, languages, additionalSkills, country } = values;

  if (sbUser && !sbUser.nickname) {
    updateSbProfile(
      sb,
      `${userData.firstName} ${userData.lastName}`,
      userData.profilePictureUrl
    );
  }

  useEffect(() => {
    if (!isCreateMode && userData !== null) {
      const fields = [
        'expertise',
        'companyName',
        'companyDepartment',
        'description',
      ];
      fields.forEach((field) => {
        setFieldValue(field, userData[field], false);
        setFieldValue('country', userData['country'], false);
        setFieldValue('languages', originalArray(userData['languages']), false);
        setFieldValue(
          'additionalSkills',
          originalArray(userData['additionalSkills']),
          false
        );
      });
    }
  }, [userData, isCreateMode, setFieldValue]);

  const image =
    (userData && userData.profilePictureUrl) ||
    'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png';

  if (userLoading) return <p>Loading....</p>;
  if (!userData) return <p>Loading....</p>;

  // if (updateSuccess) {
  //   return <Redirect push to={`/profile/${userData._id}`} />;
  // }

  const handleDelete = (fileId, fileName) => {
    // const values = { projectId, fileId };
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(fileName);
    fileRef.delete();
    deleteFile({ fileId });
  };

  if (updateSuccess) {
    return <Redirect push to={`/profile/${id}`} />;
  }

  return (
    <div className="pt-5 w-full max-w-lg mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* PICTURE */}
        <div className="mb-4 border-b">
          <div className="text-center p-6">
            <img
              className="h-24 w-24 rounded-full mx-auto object-cover object-center"
              src={image}
              alt=""
            />
            <div>
              <button className="btn-small mt-3" type="button">
                <label htmlFor="upload">Change profile picture</label>
              </button>
              <PictureUploader
                id={'upload'}
                action={update}
                field={{
                  fileName: 'profilePictureName',
                  fileUrl: 'profilePictureUrl',
                }}
              />
            </div>
            <p className="pt-2 text-lg font-semibold">
              {userData && `${userData.firstName} ${userData.lastName}`}
            </p>
          </div>
        </div>

        {/* FILES */}
        <div className="text-center mb-4 border-b">
          <div className="mb-5">
            <label
              htmlFor="uploadFiles"
              className="btn bg-blue-500 text-white my-3"
            >
              Upload your CV
            </label>
          </div>
          <FileUploader
            id={'uploadFiles'}
            projectId={null}
            action={update}
            field={{
              fileName: 'name',
              fileUrl: 'url',
            }}
          />

          <div className="mb-4">
            {userData && userData.files && userData.files.length >= 1 ? (
              <table>
                <tbody>
                  {userData.files.map((file) => (
                    <tr key={file._id}>
                      <th>
                        <button
                          className="btn-small bg-blue-500"
                          type="button"
                          onClick={() => handleDelete(file._id, file.name)}
                        >
                          X
                        </button>
                      </th>
                      <th className="text-left">
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {file.name}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : // <NoData text={"You don't have files yet"} />
            null}
          </div>
        </div>

        {/* PERSONAL */}
        <div className="border-b-2 mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Personal</h1>
          <div className="mb-4">
            <label className="form-label" htmlFor="Email">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              cols="10"
              placeholder="Lorem ipsum dolor sit "
              onChange={handleChange}
              value={description}
              className="form-input"
              invalid={
                touched.description && errors.description ? true : undefined
              }
            ></textarea>

            <p className="form-error">{errors.description}</p>
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="Email">
              Languages
            </label>
            <div className="w-full ">
              <SelectMulti
                options={languagesData}
                value={languages}
                field={'languages'}
                isMulti={true}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.languages}
                touched={touched.languages}
              />
            </div>
            <p className="form-error">{errors.languages}</p>
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="Email">
              Country
            </label>

            <div className="inline-block relative w-full">
              <select
                id="country"
                name="country"
                onChange={handleChange}
                defaultValue="country"
                className="form-input bg-white"
              >
                <option
                  value="country"
                  disabled
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  {country}
                </option>
                {countriesData.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <p className="form-error">{errors.country}</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Skills</h1>
          <div className="mb-4 ">
            <div className="w-full">
              {/* <label className="form-label" htmlFor="Email">
                Additional Expertise
              </label> */}
              <div className="w-full ">
                <SelectMulti
                  options={allSkillsData}
                  value={additionalSkills}
                  field={'additionalSkills'}
                  isMulti={true}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.additionalSkills}
                  touched={touched.additionalSkills}
                />
              </div>
              <p className="form-error">{errors.additionalSkills}</p>
            </div>
          </div>
        </div>
        <Exprience />
        <Education />
        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
