import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

// apollo
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PROJECT } from '../../graphql/project';
import { ProjectContext } from '../../context/ProjectContext';

// utils
import { projectFormSchema } from '../../utils/formikSchemas';
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
    validationSchema: projectFormSchema,
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
          <label className="form-label">Title</label>
          <input
            className="form-input"
            id="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={title}
            invalid={touched.title && errors.title ? true : undefined}
          />
          <p className="form-error">{errors.title}</p>
        </div>

        <div className="mb-4 ">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            rows="4"
            cols="10"
            placeholder="Project description..."
            onChange={handleChange}
            value={description}
            className="form-input"
            invalid={
              touched.description && errors.description ? true : undefined
            }
          ></textarea>
          <p className="form-error">{errors.description}</p>
        </div>

        <div className="mb-4 inline-block relative w-full">
          <select
            id="type"
            name="type"
            onChange={handleChange}
            defaultValue="Type"
            className="form-input bg-white"
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
        <p className="form-error">{errors.type}</p>

        <div className="mb-4 inline-block relative w-full">
          <select
            id="published"
            name="published"
            onChange={handleChange}
            defaultValue="Published"
            className="form-input bg-white"
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
        <p className="form-error">{errors.published}</p>

        <div className="mb-4">
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={handleChange}
            value={deadline}
            className="form-input"
          />
        </div>
        <p className="form-error">{errors.deadline}</p>

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
