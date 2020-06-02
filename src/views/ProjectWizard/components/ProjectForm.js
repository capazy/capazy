import React, { useEffect } from 'react';
import { useFormik } from 'formik';

// components
import { FileUploader } from '../../../components';

// utils
import { projectFormSchema } from '../../../utils/formikSchemas';

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
      type: 'One-Time',
      startDate: '',
      endDate: '',
    },
    validationSchema: projectFormSchema,
    onSubmit: async (values) => {
      if (!projectId) {
        await create(values);
      } else {
        values.projectId = projectId;
        values.method = '$set';
        await update(values);
      }
      nextStep();
    },
  });

  useEffect(() => {
    if (projectId && project !== null) {
      const fields = ['title', 'description', 'startDate', 'endDate', 'type'];
      fields.forEach((field) => {
        setFieldValue(field, project[field], false);
      });
    }
  }, [project, projectId, setFieldValue]);

  const { title, description, startDate, endDate } = values;

  return (
    <div className="pt-5 w-full">
      <h1 className="text-lg font-semibold pt-2 mb-4">
        Step 1 of 2: Project info
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <div>
          <img src={project && project.projectPictureUrl} alt="" />
        </div>
        <div>
          <button className="btn-small mt-3" type="button">
            <label htmlFor="upload">Choose project picture</label>
          </button>
          <FileUploader
            id={'upload'}
            projectId={projectId}
            action={update}
            field={{
              fileName: 'projectPictureName',
              fileUrl: 'projectPictureUrl',
            }}
            accept={'image/*'}
            multiple={false}
          />
        </div>
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
            rows="4"
            cols="10"
            placeholder="Project description..."
            onChange={handleChange}
            value={description}
            className="form-input"
            invalid={
              touched.description && errors.description ? 'true' : 'false'
            }
          ></textarea>
          <p className="form-error">{errors.description}</p>
        </div>
        <div className="mb-4 inline-block relative w-full">
          <select
            id="type"
            name="type"
            onChange={handleChange}
            defaultValue="One-Time"
            className="form-input bg-white"
          >
            {projectTypes.map((item) => (
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
        <p className="form-error">{errors.type}</p>
        <div className="mb-4">
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleChange}
            value={startDate}
            className="form-input"
          />
        </div>
        <p className="form-error">{errors.startDate}</p>
        <div className="mb-4">
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            value={endDate}
            className="form-input"
          />
        </div>
        <p className="form-error">{errors.endDate}</p>
        <div className="text-right">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
