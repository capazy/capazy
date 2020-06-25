import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

// components

// utils
// import { projectFormSchema } from '../../../utils/formikSchemas';

const projectTypes = ['One-Time', 'Ongoing', 'Complex'];

const ProjectForm = (props) => {
  const { projectId, update, project, create, nextStep } = props;

  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      type: 'full-time',
    },
    // validationSchema: projectFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { title, description, type } = values;

  return (
    <div className="max-w-lg mx-auto px-2 mt-6">
      <div className="w-full">
        <h1 className="text-lg font-semibold pt-2 mb-4">Job info</h1>
        <form
          className="bg-white shadow-md rounded px-8 py-6 mb-4"
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
              invalid={touched.title && errors.title ? 'true' : 'false'}
            />
            <p className="form-error">{errors.title}</p>
          </div>

          <div className="mb-4 ">
            <label className="form-label">Description</label>
            <textarea
              id="description"
              rows="10"
              cols="10"
              placeholder="Job description..."
              onChange={handleChange}
              value={description}
              className="form-input"
              invalid={
                touched.description && errors.description ? 'true' : 'false'
              }
            ></textarea>
            <p className="form-error">{errors.description}</p>
          </div>

          <div className="mb-4">
            <label className="form-label">Type</label>
            <div className="inline-block relative w-full">
              <select
                id="type"
                name="type"
                onChange={handleChange}
                defaultValue="full-time"
                className="form-input bg-white"
              >
                <option value="full-time">Full-Time</option>
                <option value="contract">Contract</option>
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
            <p className="form-error">{errors.type}</p>
          </div>

          {/* <div className="border-b-2 my-4" /> */}

          <div className="flex justify-between mt-5">
            <Link to="/feed">
              <button
                type="button"
                className="btn bg-brand-blue text-white mb-0"
              >
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn bg-brand-blue text-white mb-0">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
