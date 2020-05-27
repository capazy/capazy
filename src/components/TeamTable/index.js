import React from 'react';

const TeamTable = ({ project, setAction }) => {
  return (
    <div className="max-w-xl ">
      <div className=" p-3">
        <h1 className="text-lg font-semibold pt-2 mb-4">My vacancies</h1>
        {project &&
          project.vacancies !== [] &&
          project.vacancies.map((vacancy) => (
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-1 px-2">Role</th>
                  <th className="text-left p-1 px-2">Experience</th>
                  <th className="text-left p-1 px-2">Skills</th>
                  <th className="mx-auto p-1 px-2">Action</th>
                  <th></th>
                </tr>

                <tr className="border-b hover:bg-orange-100 bg-gray-100 p-3">
                  <td className="p-1 px-2">
                    <p className="bg-transparent">{vacancy.title}</p>
                  </td>
                  <td className="p-1 px-2">
                    <p className="bg-transparent">{vacancy.experience}</p>
                  </td>
                  <td className="p-1 px-2">
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
                  </td>
                  <td className="p-2 px-5 flex justify-end">
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        {project && project.vacancies.length === 0 && (
          <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
            {console.log(project.vacancies)}
            <span class="h-full w-full text-center flex flex-col items-center justify-center items-center mx-auto">
              <img
                class="mx-auto w-32"
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                alt="no data"
              />
              <span class="text-small text-gray-500">
                You don't have vacancies yet
              </span>
            </span>
          </section>
        )}
        <div className="text-right">
          <button
            type="button"
            className="btn bg-green-200"
            onClick={() => setAction(true)}
          >
            Add Teammate
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
