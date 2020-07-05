import React, { Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// components
import { LoadingCard } from '../../components';

// context
import { UserContext } from '../../context/UserContext';

const Loading = () => {
  const { user, passport } = useContext(UserContext);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get('/api/user');
  //       await passport(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUser();
  // }, [passport]);

  if (user) {
    return <Redirect push to="/feed" />;
  }

  return (
    <Fragment>
      <LoadingCard />
    </Fragment>
  );
};

export default Loading;
