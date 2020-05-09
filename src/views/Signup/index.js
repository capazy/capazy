import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthContext';

const SignUp = () => {
  const { signup, user } = useContext(AuthContext);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      signup(values);
    },
  });

  if (user) {
    return <Redirect push to="/user-form" />;
  }

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstName}
              invalid={touched.firstName && errors.firstName ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
              invalid={touched.lastName && errors.lastName ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            invalid={touched.email && errors.email ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
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
