import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_JOINED_PROJECTS } from '../../graphql/user';

// components
import { JoinedCard, NoData, LoadingCard } from '../../components';

const JoinedProjects = () => {
  const { loading, data, refetch } = useQuery(GET_USER_JOINED_PROJECTS);
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
            <JoinedCard vacancy={vacancy} currentUserId={data.user._id} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default JoinedProjects;
