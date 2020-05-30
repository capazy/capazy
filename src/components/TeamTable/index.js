import React, { Fragment } from 'react';

// components
import { NoData } from '../index';

const TeamTable = ({ project, setAction }) => {
  return (
    <Fragment>
      <div className="max-w-xl border-b-2">
        <div className=" pb-3">
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
                  <tr
                    key={vacancy._id}
                    className="border-b hover:bg-orange-100 bg-gray-100 "
                  >
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
            <NoData text={"You don't have vacancies yet"} />
          )}
          <div className="text-right">
            <button
              className="btn bg-brand-blue text-white mb-0"
              onClick={() => setAction(true)}
            >
              Add Vacancy
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamTable;
