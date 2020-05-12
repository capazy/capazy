import React, { Fragment } from 'react';
import { useFormik } from 'formik';

// apollo
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { GET_PROJECTS_BY_SKILL } from '../../graphql/project';
import { JOIN_VACANCY } from '../../graphql/vacancy';

// context
// import { AuthContext } from '../../context/AuthContext';

// utils
// import { loginFormSchema } from '../../utils/formikSchemas';

const SearchBar = () => {
  // const { login, user } = useContext(AuthContext);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      skill: '',
    },
    onSubmit: async (values) => {
      await getProjects({ variables: values });
    },
  });
  const { skill } = values;

  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });
  const [getProjects, { loading, data }] = useLazyQuery(GET_PROJECTS_BY_SKILL);

  const handleJoin = (vacancyId) => {
    joinVacancy({ variables: { vacancyId } });
  };

  return (
    <Fragment>
      <div className="pt-5 w-full max-w-xs my-auto mx-auto">
        <form class="w-full max-w-sm" onSubmit={handleSubmit}>
          <div class="flex items-center py-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skill"
              type="text"
              placeholder="skill"
              onChange={handleChange}
              value={skill}
              invalid={touched.skill && errors.skill ? true : undefined}
            />
            <p className="text-red-500 text-xs italic">{errors.skill}</p>
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="py-16">
          {data &&
            data.projectsBySkill.map((project) => (
              <div
                className="container w-full flex flex-wrap mx-auto px-2 lg:pt-2"
                key={project._id}
              >
                <div className="w-full p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
                  <div className="font-sans">
                    <h1 className="font-sans break-normal text-gray-900 py-2 text-xl">
                      {project.title} | {project._id}
                    </h1>
                    <hr className="border-b border-gray-400" />
                  </div>
                  <p className="py-6">{project.description}</p>

                  <div>
                    <h2>Project Info</h2>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th>Type</th>
                          <th>Deadline</th>
                          <th>Published</th>
                          <th>Vacancies</th>
                          <th>Creator</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{project.type}</td>
                          <td>{project.deadline}</td>
                          <td>{project.published}</td>
                          <td>{project.vacancies.length}</td>
                          <td>{project.creator._id}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />

                  <div>
                    <h2>Vacancies Info</h2>
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th>ID</th>
                          <th>Title</th>
                          <th>Experience Req.</th>
                          <th>Skills</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.vacancies.map((vacancy) => (
                          <tr key={vacancy._id}>
                            <td>{vacancy._id}</td>
                            <td>{vacancy.title}</td>
                            <td>{vacancy.experience}</td>
                            <td>{vacancy.skills}</td>
                            <td>
                              <button
                                className="btn bg-brand-blue text-white mb-0"
                                onClick={() => handleJoin(vacancy._id)}
                              >
                                Join
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default SearchBar;
