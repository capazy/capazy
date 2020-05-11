import React, { Fragment } from 'react';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/queries/project';
// import { JOIN_VACANCY } from '../../graphql/mutation/vacancy';
import { CardProject } from '../../components';

const Feed = () => {
  // const [joinVacancy] = useMutation(JOIN_VACANCY, {
  //   update(_, { data }) {
  //     console.log('Vacancy', data);
  //   },
  // });

  const { loading, data, refetch } = useQuery(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  refetch();

  // const handleJoin = (vacancyId) => {
  //   joinVacancy({ variables: { vacancyId } });
  // };

  return (
    <Fragment>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.projects.map((project) => (
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
              <CardProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
