import React from 'react';

const ProjectCard = ({
  project: {
    title,
    description,
    type,
    startDate,
    endDate,
    vacancies,
    projectPictureUrl,
  },
  handleJoin,
}) => {
  return (
    <div
      className=" bg-white shadow-md rounded-lg overflow-hidden my-2 "
      // style={{ height: '50vh' }}
    >
      {projectPictureUrl && (
        <img
          className="w-full h-32 object-cover object-center"
          src={projectPictureUrl}
          alt="avatar"
        />
      )}
      <div className="flex items-center px-1 py-1 bg-gray-800">
        <h1 className="mx-3 text-white font-semibold text-lg">{title}</h1>
      </div>
      <div className="py-4 px-4">
        <h1 className="text-md font-semibold text-gray-800">{type}</h1>
        <p className="py-2 text-sm text-gray-700 border-b">{description}</p>
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

        {/* TABLE */}
        <div className=" mx-auto">
          <div className="bg-white rounded my-2 w-full">
            <h1 className="text-md font-semibold text-gray-800">Vacancies</h1>
            <table className="text-left border-collapse table-fixed w-full ">
              <tbody className="w-full">
                {/* <div className="w-full"> */}
                {vacancies.map((vacancy) => (
                  <tr key={vacancy._id} className=" ">
                    <td className="border-b border-grey-light w-1/2 px-1 py-2 ">
                      <span className="w-full py-3  ">
                        <p className="text-gray-800 text-sm">
                          <strong>{vacancy.title}</strong>
                        </p>
                        {vacancy.skills.map((skill, i) => (
                          <p
                            key={skill[i]}
                            className="text-xs text-gray-500 font-medium"
                          >
                            {skill},
                          </p>
                        ))}
                      </span>
                      <p className="text-gray-800 text-sm">
                        {vacancy.description}
                      </p>
                    </td>
                    <td className="w-1/4 py-1 px-0 border-b border-grey-light my-auto mx-auto">
                      <span className="inline-block bg-green-200 px-2 py-0 text-sm rounded-full text-gray-700 mr-2">
                        open
                      </span>
                    </td>
                    <td className="w-1/4 py-1  border-b border-grey-light">
                      <button
                        onClick={() => handleJoin(vacancy._id)}
                        className="inline-block tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 shadow-sm"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
                {/* </div> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
