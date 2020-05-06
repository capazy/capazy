import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Routes from './Routes';
import GlobalProvider from './context';
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
  return (
    <Router history={history}>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </Router>
  );
};

export default App;
