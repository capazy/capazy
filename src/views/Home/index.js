import React, { Fragment, useContext, useEffect } from 'react';

// components
import Header from './components/Header';
import Why from './components/Why';
import How from './components/How';
// import CallToAction from './components/CallToAction';
// import Categories from './components/Categories';
// import How from './components/How';
import { ProjectContext } from '../../context/ProjectContext';
import { LoadingCard } from '../../components';
import CallToAction from './components/CallToAction';

const Home = () => {
  const { getVacancies, vacancies } = useContext(ProjectContext);

  useEffect(() => {
    getVacancies();
  }, []);
  if (!vacancies) return <LoadingCard />;
  return (
    <Fragment>
      <Header />
      <How />
      <Why />
      <CallToAction />
      {/* <Categories /> */}

      {/* <Vacancies vacancies={vacancies} /> */}
    </Fragment>
  );
};

export default Home;
