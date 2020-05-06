import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Select } from '../../components';

const options = [
  {
    id: 0,
    category: { value: 'Web Ti', label: 'Web TI' },
    skills: [
      { value: 'react1', label: 'react1' },
      { value: 'react2', label: 'react2' },
      { value: 'react3', label: 'react3' },
      { value: 'react4', label: 'react4' },
    ],
  },
  {
    id: 1,
    category: { value: 'Financial', label: 'Financial' },
    skills: [
      { value: 'angular1', label: 'angular1' },
      { value: 'angular2', label: 'angular2' },
      { value: 'angular3', label: 'angular3' },
      { value: 'angular4', label: 'angular4' },
    ],
  },
];

const dataTest = [
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
  { value: 'test4', label: 'test4' },
];

const SignUp = () => {
  const [skillData, setSkillData] = useState();

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    handleChange,
  } = useFormik({
    initialValues: {
      category: '',
      companyName: '',
      companyDepartment: '',
      skills: [],
      description: '',
      languages: [],
      country: '',
    },
    validationSchema: Yup.object({
      skills: Yup.array()
        .min(1, 'Pick at least 1 skill')
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          })
        ),
      languages: Yup.array()
        .min(1, 'Pick at least 1 language')
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          })
        ),
      category: Yup.string(),
      description: Yup.string().required(),
      companyName: Yup.string().required(),
      companyDepartment: Yup.string().required(),
      country: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(values);
  const {
    category,
    skills,
    description,
    languages,
    companyName,
    companyDepartment,
    country,
  } = values;

  const handleCategory = ({ value }) => {
    const { skills } = options.find((item) => item.category.value === value);
    setSkillData(skills);
  };

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* COMPANY */}
        <div className="border-b-2 mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Company</h1>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Name
            </label>
            <input
              id="companyName"
              rows="4"
              cols="10"
              placeholder="Company"
              onChange={handleChange}
              value={companyName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              invalid={
                touched.companyName && errors.companyName ? true : undefined
              }
            ></input>

            <p className="text-red-500 text-xs italic">{errors.companyName}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Department
            </label>
            <input
              id="companyDepartment"
              rows="4"
              cols="10"
              placeholder="Department"
              onChange={handleChange}
              value={companyDepartment}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              invalid={
                touched.companyDepartment && errors.companyDepartment
                  ? true
                  : undefined
              }
            ></input>

            <p className="text-red-500 text-xs italic">{errors.companyName}</p>
          </div>
        </div>

        {/* PERSONAL */}
        <div className="border-b-2 mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Personal</h1>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              cols="10"
              placeholder="Lorem ipsum dolor sit "
              onChange={handleChange}
              value={description}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              invalid={
                touched.description && errors.description ? true : undefined
              }
            ></textarea>

            <p className="text-red-500 text-xs italic">{errors.description}</p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Languages
            </label>
            <div className="w-full ">
              <Select
                options={dataTest}
                value={languages}
                field={'languages'}
                isMulti={true}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.languages}
                touched={touched.languages}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.languages}</p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Country
            </label>
            <div className="w-full ">
              <Select
                options={dataTest}
                value={country}
                field={'country'}
                isMulti={false}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.country}
                touched={touched.country}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.country}</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mb-2">
          <h1 className="text-gray-900 text-xl mb-1">Skills</h1>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Category
            </label>
            <div className="w-full ">
              <Select
                options={options.map((item) => item.category)}
                value={category}
                field={'category'}
                isMulti={false}
                onChange={(e, category) => {
                  handleCategory(category);
                  setFieldValue(e);
                }}
                onBlur={setFieldTouched}
                error={errors.category}
                touched={touched.category}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.category}</p>
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Skills
            </label>
            <div className="w-full ">
              <Select
                options={skillData}
                value={skills}
                field={'skills'}
                isMulti={true}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.skills}
                touched={touched.skills}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.skills}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
