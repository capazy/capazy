import React, { Fragment, useEffect } from 'react';

// components
import { NoData } from '../index';

const ExperienceTable = ({ setAction, workExperience, deleteExperience }) => {
  return (
    <Fragment>
      <div className="max-w-xl border-b-2">
        <div className=" pb-3">
          <h1 className="text-gray-900 text-xl mb-4">Work Experience</h1>
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-1 px-2">Role</th>
                <th className="text-left p-1 px-2">Experience</th>
                <th className="text-left p-1 px-2">Skills</th>
                <th className="mx-auto p-1 px-2 text-gray-400">Action</th>
                <th></th>
              </tr>
              {workExperience &&
                workExperience !== [] &&
                workExperience.map((exp, i) => (
                  <tr
                    key={exp._id}
                    className="border-b hover:bg-orange-100 bg-gray-100 "
                  >
                    <td className="p-1 px-2">
                      <p className="bg-transparent">{exp.title}</p>
                    </td>
                    <td className="p-1 px-2">
                      <p className="bg-transparent">{exp.experience}</p>
                    </td>
                    <td className="p-1 px-2">
                      {exp.skills.map((skill, i) => (
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
                        onClick={() =>
                          deleteExperience({ experienceId: exp._id }, i)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {workExperience && workExperience.length === 0 && (
            <NoData text={'You have not added experience yet'} />
          )}
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="button"
              onClick={() => setAction(true)}
            >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceTable;
