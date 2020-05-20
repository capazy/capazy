import React from 'react';
import { App as SendBirdApp } from 'sendbird-uikit';
import './index.css';

const Chat = () => {
  return (
    <div className="App">
      <SendBirdApp
        appId={'C372DF8C-8E5A-46C7-BC89-7F6060E5C941'}
        userId="139386"
        nickname="Sebas"
      />
    </div>
  );
};

export default Chat;
