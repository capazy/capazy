import React, { createContext, useReducer } from 'react';
import * as SendBird from 'sendbird';

import { chatReducer } from '../../reducers/chatReducer';

const ChatContext = createContext({
  sendBirdUserObject: {},
});

const ChatProvider = (props) => {
  const [state, dispatch] = useReducer(chatReducer, {
    sendBirdUserObject: '',
  });

  const connectSendBird = async (userId) => {
    try {
      const sb = new SendBird({ appId: process.env.REACT_APP_SENDBIRD_APP_ID });
      return new Promise((resolve) => {
        sb.connect(userId, (user, error) => {
          if (error) return alert(error);
          resolve(sb);
          dispatch({ type: 'CONNECT_SB_USER', payload: sb });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{ sb: state.sendBirdUserObject, connectSendBird }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
