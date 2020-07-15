import React, { Fragment } from 'react';

// components
import Header from './components/Header';
import Why from './components/Why';
// import CallToAction from './components/CallToAction';
// import Categories from './components/Categories';
// import How from './components/How';
import Vacancies from './components/Vacancies';

const Home = () => {
  return (
    <Fragment>
      <Header />
      {/* <How /> */}
      <Why />
      {/* <CallToAction /> */}
      {/* <Categories /> */}

      <Vacancies />
    </Fragment>
  );
};

export default Home;
