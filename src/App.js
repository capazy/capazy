import React, { useContext, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Routes from './Routes';
import GlobalProvider from './context';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_USER } from './graphql/queries/user';
import UserContext from './context/UserContext';
import { Redirect } from 'react-router-dom';

require('dotenv-flow').config();

///Google Analytics Events
const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS;

ReactGA.initialize(trackingId);
const history = createBrowserHistory();

// history.listen(location => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  // const [getUser, { data }] = useLazyQuery(GET_USER);
  // const { data, refetch } = useQuery(GET_USER);

  // refetch();

  // console.log('LAZYDATA', data);
  return (
    <Router history={history}>
      <GlobalProvider>
        {/* <UserContext.Provider value={{ data }}> */}
        <Routes />
        {/* </UserContext.Provider> */}
      </GlobalProvider>
    </Router>
  );
};

export default App;
