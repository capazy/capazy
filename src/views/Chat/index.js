import React, { useContext } from 'react';
import { App as SendBirdApp } from 'sendbird-uikit';

// style
import './index.css';

// context
import { UserContext } from '../../context/UserContext';

const Chat = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <SendBirdApp
        appId={process.env.REACT_APP_SENDBIRD_APP_ID}
        userId={user._id}
        nickname={`${user.firstName} ${user.lastName}`}
      />
    </div>
  );
};

export default Chat;
