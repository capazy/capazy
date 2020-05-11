import React, { useContext, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Routes from './Routes';
import { UserContext } from './context/UserContext';

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
  const { getCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
