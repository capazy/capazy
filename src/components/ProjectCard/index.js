import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import parse from 'html-react-parser';

// context
import { UserContext } from '../../context/UserContext';

const ProjectCard = ({
  project: {
    title,
    description,
    type,
    startDate,
    endDate,
    vacancies,
    projectPictureUrl,
    files,
    creator: { firstName, lastName },
  },
  handleJoin,
}) => {
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-2">
      {projectPictureUrl && (
        <img
          className="w-full h-32 object-cover object-center"
          src={projectPictureUrl}
          alt="avatar"
        />
      )}
      <div className="flex items-center justify-between px-1 py-1 bg-gray-800">
        <h1 className="mx-3 text-white font-semibold text-lg">{title}</h1>
        <h1 className="mx-3 text-gray-200 font-semibold text-sm italic">
          by {firstName} {lastName}
        </h1>
      </div>

      <div className="py-4 px-4">
        <h1 className="text-md font-semibold text-gray-800">{type}</h1>
        <p className="py-2 text-sm text-gray-700 border-b">
          {parse(description)}
        </p>
        <div className="flex justify-around my-2 border-b">
          <div className="">
            <h2 className="text-sm font-semibold text-gray-800 leading-none">
              Start Date
            </h2>
            <p className=" text-xs py-2 text-sm text-gray-700">
              {startDate.slice(0, 10)}
            </p>
          </div>
          <div className="">
            <h2 className="text-sm font-semibold text-gray-800 leading-none">
              End Date
            </h2>
            <p className="text-xs py-2 text-sm text-gray-700">
              {endDate.slice(0, 10)}
            </p>
          </div>
        </div>
        {/* FILES */}
        {files && files.length >= 1 ? (
          <div className="mb-4 border-b-2 py-2">
            <h1 className="text-md font-semibold text-gray-800">Files</h1>
            <table>
              <tbody>
                {files.map((file) => (
                  <tr key={file._id}>
                    <th className="text-left">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      >
                        {file.name}
                      </a>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* TABLE */}
        <div className=" mx-auto">
          <div className="bg-white rounded my-2 w-full">
            <h1 className="text-md font-semibold text-gray-800">Jobs</h1>
            <table className="text-left border-collapse table-fixed w-full ">
              <tbody className="w-full">
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id} className=" ">
                    <td className="border-b border-grey-light w-1/2 px-1 py-2 ">
                      <p className="text-gray-800 text-sm">
                        <strong>{vacancy.title}</strong>
                      </p>
                      <span className="flex py-1">
                        {vacancy.skills.map((skill, i) => (
                          <span className="">
                            <p
                              key={skill[i]}
                              className="text-xs text-gray-500 font-medium "
                            >
                              {skill},
                            </p>
                          </span>
                        ))}
                      </span>
                      {user ? (
                        <div className="flex">
                          <span className="w-1/2 py-1 px-0 border-b border-grey-light my-auto mx-auto">
                            {!vacancy.selectedUser._id ? (
                              <span className="inline-block bg-green-200 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-1">
                                open
                              </span>
                            ) : (
                              <span className="inline-block bg-yellow-400 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-1">
                                closed
                              </span>
                            )}
                          </span>
                          <span className="w-1/2 py-1  border-b border-grey-light">
                            {userAlreadyApplied(vacancy) ? (
                              <div className="flex flex-shrink-0 text-xs items-center pr-2">
                                <div className="bg-green-200 text-green-700 px-2 py-1 rounded-r">
                                  Already applied
                                </div>
                              </div>
                            ) : vacancy.selectedUser._id ? null : (
                              <button
                                onClick={() => handleJoin(vacancy._id)}
                                className="inline-block tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 shadow-sm"
                              >
                                Apply
                              </button>
                            )}
                          </span>
                        </div>
                      ) : (
                        <div className="flex">
                          <span className="w-1/2 py-1 px-0 border-b border-grey-light my-auto mx-auto">
                            <span className="inline-block bg-green-200 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-1">
                              open
                            </span>
                          </span>
                          <span className="w-1/2 py-1  border-b border-grey-light">
                            <button
                              onClick={handleNoLogin}
                              className="inline-block tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 shadow-sm"
                            >
                              Apply
                            </button>
                          </span>
                        </div>
                      )}
                      <p className="text-gray-800 text-sm">
                        {parse(vacancy.description)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
