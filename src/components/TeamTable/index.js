import React from 'react';

const TeamTable = ({ project, setAction }) => {
  return (
    <div className="max-w-xl border-b-2">
      <div className=" pb-3">
        <h1 className="text-lg font-semibold pt-2 mb-4">My vacancies</h1>
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-1 px-2">Role</th>
              <th className="text-left p-1 px-2">Experience</th>
              <th className="text-left p-1 px-2">Skills</th>
              <th className="mx-auto p-1 px-2">Action</th>
              <th></th>
            </tr>
            {project &&
              project.vacancies !== [] &&
              project.vacancies.map((vacancy) => (
                <tr className="border-b hover:bg-orange-100 bg-gray-100 ">
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
              ))}
          </tbody>
        </table>
        {project && project.vacancies.length === 0 && (
          <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
            {console.log(project.vacancies)}
            <span className="h-full w-full text-center flex flex-col items-center justify-center items-center mx-auto">
              <img
                className="mx-auto w-32"
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                alt="no data"
              />
              <span className="text-small text-gray-500">
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
            Add Vacancy
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
