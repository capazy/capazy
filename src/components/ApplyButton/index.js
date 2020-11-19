import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { Redirect } from 'react-router-dom';

const ApplyButton = ({ vacancy, handleJoin }) => {
  const { user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const userAlreadyApplied = (vacancy) => {
    let result = vacancy.postulatedUsers.find(
      (postulatedUser) => postulatedUser._id === user._id
    );
    return result;
  };

  const handleNoLogin = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to="/signup" />;
  }

  return (
    <div>
      {user ? (
        <div className="flex">
          <span className="w-1/2 ">
            {userAlreadyApplied(vacancy) ? (
              <div className="flex flex-shrink-0 text-xs">
                <div className="bg-green-200 text-green-700 px-6  py-1 rounded-r">
                  Already applied
                </div>
              </div>
            ) : vacancy.selectedUser._id ? null : (
              <button
                onClick={() => handleJoin(vacancy._id)}
                className="inline-block tracking-wider text-white bg-brand-blue px-10 py-1 text-md rounded leading-loose shadow-sm"
              >
                Apply
              </button>
            )}
          </span>
        </div>
      ) : (
        <div>
          <span className="w-1/2">
            <button
              onClick={handleNoLogin}
              className="inline-block tracking-wider text-white bg-brand-blue px-10 py-1 text-md rounded leading-loose shadow-sm"
            >
              Apply
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default ApplyButton;
