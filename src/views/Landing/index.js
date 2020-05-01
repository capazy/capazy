import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const Support = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <div className='bg-gray-100 '>
      <div className='md:flex ml-auto text-center justify-center py-20 px-5'>
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>
          <h2 className='text-2xl text-gray-600 font-bold text-center mb-10'>
            Register
          </h2>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full  px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-first-email'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                type='text'
                placeholder='Jane@gmail.com'
                id='email'
                email='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                invalid={touched.email && errors.email ? true : false}
              />
              {touched.email && errors.email ? (
                <p className='text-red-500 text-xs italic'>
                  Please fill out this field.
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-password'
              >
                Password
              </label>
              <div class='flex flex-wrap -mx-3 mb-6'>
                <div class='w-full px-3'>
                  <input
                    class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-password'
                    type='password'
                    placeholder='******************'
                    id='password'
                    email='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    invalid={touched.password && errors.password ? true : false}
                  />
                  <p class='text-gray-600 text-xs italic'>Capazy team</p>
                </div>
              </div>

              {touched.password && errors.password ? (
                <p className='text-red-500 text-xs italic'>
                  Please fill out this field.
                </p>
              ) : null}
            </div>
          </div>
          <div className='text-center pt-5'>
            <button
              type='submit'
              className='btn bg-brand-blue-light hover:border-gray-500 shadow-lg hover:bg-indigo-100 '
            >
              Pend WhatsApp password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
