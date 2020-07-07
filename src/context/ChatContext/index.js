import React, { createContext, useReducer } from 'react';
import * as SendBird from 'sendbird';

import { chatReducer } from '../../reducers/chatReducer';

const ChatContext = createContext({
  sendBirdUserObject: {},
  isConnected: false,
});

const ChatProvider = (props) => {
  const [state, dispatch] = useReducer(chatReducer, {
    sendBirdUserObject: '',
    isConnected: false,
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

  const updateSbProfile = async (sb, nickname, profileUrl) => {
    return new Promise((resolve) => {
      sb.updateCurrentUserInfo(nickname, profileUrl, function (
        response,
        error
      ) {
        if (error) {
          return;
        }
      });
    });
  };

  return (
    <ChatContext.Provider
      value={{
        sb: state.sendBirdUserObject,
        connectSendBird,
        updateSbProfile,
        sbUser: state.sendBirdUserObject.currentUser,
        isConnected: state.isConnected,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
