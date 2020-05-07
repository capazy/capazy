import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_VACANCY } from '../../graphql/mutation/user';

const ProjectForm = () => {
  const [vacancyInput] = useMutation(CREATE_VACANCY, {
    update(_, { data }) {
      console.log('vacancy', data);
    },
  });

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues: {
      projectId: '',
      title: '',
      experience: '',
      skills: ['test', 'test2'],
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await vacancyInput({ variables: values });
      resetForm();
    },
  });

  const { projectId, title, experience } = values;

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectId"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={projectId}
            invalid={touched.projectId && errors.projectId ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.projectId}</p>
        </div>

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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experience"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={experience}
            invalid={touched.experience && errors.experience ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.experience}</p>
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
