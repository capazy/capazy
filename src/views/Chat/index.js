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
        appId={'C372DF8C-8E5A-46C7-BC89-7F6060E5C941'}
        userId={user._id}
        nickname={user.firstName}
      />
    </div>
  );
};

export default Chat;
