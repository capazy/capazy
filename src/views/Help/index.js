import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';

// context
import { UserContext } from '../../context/UserContext';

// utils
import { helpFormSchema } from '../../utils/formikSchemas';

const Help = () => {
  const { user, sendHelpEmail } = useContext(UserContext);
  const [msgSent, setMsgSent] = useState(false);

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: helpFormSchema,
    onSubmit: async (values) => {
      await sendHelpEmail(values);
      setMsgSent(true);
    },
  });
  const { email, message } = values;

  useEffect(() => {
    if (user) {
      setFieldValue('email', user.email, false);
    }
  }, [user, setFieldValue]);

  if (msgSent) {
    return <Redirect push to="/" />;
  }

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Need help?</h1>
          <p className="text-xs text-gray-500">We'll get back to you ASAP!</p>
        </div>
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
            value={email}
            invalid={touched.email && errors.email ? 'true' : undefined}
          />
          <p className="form-error">{errors.email}</p>
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="password">
            Message
          </label>
          <textarea
            className="form-input"
            id="message"
            rows="4"
            cols="10"
            placeholder="I need help with..."
            onChange={handleChange}
            value={message}
            invalid={touched.message && errors.message ? 'true' : undefined}
          />
          <p className="form-error">{errors.message}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Help;
