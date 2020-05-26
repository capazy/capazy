import React from 'react';

const TeamTable = ({ vacancies }) => {
  return (
    <div className="max-w-xl ">
      <div className=" p-3">
        <h1 className="text-lg font-semibold pt-2 mb-4">My team</h1>
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-1 px-2">Role</th>
              <th className="text-left p-1 px-2">Experience</th>
              <th className="text-left p-1 px-2">Skills</th>
              <th className="mx-auto p-1 px-2">Action</th>
              <th></th>
            </tr>
            {vacancies.map((vacancy) => (
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
            ))}
          </tbody>
        </table>
        <div className="text-right">
          <button type="button" className="btn bg-green-200">
            Add Teammate
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
