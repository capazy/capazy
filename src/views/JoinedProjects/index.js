import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

// apollo
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USER_JOINED_PROJECTS } from '../../graphql/user';
import { JOIN_VACANCY } from '../../graphql/vacancy';

// components
import { JoinedCard, NoData, LoadingCard } from '../../components';

const JoinedProjects = () => {
  const [joinSuccess, setJoinSuccess] = useState(false);
  const { loading, data, refetch } = useQuery(GET_USER_JOINED_PROJECTS);
  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

  const handleJoin = async (vacancyId) => {
    try {
      await joinVacancy({ variables: { vacancyId } });
      await setJoinSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (joinSuccess) {
    return <Redirect push to="/joined-projects" />;
  }
  if (loading) return <LoadingCard />;
  if (!data) return <LoadingCard />;
  refetch();

  return (
    <Fragment>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {data.user.joinedProjects.length === 0 && (
          <NoData text={"You haven't joined any projects yet"} />
        )}
        {data.user.joinedProjects.map((vacancy) => (
          <div key={vacancy._id} className="my-4 px-2">
            <JoinedCard
              vacancy={vacancy}
              currentUserId={data.user._id}
              handleJoin={handleJoin}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default JoinedProjects;
