import React, { useContext, useState, useEffect } from 'react';

// style
import './index.css';

// context
import { UserContext } from '../../context/UserContext';

// components
import { ChatLayout } from '../../components';

// utils
import {
  connectSB,
  transformMessage,
  addChannelHandler,
  fetchMessages,
} from '../../utils/chat';

const Chat = () => {
  const { user } = useContext(UserContext);
  const [sb, setSb] = useState();
  const [conversation, setConversation] = useState({
    loading: true,
    channel: '',
    messages: [],
    channelName: '',
    participants: [],
  });
  const { channel } = conversation;

  useEffect(() => {
    if (user) {
      connectSB(user._id, setSb);
    }
    if (sb) {
      fetchMessages(sb, setConversation);
    }
  }, [user, sb]);

  const addNewMessage = async (newMessage) => {
    let transformedMessage = await transformMessage(sb, newMessage);
    await setConversation({
      ...conversation,
      messages: [...conversation.messages, transformedMessage],
    });
  };

  // channel handler to listen when recieving messages
  if (sb && channel) {
    addChannelHandler(sb, channel, addNewMessage);
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App mt-6">
      {/* <button
        className="btn bg-teal-600"
        onClick={() => connectSB(user._id, setSb)}
      >
        Connect
      </button>
      {sb && (
        <button
          className="btn bg-teal-200"
          onClick={() => createGroupChannel(sb, '5ebc90ccadaf410008df6853')}
        >
          Create GroupChannel
        </button>
      )} */}
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
