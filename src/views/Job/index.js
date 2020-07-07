import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

// components
import { SelectMulti } from '../../components';

// utils
import skillsData from '../../data/skillsData.json';
// import { projectFormSchema } from '../../../utils/formikSchemas';

const ProjectForm = (props) => {
  // const { projectId, update, project, create, nextStep } = props;
  const [skillData, setSkillData] = useState();
  // const [location, setLocation] = useState({ country: '', region: '' });
  // const { country, region } = location;
  // console.log(country, region);
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
      title: '',
      description: '',
      type: 'full-time',
      expertise: 'Software, Programming and IT',
      skills: '',
      salaryType: 'perHour',
      salary: '',
      companyName: '',
      companyDescription: '',
      country: '',
      region: '',
    },
    // validationSchema: projectFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    title,
    description,
    skills,
    salaryType,
    salary,
    companyName,
    companyDescription,
    country,
    region,
  } = values;

  const handleSkills = (e) => {
    const { skills } = skillsData.find(
      (item) => item.expertise.value === e.target.value
    );
    setSkillData(skills);
  };

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

          <div className="mb-4">
            <label className="form-label">Expertise</label>
            <div className="inline-block relative w-full">
              <select
                id="expertise"
                className="form-input bg-white"
                name="expertise"
                onChange={(e) => {
                  handleChange(e);
                  handleSkills(e);
                }}
                defaultValue="Software, Programming and IT"
              >
                {skillsData.map((item) => (
                  <option
                    key={item.expertise.label}
                    value={item.expertise.value}
                  >
                    {item.expertise.label}
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
            <p className="form-error">{errors.expertise}</p>
          </div>

          <div className="mb-4">
            <label className="form-label">Skills</label>
            <div className="inline-block relative w-full">
              <SelectMulti
                options={skillData}
                value={skills}
                field={'skills'}
                isMulti={true}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.skills}
                touched={touched.skills}
              />
              <p className="form-error">{errors.skills}</p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Salary
            </label>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 pr-2">
                <div className="inline-block relative w-full">
                  <select
                    id="salaryType"
                    name="salaryType"
                    onChange={handleChange}
                    defaultValue="perHour"
                    className="form-input bg-white"
                  >
                    <option value="perHour">$ / hr</option>
                    <option value="perYear">$ / yr</option>
                    <option value="notSay">prefer not to say</option>
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
                  {errors.salaryType}
                </p>
              </div>

              <div className="w-full sm:w-1/2 pl-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="salary"
                  type="number"
                  min="1"
                  onChange={handleChange}
                  value={salary}
                  disabled={salaryType === 'notSay' ? true : false}
                  invalid={touched.salary && errors.salary ? 'true' : 'false'}
                />
                <p className="text-red-500 text-xs italic">{errors.salary}</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Company Name</label>
            <input
              className="form-input"
              id="companyName"
              type="text"
              placeholder="Company name"
              onChange={handleChange}
              value={companyName}
              invalid={
                touched.companyName && errors.companyName ? 'true' : 'false'
              }
            />
            <p className="form-error">{errors.companyName}</p>
          </div>

          <div className="mb-4 ">
            <label className="form-label">Company Description</label>
            <textarea
              id="companyDescription"
              rows="10"
              cols="10"
              placeholder="Company description..."
              onChange={handleChange}
              value={companyDescription}
              className="form-input"
              invalid={
                touched.companyDescription && errors.companyDescription
                  ? 'true'
                  : 'false'
              }
            ></textarea>
            <p className="form-error">{errors.companyDescription}</p>
          </div>

          <div className="mb-4">
            <label className="form-label">Company HQ</label>
            <div className="inline-block relative w-full mb-2">
              <CountryDropdown
                value={country}
                whitelist={['US', 'CA']}
                onChange={(val) => setFieldValue('country', val)}
                className="form-input bg-white"
              />
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
            <div className="inline-block relative w-full">
              <RegionDropdown
                country={country}
                value={region}
                blankOptionLabel="Select Region"
                onChange={(val) => setFieldValue('region', val)}
                className="form-input bg-white"
              />
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
          </div>

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
