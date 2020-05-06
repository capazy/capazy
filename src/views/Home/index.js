import React, { Fragment } from 'react';

// components
import Header from './components/Header';
import Why from './components/Why';
import CallToAction from './components/CallToAction';
import Categories from './components/Categories';
import How from './components/How';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <How />
      <Why />
      <CallToAction />
      <Categories />
    </Fragment>
  );
};

export default Home;
