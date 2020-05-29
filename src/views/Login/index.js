import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

// context
import { UserContext } from '../../context/UserContext';

// utils
import { loginFormSchema } from '../../utils/formikSchemas';

const Login = () => {
  const { login, user } = useContext(UserContext);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });

  if (user) {
    return <Redirect push to="/search" />;
  }

  return (
    <div className="pt-5 w-full max-w-xs mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="form-label" htmlFor="Email">
            Email
          </label>
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
        <div className="mb-6">
          <label className="form-label" htmlFor="password">
            Password
          </label>
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
            Login
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

export default Login;
