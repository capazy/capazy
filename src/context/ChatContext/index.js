import React, { createContext, useReducer } from 'react';

import { chatReducer } from '../../reducers/chatReducer';

const ChatContext = createContext({
  loading: true,
  channel: '',
  messages: [],
  channelName: '',
  participants: [],
});

const ChatProvider = (props) => {
  const [state, dispatch] = useReducer(chatReducer, {
    loading: true,
    channel: '',
    messages: [],
    channelName: '',
    participants: [],
  });

  const update = async (values) => {
    try {
      dispatch({ type: 'UPDATE', payload: values });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider value={{ state, update }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
