import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

// apollo
import { useQuery, useMutation } from '@apollo/react-hooks';
// import { GET_VACANCIES } from '../../../graphql/project';
import { JOIN_VACANCY, GET_VACANCIES } from '../../../graphql/vacancy';

// components
import { VacancyCard } from '../../../components';

// context

const Feed = () => {
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

  const { loading, data, refetch } = useQuery(GET_VACANCIES);
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
      <div className="container my-8 mx-auto">
        {/* <div className="container max-w-3xl  my-8 mx-auto md:px-4 md:px-12"> */}
        <div className=" mx-auto mt-4 justify-between">
          {data.vacancies.map((vacancy) => (
            <div key={vacancy._id} className="md:px-1 w-full">
              <VacancyCard vacancy={vacancy} handleJoin={handleJoin} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
