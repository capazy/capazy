import React from 'react';
import { Link } from 'react-router-dom';

// {
//     user {
//       _id
//       createdProjects {
//         _id
//         title
//         description
//         type
//         deadline
//         published
//         isOpen
//         creator {
//           _id
//         }
//         vacancies {
//           _id
//           title
//           experience
//           skills
//         }
//       }
//     }
//   }
const CreatedCard = ({
  project: { title, description, type, deadline, published, isOpen, vacancies },
}) => {
  return (
    <div className="my-10">
      <div className="max-w-md w-full lg:max-w-full lg:flex border-r border-b border-l  ">
        <div
          className="md:hidden h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
          }}
          title="Woman holding a mug"
        ></div>
        <div className="py-4 bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal">
          <div className="flex mb-8">
            <img
              className="hidden md:block flex-initial mr-2 h-48"
              src="https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="project"
            />
            <div className="flex-initial">
              <p className="text-gray-900 font-bold text-xl ">{title}</p>
              <p className="text-sm text-gray-600 flex items-center mb-2">
                {type}
              </p>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded -mt-4">
            <h1 className="text-md font-semibold text-gray-800">Vacancies</h1>
            <table className=" w-full border-collapse">
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id} className="w-full  ">
                    <td className="tab border-b justify-arround">
                      <input
                        className="absolute opacity-0"
                        id={vacancy._id}
                        type="checkbox"
                        name="tabs"
                      />
                      <div className="flex">
                        <span className="w-full py-1 ">
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
                        </span>
                        <div className=" py-1">
                          <span className="inline-block bg-green-200 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-2">
                            open
                          </span>
                        </div>
                        <div className=" py-1">
                          <label
                            className="block text-gray-800 text-sm leading-normal cursor-pointer"
                            htmlFor={vacancy._id}
                          >
                            {/* <span className="inline-block bg-green-200 px-2 p-0 mt-4 text-sm rounded-full text-gray-700 mr-2">
                              open
                            </span> */}
                            <div class="inset-y-0 right-0 flex text-center px-2 mt-4 text-gray-600">
                              <svg
                                class="fill-current h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-brand-blue leading-normal">
                        <div className=" ">
                          {vacancy.postulatedUsers.map((postulated, i) => (
                            <table className="w-full border-collapse bg-white">
                              <tbody className="text-gray-700">
                                <tr className={i % 2 === 0 && 'bg-gray-100'}>
                                  <td className="w-1/3 text-left py-0 px-2">
                                    <span className="w-full  ">
                                      <h1 className="block text-gray-800 text-sm">
                                        {vacancy.title}
                                      </h1>

                                      {postulated.skills.map((skill, i) => (
                                        <span key={skill}>
                                          <p
                                            key={skill[i]}
                                            className="block table-cell text-xs text-gray-500 font-medium"
                                          >
                                            {skill}
                                          </p>
                                          {console.log(i)}
                                        </span>
                                      ))}
                                    </span>
                                  </td>

                                  <td className="text-right py-3 px-4">
                                    <button className="btn-small" to="#">
                                      Select
                                    </button>
                                  </td>
                                  <td className="text-center py-3 px-4 text-xs">
                                    <Link
                                      className="hover:text-blue-500 "
                                      to="#"
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
