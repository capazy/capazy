import React, { Fragment } from 'react';

// apollo
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USER_CREATED_PROJECTS } from '../../graphql/user';
import { SELECT_USER } from '../../graphql/vacancy';

// components
import { CreatedCard } from '../../components';

const CreatedProjects = () => {
  const [selectUser] = useMutation(SELECT_USER, {
    update(_, { data }) {
      console.log('SELECT', data);
    },
  });

  const handleSelect = async (selectedUserId, vacancyId) => {
    await selectUser({ variables: { selectedUserId, vacancyId } });
  };

  const { loading, data, refetch } = useQuery(GET_USER_CREATED_PROJECTS);
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  refetch();

  return (
    <Fragment>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {data.user.createdProjects.map((project) => (
          <div key={project._id} className="my-4 px-2   ">
            <CreatedCard project={project} handleSelect={handleSelect} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CreatedProjects;
