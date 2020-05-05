import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../graphql/mutation/user';
import { Select } from '../../components';

// const options = [
//   {category: { value: "Websites, IT & Software", label: "Websites, IT & Software"},
//     skills: {}}

const options = [
  {
    id: 0,
    category: { value: 'Web Ti', label: 'Web TI' },
    skills: [
      { value: 'react1', label: 'react1' },
      { value: 'react2', label: 'react2' },
      { value: 'react3', label: 'react3' },
      { value: 'react', label: 'react' },
    ],
  },
  {
    id: 1,
    category: { value: 'Financial', label: 'Financial' },
    skills: [
      { value: 'angular1', label: 'angular1' },
      { value: 'angular2', label: 'angular2' },
      { value: 'angular3', label: 'angular3' },
      { value: 'angular', label: 'angular' },
    ],
  },
];

const SignUp = () => {
  const [userInput, { data }] = useMutation(CREATE_USER);
  const [skill, setSkill] = useState();

  const handleSkills = (category) => {
    const { skills } = options.find((item) => item.category.value === category);

    setSkill(skills);
  };

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
      skills: [],
      description: '',
    },
    validationSchema: Yup.object({
      skills: Yup.array()
        .min(3, 'Pick at least 3 tags')
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          })
        ),
      category: Yup.string().required(),
    }),
    onSubmit: ({ values }) => {
      console.log(values);
    },
  });

  const { category } = values;

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            value={values.description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            invalid={
              touched.description && errors.description ? true : undefined
            }
          ></textarea>

          <p className="text-red-500 text-xs italic">{errors.description}</p>
        </div>
        <div className="w-full ">
          <select
            id="category"
            onChange={(e) => {
              handleSkills(e.target.value);
              handleChange(e);
            }}
            defaultValue="Category"
          >
            <option disable>Category</option>
            {options.map((item) => (
              <option key={item.category.label} value={item.category.value}>
                {item.category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full ">
          <Select
            options={skill}
            value={category}
            isMulti={true}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.category}
            touched={touched.category}
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
