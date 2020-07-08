import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const RegisterHeader = ({ title }) => {
  return (
    <Fragment>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-xs text-gray-500">With social media</p>
      </div>
      <div className="flex items-center justify-around mb-4">
        <a href="/auth/google">
          <button type="button" className="btn bg-red-500 text-white mb-0">
            <FontAwesomeIcon icon={faGoogle} className="text-lg mr-2" />
            Google
          </button>
        </a>
        <a href="/auth/linkedin">
          <button type="button" className="btn bg-blue-500 text-white mb-0">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-lg mr-2" />
            Linkedin
          </button>
        </a>
      </div>
      <div className="border-b-2 mt-6 mb-3" />
      <div className="mb-4">
        <p className="text-xs text-gray-500">Or with your email address</p>
      </div>
    </Fragment>
  );
};

export default RegisterHeader;
