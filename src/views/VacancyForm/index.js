import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_VACANCY } from '../../graphql/mutation/user';
import { ProjectContext } from '../../context/ProjectContext';
import { Select } from '../../components';

const experienceOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const skillsOptions = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
  { value: 'test4', label: 'test4' },
];

const ProjectForm = () => {
  const { projectId } = useContext(ProjectContext);

  const [vacancyInput] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      console.log('vacancy', data);
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
    onSubmit: async (values, { resetForm }) => {
      let modifySkills = [];
      values.skills.map((skill) => {
        return modifySkills.push(skill.value);
      });
      values.skills = modifySkills;
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
            options={skillsOptions}
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
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
