import React, { useContext, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Routes from './Routes';

// context
import { UserContext } from './context/UserContext';
import { ChatContext } from './context/ChatContext';

// .env
require('dotenv-flow').config();

// google analytics
const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS;
ReactGA.initialize(trackingId);
const history = createBrowserHistory();
ReactGA.pageview(window.location.pathname + window.location.search);
// history.listen(location => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

const App = () => {
  const { getCurrentUser, user } = useContext(UserContext);
  const { connectSendBird, isConnected } = useContext(ChatContext);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (user && !isConnected) {
    connectSendBird(user._id);
  }

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
