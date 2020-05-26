import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

// apollo
import { useMutation } from '@apollo/react-hooks';
import { CREATE_VACANCY } from '../../../graphql/vacancy';

// context
import { ProjectContext } from '../../../context/ProjectContext';

// components
import { SelectMulti, TeamTable, Modal } from '../../../components';

// utils
import { transformArray } from '../../../utils/transformArray';
import { vacancyFormSchema } from '../../../utils/formikSchemas';
import allSkillsData from '../../../data/allSkillsData.json';
import { useEffect } from 'react';
const experienceOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const VacancyForm = (props) => {
  const { projectId, project } = props;
  const [state, setState] = useState(null);

  const [vacancyInput] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      setState(data);
      console.log('STATE', state);
    },
  });

  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      projectId: projectId,
      title: '',
      experience: '',
      skills: '',
      timeCommitment: '',
      timeCommitmentUnits: '',
    },
    validationSchema: vacancyFormSchema,
    onSubmit: async (values, { resetForm }) => {
      values.skills = await transformArray(values, 'skills');
      await vacancyInput({ variables: values });
      resetForm();
    },
  });

  const { title, skills, timeCommitment } = values;

  return (
    <div className="pt-5 w-full max-w-xl mx-auto my-auto">
      <h1>Paso 2 de 2</h1>

      {project && project.vacancies && (
        <TeamTable vacancies={project.vacancies} />
      )}
      {/* <Modal /> */}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* {project ? (
          <Fragment>
            <h2>Vacancies</h2>
            {project.vacancies.map((vacancy) => (
              <TeamTable vacancy={vacancy} />
            ))}
          </Fragment>
        ) : null} */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
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
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Experience
          </label>
          <div className="mb-4 inline-block relative w-full">
            <select
              id="experience"
              name="experience"
              onChange={handleChange}
              defaultValue="Experience"
              className="form-input bg-white"
            >
              <option value="Experience" disabled>
                Experience
              </option>
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
          <p className="text-red-500 text-xs italic">{errors.experience}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
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
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Time Commitment
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="timeCommitment"
            type="number"
            // placeholder="timeCommitment"
            onChange={handleChange}
            value={timeCommitment}
            invalid={
              touched.timeCommitment && errors.timeCommitment ? true : undefined
            }
          />
          <p className="text-red-500 text-xs italic">{errors.timeCommitment}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Time Commitment Units
          </label>
          <div className="mb-4 inline-block relative w-full">
            <select
              id="timeCommitmentUnits"
              name="timeCommitmentUnits"
              onChange={handleChange}
              defaultValue="test"
              className="form-input bg-white"
            >
              <option value="test" disabled>
                Test
              </option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              {/* {experienceOptions.map((item) => (
                <option key={item.label} value={item.value}>
                  {item.label}
                </option>
              ))} */}
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
            {errors.timeCommitmentUnits}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Add vacancy
          </button>
          <Link to="/search">
            <button className="btn bg-brand-blue text-white mb-0">
              Publish
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;
