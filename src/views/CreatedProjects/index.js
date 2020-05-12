import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_CREATED_PROJECTS } from '../../graphql/user';

const CreatedProjects = () => {
  // const [joinVacancy] = useMutation(JOIN_VACANCY, {
  //   update(_, { data }) {},
  // });

  const { loading, data, refetch } = useQuery(GET_USER_CREATED_PROJECTS);
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  refetch();

  // const handleJoin = (vacancyId) => {
  //   joinVacancy({ variables: { vacancyId } });
  // };

  return (
    <Fragment>
      <div className="py-16">
        {data.user.createdProjects.map((project) => (
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
                            // onClick={() => handleJoin(vacancy._id)}
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
    </Fragment>
  );
};

export default CreatedProjects;
