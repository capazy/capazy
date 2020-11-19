import React, { Fragment, useContext, useEffect } from 'react';

// components
import Header from './components/Header';
import Why from './components/Why';
import How from './components/How';
import { ProjectContext } from '../../context/ProjectContext';
import { LoadingCard } from '../../components';
import CallToAction from './components/CallToAction';
import Vacancies from "./components/Vacancies";

const Home = () => {
  const { getVacancies, vacancies } = useContext(ProjectContext);

  useEffect(() => {
    getVacancies();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <How />
      <Why />
        {!vacancies ? <LoadingCard/> : <Vacancies vacancies={vacancies} />}
        <CallToAction />
    </Fragment>
  );
};

export default Home;
