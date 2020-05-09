import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

// apollo
import { useMutation } from '@apollo/react-hooks';
import { CREATE_VACANCY } from '../../graphql/mutation/vacancy';

// context
import { ProjectContext } from '../../context/ProjectContext';

// components
import { Select } from '../../components';

// utils
import { transformArray } from '../../utils/transformArray';
import { vacancyFormSchema } from '../../utils/formikSchemas';
import allSkillsData from '../../data/allSkillsData.json';
const experienceOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const VacancyForm = () => {
  const { projectId } = useContext(ProjectContext);
  const [state, setState] = useState(null);

  const [vacancyInput] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      setState(data);
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
    },
    validationSchema: vacancyFormSchema,
    onSubmit: async (values, { resetForm }) => {
      values.skills = await transformArray(values, 'skills');
      await vacancyInput({ variables: values });
      resetForm();
    },
  });

  const { title, skills } = values;

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <h1>Paso 2 de 2</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {state ? (
          <Fragment>
            <h2>Vacancies</h2>
            {state.createVacancy.project.vacancies.map((datum) => (
              <p key={datum._id}>{datum._id}</p>
            ))}
          </Fragment>
        ) : null}
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
          <select
            id="experience"
            name="experience"
            onChange={handleChange}
            defaultValue="Experience"
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
        </div>
        <p className="text-red-500 text-xs italic">{errors.experience}</p>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Skills
          </label>
          <Select
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

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Add vacancy
          </button>
          <Link to="/feed">
            <button className="btn bg-brand-blue text-white mb-0">
              Finish
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;
