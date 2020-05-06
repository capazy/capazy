import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../graphql/mutation/user';

const SignUp = () => {
  const [userInput, { data }] = useMutation(CREATE_USER);
  console.log('CREATE_USER', data);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: ({ email, password, name, lastName }) => {
      userInput({ variables: { name, lastName, email, password } });
    },
  });

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Jane"
              onChange={handleChange}
              value={values.name}
              invalid={touched.name && errors.name ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="lastName"
              placeholder="Doe"
              onChange={handleChange}
              value={values.lastName}
              invalid={touched.lastName && errors.lastName ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="jane-doe@mycompany.com"
            onChange={handleChange}
            value={values.email}
            invalid={touched.email && errors.email ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            invalid={touched.password && errors.password ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
