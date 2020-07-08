import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

// context
import { UserContext } from '../../context/UserContext';

// utils
import { signupFormSchema } from '../../utils/formikSchemas';

const SignUp = () => {
  const { signup, user } = useContext(UserContext);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signupFormSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  if (user) {
    return <Redirect push to={`/user/edit/${user._id}`} />;
  }

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstName}
              invalid={touched.firstName && errors.firstName ? true : undefined}
            />
            <p className="form-error">{errors.firstName}</p>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
              invalid={touched.lastName && errors.lastName ? true : undefined}
            />
            <p className="form-error">{errors.lastName}</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            invalid={touched.email && errors.email ? true : undefined}
          />
          <p className="form-error">{errors.email}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            invalid={touched.password && errors.password ? true : undefined}
          />
          <p className="form-error">{errors.password}</p>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Sign up
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
