import React, { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import GoogleAuth from 'react-google-login';
import { server } from '../../utils/axios';
import { UserContext } from '../../context/UserContext';

const RegisterHeader = ({ title }) => {
  const { passport } = useContext(UserContext);

  const responseGoogle = async (response) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const body = JSON.stringify({ access_token: response.accessToken });
      const res = await server.post('/auth/google', body, config);
      await passport(res.data.auth, res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-xs text-gray-500">With social media</p>
      </div>
      <div className="flex items-center justify-around mb-4">
        <GoogleAuth
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={(renderProps) => (
            <button
              type="button"
              className="btn bg-red-500 text-white mb-0 w-full"
              onClick={renderProps.onClick}
            >
              <FontAwesomeIcon icon={faGoogle} className="text-lg mr-2" />
              Google
            </button>
          )}
        />
        {/* <a href="/auth/google">
          <button type="button" className="btn bg-red-500 text-white mb-0">
            <FontAwesomeIcon icon={faGoogle} className="text-lg mr-2" />
            Google
          </button>
        </a> */}
        {/* <a href="/auth/linkedin">
          <button type="button" className="btn bg-blue-500 text-white mb-0">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-lg mr-2" />
            Linkedin
          </button>
        </a> */}
      </div>
      <div className="border-b-2 mt-6 mb-3" />
      <div className="mb-4">
        <p className="text-xs text-gray-500">Or with your email address</p>
      </div>
    </Fragment>
  );
};

export default RegisterHeader;
