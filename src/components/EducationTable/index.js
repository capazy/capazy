import React, { Fragment, useContext } from 'react';

// components
import { NoData } from '../index';
import { UserContext } from '../../context/UserContext';

const EducationTable = ({ setAction, education }) => {
  const { deleteEdu } = useContext(UserContext);
  return (
    <Fragment>
      <div className="max-w-xl border-b-2">
        <div className=" pb-3">
          <h1 className="text-gray-900 text-xl mb-4">Education</h1>
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-1 px-2">Degree</th>
                <th className="text-left p-1 px-2">Field</th>
                <th className="text-left p-1 px-2">Year</th>
                <th className="mx-auto p-1 px-2 text-gray-400">Action</th>
                <th></th>
              </tr>
              {education &&
                education !== [] &&
                education.map((edu) => (
                  <tr
                    key={edu._id}
                    className="border-b hover:bg-orange-100 bg-gray-100 "
                  >
                    <td className="p-1 px-2">
                      <p className="bg-transparent">{edu.degree}</p>
                    </td>
                    <td className="p-1 px-2">
                      <p className="bg-transparent">{edu.fieldOfStudy}</p>
                    </td>
                    <td className="p-1 px-2">
                      <p className="bg-transparent">{edu.year}</p>
                    </td>
                    <td className="p-2 px-5 flex justify-end">
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => deleteEdu({ educationId: edu._id })}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {education && education.length === 0 && (
            <NoData text={'You have not added an education yet'} />
          )}
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="button"
              onClick={() => setAction(true)}
            >
              Add Education
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EducationTable;
