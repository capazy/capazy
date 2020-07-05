import React, { Fragment, useEffect, useContext } from 'react';

// components
import Header from './components/Header';
import Why from './components/Why';
import CallToAction from './components/CallToAction';
import Categories from './components/Categories';
import How from './components/How';

// utils
import axios from 'axios';

// context
import { UserContext } from '../../context/UserContext';

const Home = () => {
  const { passport } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/api/user');
      console.log(res.data);
    };
    fetchUser();
  }, []);
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
