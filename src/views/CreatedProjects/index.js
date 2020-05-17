import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_CREATED_PROJECTS } from '../../graphql/user';
import { CreatedCard, Alert } from '../../components';

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
      <div className="container my-12 mx-auto px-4 md:px-12">
        <Alert />
        {data.user.createdProjects.map((project) => (
          <div key={project._id} className="my-4 px-2   ">
            <CreatedCard project={project} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CreatedProjects;
