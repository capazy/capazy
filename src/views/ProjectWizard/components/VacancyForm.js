import React, { useState, Fragment } from 'react';
import { useFormik } from 'formik';

// components
import { SelectMulti, TeamTable, Modal } from '../../../components';

// utils
import { transformArray } from '../../../utils/transformArray';
import { vacancyFormSchema } from '../../../utils/formikSchemas';
import allSkillsData from '../../../data/allSkillsData.json';
import { useEffect } from 'react';
import toggleAlert from '../../../utils/toggleAlert';

const experienceOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const VacancyForm = (props) => {
  const {
    projectId,
    project,
    createVacancy,
    deleteVacancy,
    previousStep,
    nextStep,
  } = props;
  const [action, setAction] = useState(false);

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
      experience: 'beginner',
      description: '',
      skills: '',
      timeCommitment: '',
      timeCommitmentUnits: 'perWeek',
    },
    validationSchema: vacancyFormSchema,
    onSubmit: async (values, { resetForm }) => {
      values.projectId = projectId;
      values.skills = await transformArray(values, 'skills');
      await createVacancy({ variables: values });
      setAction(false);
      toggleAlert('Vacancy created', 'success');
      resetForm();
    },
  });

  const { title, skills, timeCommitment, description } = values;

  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (project && project.vacancies.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [project]);

  return (
    <Fragment>
      <div className="w-full">
        <h1 className="text-lg font-semibold pt-2 mb-4">
          Step 2 of 3: Vacancies info
        </h1>
        <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
          <TeamTable
            project={project}
            setAction={setAction}
            deleteVacancy={deleteVacancy}
          />

          <Modal action={action}>
            <form className="w-full pt-2  mb-4 m-12" onSubmit={handleSubmit}>
              <label className="block text-gray-900 text-xl font-bold mb-2 mx-auto text-center">
                Vacancy
              </label>
              <div className="mb-4">
                <label className="form-label">Title</label>
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

              <div className="mb-4 ">
                <label className="form-label">Description</label>
                <textarea
                  id="description"
                  rows="3"
                  cols="2"
                  placeholder="Vacancy description..."
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
                    id="experience"
                    name="experience"
                    onChange={handleChange}
                    defaultValue="beginner"
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
                  {errors.experience}
                </p>
              </div>

              <div className="mb-4">
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
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time Commitment in hours
              </label>
              <div className="flex flex-wrap">
                <div className="mb-4 w-full sm:w-1/2 pr-2">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="timeCommitment"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    value={timeCommitment}
                    invalid={
                      touched.timeCommitment && errors.timeCommitment
                        ? true
                        : undefined
                    }
                  />
                  <p className="text-red-500 text-xs italic">
                    {errors.timeCommitment}
                  </p>
                </div>

                <div className="mb-4 w-full sm:w-1/2 pl-2">
                  <div className="mb-4 inline-block relative w-full">
                    <select
                      id="timeCommitmentUnits"
                      name="timeCommitmentUnits"
                      onChange={handleChange}
                      defaultValue="perWeek"
                      className="form-input bg-white"
                    >
                      <option value="perWeek">per week</option>
                      <option value="perMonth">per month</option>
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
              </div>

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
                  Add vacancy
                </button>
              </div>
            </form>
          </Modal>
          <div className="flex justify-between mt-5">
            <button
              className="btn bg-brand-blue text-white mb-0"
              onClick={previousStep}
            >
              Back
            </button>
            <button
              disabled={disable}
              className={
                disable
                  ? 'btn bg-gray-500 text-white mb-0'
                  : `btn bg-brand-blue text-white mb-0`
              }
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VacancyForm;
