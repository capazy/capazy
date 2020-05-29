import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

// apollo
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/project';
import { JOIN_VACANCY } from '../../graphql/vacancy';
import { ProjectCard } from '../../components';

const Feed = () => {
  const [joinSuccess, setJoinSuccess] = useState(false);

  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

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

  return (
    <Fragment>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-between">
          {data.projects.map((project) => (
            <div
              key={project._id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
            >
              <ProjectCard project={project} handleJoin={handleJoin} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
