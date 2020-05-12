import React from 'react';
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
    <div>
      <div className="max-w-xl w-full lg:max-w-full lg:flex ">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
          }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl ">{title}</div>
            <p className="text-sm text-gray-600 flex items-center mb-2">
              {type}
            </p>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          {/* TABLE */}

          <div className="bg-white rounded my-2">
            <h1 className="text-md font-semibold text-gray-800">Vacancies</h1>
            <table className=" w-full border-collapse">
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr
                    key={vacancy._id}
                    className="w-full overflow-hidden border-t"
                  >
                    <td className="tab overflow-hidden py-1 px-2 border-b border-grey-light justify-arround">
                      <input
                        className="absolute opacity-0"
                        id={vacancy._id}
                        type="checkbox"
                        name="tabs"
                      />
                      <div className="flex">
                        <span className="w-full py-1 ">
                          <label
                            className="block text-gray-800 text-sm leading-normal cursor-pointer"
                            htmlFor={vacancy._id}
                          >
                            {vacancy.title}
                          </label>

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
                          <label
                            className="block text-gray-800 text-sm leading-normal cursor-pointer"
                            htmlFor={vacancy._id}
                          >
                            <span className="inline-block bg-green-200 px-2 py-0 text-sm rounded-full text-gray-700 mr-2">
                              open
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        {vacancy.postulatedUsers.map((postulated) => (
                          <div key={postulated._id}>
                            <p>{postulated._id}</p>
                            <p>{postulated.firstName}</p>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
                <div className="tab overflow-hidden py-1 px-2 border-b border-grey-light justify-arround">
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p className="p-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur, architecto, explicabo perferendis nostrum, maxime
                      impedit atque odit sunt pariatur illo obcaecati soluta
                      molestias iure facere dolorum adipisci eum? Saepe, itaque.
                    </p>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedCard;
