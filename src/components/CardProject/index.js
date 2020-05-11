import React from 'react';

// export const GET_PROJECTS = gql`
//   {
//     projects {
//       _id
//       title
//       description
//       type
//       deadline
//       published
//       isOpen
//       creator {
//         _id
//       }
//       vacancies {
//         _id
//         title
//         experience
//         skills
//       }
//     }
//   }
// `;

const CardProject = ({ project: { title, description, type, vacancies } }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden my-2">
      <img
        className="w-full h-32 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center px-6 py-1 bg-gray-800">
        {/* <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
        </svg> */}
        <h1 className="mx-3 text-white  font-semibold text-lg">{title}</h1>
      </div>
      <div className="py-4 px-4">
        <h1 className="text-md font-semibold text-gray-800">{type}</h1>
        <p className="py-2 text-sm text-gray-700">{description}</p>

        {/* TABLE */}
        <div className=" mx-auto">
          <div className="bg-white rounded my-2">
            <h1 className="text-md font-semibold text-gray-800">Vacancies</h1>
            <table className="text-left w-full border-collapse">
              <tbody>
                {vacancies.map((vacancy) => (
                  <tr className="">
                    <td className="py-1 px-2 border-b border-grey-light">
                      <span className="w-full py-3 ">
                        <p className="text-gray-800 text-sm">{vacancy.title}</p>
                        {vacancy.skills.map((skill) => (
                          <p className="table-cell text-xs text-gray-500 font-medium">
                            {skill}
                          </p>
                        ))}
                      </span>
                    </td>
                    <td className=" py-1 px-0 border-b border-grey-light">
                      <span className="inline-block bg-green-200 px-2 py-0 text-sm rounded-full text-gray-700 mr-2">
                        open
                      </span>
                    </td>
                    <td className=" py-1 px-6 border-b border-grey-light">
                      <button className="inline-block tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 shadow-sm">
                        Apply
                      </button>
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

export default CardProject;
