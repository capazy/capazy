import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_JOINED_PROJECTS } from '../../graphql/queries/user';

const Feed = () => {
  // const [joinVacancy] = useMutation(JOIN_VACANCY, {
  //   update(_, { data }) {},
  // });

  const { loading, data, refetch } = useQuery(GET_USER_JOINED_PROJECTS);
  if (loading) return <p>Loading...</p>;
  refetch();

  // const handleJoin = (vacancyId) => {
  //   joinVacancy({ variables: { vacancyId } });
  // };

  return (
    <Fragment>
      <div className="py-16">
        {data.user.joinedProjects.map((vacancy) => (
          <div
            className="container w-full flex flex-wrap mx-auto px-2 lg:pt-2"
            key={vacancy._id}
          >
            <div className="w-full p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
              <div className="font-sans">
                <h1 className="font-sans break-normal text-gray-900 py-2 text-xl">
                  Vacancy: {vacancy.title}
                </h1>
                <hr className="border-b border-gray-400" />
              </div>

              <div>
                <h2>Vacancy Info</h2>
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th>Experience</th>
                      <th>Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{vacancy.experience}</td>
                      <td>{vacancy.skills}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div>
                <h2>Project Info</h2>
                <p className="py-6">{vacancy.project.description}</p>
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
                      <td>{vacancy.project.type}</td>
                      <td>{vacancy.project.deadline}</td>
                      <td>{vacancy.project.published}</td>
                      <td>{vacancy.project.vacancies.length}</td>
                      <td>{vacancy.project.creator._id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Feed;
