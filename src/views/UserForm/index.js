import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

// components
import { Select } from '../../components';

// utils
import skillsData from '../../data/skillsData.json';
import allSkillsData from '../../data/allSkillsData.json';
import countriesData from '../../data/countriesData.json';
import languagesData from '../../data/languagesData.json';
import { userFormSchema } from '../../utils/formikSchemas';
import { transformArray } from '../../utils/transformArray';
import { UserContext } from '../../context/UserContext';

const UserForm = () => {
  const { update } = useContext(UserContext);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [skillData, setSkillData] = useState();

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
      expertise: '',
      companyName: '',
      companyDepartment: '',
      skills: [],
      description: '',
      languages: [],
      country: '',
      additionalSkills: [],
    },
    validationSchema: userFormSchema,
    onSubmit: async (values, { resetForm }) => {
      values.skills = await transformArray(values, 'skills');
      values.languages = await transformArray(values, 'languages');
      values.additionalSkills = await transformArray(
        values,
        'additionalSkills'
      );
      await update(values);
      setUpdateSuccess(true);
      resetForm();
    },
  });
  if (updateSuccess) {
    return <Redirect push to="/feed" />;
  }
  const {
    skills,
    description,
    languages,
    companyName,
    companyDepartment,
    additionalSkills,
  } = values;

  const handleSkills = (e) => {
    const { skills } = skillsData.find(
      (item) => item.expertise.value === e.target.value
    );
    setSkillData(skills);
  };

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* COMPANY */}
        <div className="border-b-2 mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Company</h1>
          <div className="mb-4">
            <label className="form-label">Name</label>
            <input
              id="companyName"
              rows="4"
              cols="10"
              placeholder="Company"
              onChange={handleChange}
              value={companyName}
              className="form-input"
              invalid={
                touched.companyName && errors.companyName ? true : undefined
              }
            ></input>

            <p className="form-error">{errors.companyName}</p>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="Email">
              Department
            </label>
            <input
              id="companyDepartment"
              rows="4"
              cols="10"
              placeholder="Department"
              onChange={handleChange}
              value={companyDepartment}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              invalid={
                touched.companyDepartment && errors.companyDepartment
                  ? true
                  : undefined
              }
            ></input>

            <p className="form-error">{errors.companyName}</p>
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
              <Select
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
                defaultValue="Country"
                className="form-input bg-white"
              >
                <option
                  value="Country"
                  disabled
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Country
                </option>
                {countriesData.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  class="fill-current h-6 w-6"
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
            <label className="form-label" htmlFor="Email">
              Expertise
            </label>
            <div className="inline-block relative w-full">
              <select
                id="expertise"
                className="form-input bg-white"
                name="expertise"
                onChange={(e) => {
                  handleChange(e);
                  handleSkills(e);
                }}
                defaultValue="Expertise"
              >
                <option
                  value="Expertise"
                  disabled
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Expertise
                </option>
                {skillsData.map((item) => (
                  <option
                    key={item.expertise.label}
                    value={item.expertise.value}
                  >
                    {item.expertise.label}
                  </option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  class="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <p className="form-error">{errors.expertise}</p>
            <div className="w-full">
              <label className="form-label" htmlFor="Email">
                Skills
              </label>
              <div className="w-full ">
                <Select
                  options={skillData}
                  value={skills}
                  field={'skills'}
                  isMulti={true}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.skills}
                  touched={touched.skills}
                />
              </div>
              <p className="form-error">{errors.skills}</p>
            </div>
            <div className="w-full">
              <label className="form-label" htmlFor="Email">
                Additional Expertise
              </label>
              <div className="w-full ">
                <Select
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

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
