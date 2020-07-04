import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// apollo
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/project';
import { JOIN_VACANCY } from '../../graphql/vacancy';

// components
import { FeedCard, LoadingCard } from '../../components';

// context
import { UserContext } from '../../context/UserContext';
import { server } from '../../utils/axios';

const Feed = () => {
  const { user } = useContext(UserContext);
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

  useEffect(() => {
    const res = server.get('/user');
    console.log('res', res);
  }, []);

  const { loading, data, refetch } = useQuery(GET_PROJECTS, {
    variables: { skill: '' },
  });
  if (loading) return <p>Loading...</p>;
  refetch();

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
  if (!user) return <LoadingCard />;
  return (
    <Fragment>
      <div className="container max-w-3xl  my-8 mx-auto md:px-4 md:px-12">
        <div className=" mx-auto mt-4 justify-between">
          {data.projects.map((project) => (
            <div key={project._id} className="md:px-1 w-full">
              <FeedCard project={project} handleJoin={handleJoin} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
