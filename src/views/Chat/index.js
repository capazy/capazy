import React, { useContext, useState, useEffect } from 'react';

// style
import './index.css';

// context
import { UserContext } from '../../context/UserContext';

// components
import { ChatLayout } from '../../components';
import { ChatContext } from '../../context/ChatContext';

// utils
import {
  transformMessage,
  addChannelHandler,
  fetchMessages,
} from '../../utils/chat';

const Chat = ({ match }) => {
  const { user } = useContext(UserContext);
  const { sb } = useContext(ChatContext);

  const channelURL = match.params.channelURL;
  const [conversation, setConversation] = useState({
    loading: true,
    channel: '',
    messages: [],
    channelName: '',
    participants: [],
  });
  const { channel, participants } = conversation;

  useEffect(() => {
    if (sb) {
      fetchMessages(sb, setConversation, channelURL);
    }
  }, [user, sb, channelURL]);

  const addNewMessage = async (newMessage, channel) => {
    let transformedMessage = await transformMessage(sb, newMessage);
    if (channelURL === channel.url) {
      await setConversation({
        ...conversation,
        channel: channel,
        messages: [...conversation.messages, transformedMessage],
      });
    }
  };

  // channel handler to listen when recieving messages
  if (sb && channel) {
    addChannelHandler(sb, addNewMessage);
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App mt-6 h-auto">
      <ChatLayout
        sb={sb}
        user={user}
        conversation={conversation}
        addNewMessage={addNewMessage}
      />
    </div>
  );
};

export default Chat;
