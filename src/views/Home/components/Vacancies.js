import React, { Fragment, useState } from 'react';

// apollo
import { useMutation } from '@apollo/react-hooks';
// import { GET_VACANCIES } from '../../../graphql/project';
import { JOIN_VACANCY } from '../../../graphql/vacancy';

// components
import { VacancyCard } from '../../../components';

// context

const Feed = ({ vacancies }) => {
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {},
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
    window.location.href = "/joined-projects";
  }

  return (
    <Fragment>
      <div className="container my-8 mx-auto px-3">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Available Jobs
        </h1>
        {/* <div className="container max-w-3xl  my-8 mx-auto md:px-4 md:px-12"> */}
        <div className=" mx-auto mt-4 justify-between">
          {vacancies.map((vacancy) => (
            <div key={vacancy._id} className="md:px-1 ">
              <VacancyCard vacancy={vacancy} handleJoin={handleJoin} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
