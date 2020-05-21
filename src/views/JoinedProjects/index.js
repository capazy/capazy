import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_JOINED_PROJECTS } from '../../graphql/user';
import JoinedCard from '../../components/JoinedCard';

const JoinedProjects = () => {
  // const [joinVacancy] = useMutation(JOIN_VACANCY, {
  //   update(_, { data }) {},
  // });

  const { data, refetch } = useQuery(GET_USER_JOINED_PROJECTS);
  if (!data) return <p>Loading...</p>;
  refetch();

  // const handleJoin = (vacancyId) => {
  //   joinVacancy({ variables: { vacancyId } });
  // };

  return (
    <Fragment>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {data.user.joinedProjects.map((vacancy) => (
          <div key={vacancy._id} className="my-4 px-2   ">
            <JoinedCard vacancy={vacancy} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default JoinedProjects;
