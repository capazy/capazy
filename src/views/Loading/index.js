import React, { Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// components
import { LoadingCard } from '../../components';

// context
import { UserContext } from '../../context/UserContext';

const Loading = () => {
  const { user, passport } = useContext(UserContext);

  useEffect(() => {
    axios.get('/api/user').then((res) => {
      passport(res.data.auth, res.data.user);
    });
  }, [passport]);

  if (user) {
    return <Redirect push to={`/profile/${user._id}`} />;
  }

  return (
    <Fragment>
      <LoadingCard />
    </Fragment>
  );
};

export default Loading;
