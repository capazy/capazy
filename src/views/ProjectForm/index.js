import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PROJECT } from '../../graphql/mutation/project';
import { ProjectContext } from '../../context/ProjectContext';

const projectTypes = ['One-Time', 'Ongoing', 'Complex'];
const projectPublished = ['Department', 'Company', 'Globally'];

const ProjectForm = () => {
  const { setProjectId } = useContext(ProjectContext);

  const [createProject] = useMutation(CREATE_PROJECT, {
    update(
      _,
      {
        data: {
          createProject: { _id: projectId },
        },
      }
    ) {
      setProjectId(projectId);
    },
  });

  const [state, setState] = useState(false);

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues: {
      title: '',
      description: '',
      type: '',
      published: '',
      deadline: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await createProject({ variables: values });
      await setState(true);
    },
  });

  if (state) {
    return <Redirect push to="/vacancy-form" />;
  }

  const { title, description, deadline } = values;

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <h1>Paso 1 de 2</h1>
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            cols="10"
            placeholder="Project description..."
            onChange={handleChange}
            value={description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            invalid={
              touched.description && errors.description ? true : undefined
            }
          ></textarea>
          <p className="text-red-500 text-xs italic">{errors.description}</p>
        </div>

        <div className="mb-4">
          <select
            id="type"
            name="type"
            onChange={handleChange}
            defaultValue="Type"
          >
            <option value="Type" disabled>
              Type
            </option>
            {projectTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="text-red-500 text-xs italic">{errors.type}</p>

        <div className="mb-4">
          <select
            id="published"
            name="published"
            onChange={handleChange}
            defaultValue="Published"
          >
            <option value="Published" disabled>
              Published
            </option>
            {projectPublished.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="text-red-500 text-xs italic">{errors.published}</p>

        <div className="mb-4">
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <p className="text-red-500 text-xs italic">{errors.deadline}</p>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
