import React from 'react';
import { Link } from 'react-router-dom';

const CreatedCard = ({
  project: {
    title,
    description,
    type,
    startDate,
    endDate,
    vacancies,
    _id,
    projectPictureUrl,
  },
  handleSelect,
}) => {
  return (
    <div className="my-10">
      <div className="max-w-lg w-full lg:max-w-full lg:flex border-r border-b border-l border-t">
        {projectPictureUrl && (
          <div
            className="lg:hidden h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${projectPictureUrl})`,
            }}
            title={title}
          ></div>
        )}
        <div className="w-full py-4 bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal">
          <div className="flex mb-8">
            {projectPictureUrl && (
              <img
                className="hidden lg:block flex-initial mr-2 h-48 w-64 object-cover object-center"
                src={projectPictureUrl}
                alt="project"
              />
            )}
            <div className="w-full">
              <div className="flex justify-between w-full my-1">
                <div>
                  <p className="text-gray-900 font-bold text-xl ">{title}</p>
                  <p className="text-sm text-gray-600 flex items-center mb-2">
                    {type}
                  </p>
                </div>

                <div className="text-center">
                  <Link to={`/project/create?projectId=${_id}`}>
                    <button className="btn-small bg-brand-blue">Edit</button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex justify-start">
                  <div className="text-center mt-1">
                    <p className="text-xs font-semibold text-gray-800">
                      Start Date
                    </p>
                    <p className="text-xs py-2 text-sm text-gray-700">
                      {startDate.slice(0, 10)}
                    </p>
                  </div>
                  <div className="text-center mt-1 ml-4">
                    <p className="text-xs font-semibold text-gray-800">
                      End Date
                    </p>
                    <p className="text-xs py-2 text-sm text-gray-700">
                      {endDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
            </div>
          </div>

          {/* TABLE */}

          <div className="bg-white rounded -mt-4">
            <div className="grid grid-cols-3 text-center border-b">
              <div className="col-start-1">
                {' '}
                <h1 className="text-md text-left font-semibold text-gray-600">
                  Vacancies ({vacancies.length})
                </h1>
              </div>
              <div className="col-start-2">
                {' '}
                <h1 className="text-md font-semibold text-gray-600">
                  Postuladed
                </h1>
              </div>
              <div className="col-start-3">
                {' '}
                <h1 className="text-md font-semibold text-gray-600">Status</h1>
              </div>
            </div>

            <table className=" w-full border-collapse">
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id} className="w-full  ">
                    <td className="tab border-b ">
                      <input
                        className="absolute opacity-0"
                        id={vacancy._id}
                        type="checkbox"
                        name="tabs"
                      />
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-start-1 ">
                          <h1 className="block text-gray-800 text-sm">
                            {vacancy.title}
                          </h1>
                          {vacancy.skills.map((skill, i) => (
                            <span key={skill}>
                              <p
                                key={skill[i]}
                                className="block table-cell text-xs text-gray-500 font-medium"
                              >
                                {skill}
                              </p>
                            </span>
                          ))}
                        </div>
                        <div className="col-start-2 text-center text-sm mt-2 ">
                          {vacancy.postulatedUsers.length || 0}
                        </div>
                        <div className="col-start-3 text-center ">
                          <span className="flex justify-center">
                            {!vacancy.selectedUser._id ? (
                              <span className="inline-block bg-green-200 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-1">
                                open
                              </span>
                            ) : (
                              <span className="inline-block bg-yellow-400 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-1">
                                closed
                              </span>
                            )}
                            <label
                              className="text-gray-800 text-sm leading-normal cursor-pointer"
                              htmlFor={vacancy._id}
                            >
                              <div className=" text-center px-1 mt-4 text-gray-600">
                                <svg
                                  className="fill-current h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </label>
                          </span>
                        </div>
                      </div>

                      <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-brand-blue leading-normal">
                        <div className=" ">
                          {vacancy.postulatedUsers.map((postulated, i) => (
                            <table
                              key={postulated._id}
                              className="w-full border-collapse bg-white"
                            >
                              <tbody className="text-gray-700">
                                <tr
                                  className={
                                    i % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                                  }
                                >
                                  <td className="w-1/3 text-left py-0 px-2">
                                    <span className="w-full  ">
                                      <h1 className="block text-gray-800 text-sm">
                                        {postulated.firstName}{' '}
                                        {postulated.lastName}
                                      </h1>

                                      {postulated.skills.map((skill, i) => (
                                        <span key={skill}>
                                          <p
                                            key={skill[i]}
                                            className="block table-cell text-xs text-gray-500 font-medium"
                                          >
                                            {skill}
                                          </p>
                                        </span>
                                      ))}
                                    </span>
                                  </td>

                                  {!vacancy.selectedUser._id ? (
                                    <td className="text-right py-3 px-4">
                                      <button
                                        className="btn-small"
                                        to="#"
                                        onClick={() =>
                                          handleSelect(
                                            postulated._id,
                                            vacancy._id
                                          )
                                        }
                                      >
                                        Select
                                      </button>
                                    </td>
                                  ) : postulated.joins.find(
                                      (join) => join.vacancy._id === vacancy._id
                                    ).status === 'selected' ? (
                                    <td className="text-right py-3 px-4">
                                      <span className="inline-block bg-green-300 px-2 p-0 text-sm rounded-full text-gray-700">
                                        Selected
                                      </span>
                                    </td>
                                  ) : (
                                    <td className="text-right py-3 px-4">
                                      <span className="inline-block bg-red-300 px-2 p-0 text-sm rounded-full text-gray-700">
                                        Not Selected
                                      </span>
                                    </td>
                                  )}

                                  <td className="text-center py-3 px-4 text-xs">
                                    <Link
                                      className="hover:text-blue-500 "
                                      to={`profile/${postulated._id}`}
                                    >
                                      view profile
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          ))}
                        </div>
                      </div>
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

export default CreatedCard;
