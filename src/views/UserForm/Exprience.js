import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';

// utils
// import { transformArray } from '../../utils/transformArray';
import toggleAlert from '../../utils/toggleAlert';
// import allSkillsData from '../../data/allSkillsData.json';
// import { experienceFormSchema } from '../../utils/formikSchemas';

// components
import { ExperienceTable, Modal } from '../../components';
import { UserContext } from '../../context/UserContext';
import { experienceFormSchema } from '../../utils/formikSchemas';

// context
// import { UserContext } from '../../context/UserContext';

const experienceOptions = [
  { value: '1-3', label: '1-3' },
  { value: '3-5', label: '3-5' },
  { value: '+5', label: '+5' },
];

const Exprience = ({ deleteExperience }) => {
  const { createExp, user } = useContext(UserContext);
  const [action, setAction] = useState(false);
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    // setFieldValue,
    // setFieldTouched,
  } = useFormik({
    initialValues: {
      title: '',
      companyName: '',
      yearsOfExperience: '1-3 years',
      description: '',
      // skills: '',
    },
    validationSchema: experienceFormSchema,
    onSubmit: async (values, { resetForm }) => {
      // values.skills = await transformArray(values, 'skills');

      await createExp(values);
      setAction(false);
      toggleAlert('Vacancy created', 'success');
      resetForm();
    },
  });
  const { title, description, companyName } = values;
  return (
    <div>
      <ExperienceTable
        action={action}
        setAction={setAction}
        user={user}
        deleteExperience={deleteExperience}
      />
      <Modal action={action}>
        <form className="w-full pt-2  mb-4 m-12" onSubmit={handleSubmit}>
          <label className="block text-gray-900 text-xl font-bold mb-2 mx-auto text-center">
            Experience
          </label>
          <div className="mb-4">
            <label className="form-label">Role</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              value={title}
              invalid={touched.title && errors.title ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          </div>

          <div className="mb-4">
            <label className="form-label">Company Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="companyName"
              onChange={handleChange}
              value={companyName}
              invalid={
                touched.companyName && errors.companyName ? true : undefined
              }
            />
            <p className="text-red-500 text-xs italic">{errors.companyName}</p>
          </div>

          <div className="mb-4 ">
            <label className="form-label">Description</label>
            <textarea
              id="description"
              rows="3"
              cols="2"
              placeholder="Description..."
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
            <label className="form-label mt-0">Experience</label>
            <div className="inline-block relative w-full">
              <select
                id="yearsOfExperience"
                name="yearsOfExperience"
                onChange={handleChange}
                defaultValue="1-3"
                className="form-input bg-white"
              >
                {experienceOptions.map((item) => (
                  <option key={item.label} value={item.value}>
                    {item.label}
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
            <p className="text-red-500 text-xs italic">
              {errors.yearsOfExperience}
            </p>
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Skills
            </label>
            <SelectMulti
              options={allSkillsData}
              value={skills}
              field={'skills'}
              isMulti={true}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.skills}
              touched={touched.skills}
            />
            <p className="text-red-500 text-xs italic">{errors.skills}</p>
          </div> */}

          <div className="flex items-center justify-end">
            <button
              className="mb-3 rounded-full  items-center shadow bg-gray-500 px-4 py-2 text-white hover:bg-gray-400 m-2"
              onClick={() => setAction(false)}
            >
              close
            </button>
            <button
              className="mb-3 rounded-full items-center shadow bg-brand-blue px-4 py-2 text-white hover:bg-blue-400 m-2"
              type="submit"
            >
              Add Experience
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Exprience;
