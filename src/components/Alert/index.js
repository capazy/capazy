import React from 'react';
import { useStoreState } from 'easy-peasy';

const Alert = () => {
  const message = useStoreState((state) => state.message);
  const alertType = useStoreState((state) => state.alertType);

  if (!message) return null;

  return (
    <div className="alert-banner  ">
      <input type="checkbox" className="hidden" id="banneralert" />

      <label
        className={`banner ${alertType}`}
        title="close"
        htmlFor="banneralert"
      >
        <div className="container mx-auto flex justify-between items-center my-1 max-w-screen-lg mx-auto">
          {message}
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default Alert;
