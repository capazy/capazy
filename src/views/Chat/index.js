import React, { useContext, useState, useEffect } from 'react';

// style
import './index.css';

// context
import { UserContext } from '../../context/UserContext';

import {
  connectSB,
  createGroupChannel,
  createGroupChannelList,
} from '../../chat';
import { ChatLayout } from '../../components';
import { getChannel, getMessages, exitChannel } from '../../chat/utils/helpers';
import { addChannelHandler } from '../../chat/utils/channelHandler';

const Chat = () => {
  const { user } = useContext(UserContext);
  const [sb, setSB] = useState();
  const [channels, setChannels] = useState();

  //conversationState
  const [conversation, setConversation] = useState({
    loading: true,
    channel: '',
    messages: [],
    channelName: '',
    participants: [],
  });

  console.log('SendBird', sb);
  useEffect(() => {
    if (sb) {
      createGroupChannelList(sb, setChannels);
      //messages
      messages(sb);
    }
  }, [sb, user]);

  const transformMessage = (messageObj) => {
    const messageContent = messageObj.message;
    const userName = sb.currentUser.userId;
    const senderName = messageObj._sender.userId;
    // This check is needed when loading previous messages,
    // as they won't be tagged with "You" for the senderName.
    if (senderName === userName) {
      return { sender: 'You', message: messageContent };
    }
    return { sender: senderName, message: messageContent };
  };

  const messages = async (sb) => {
    const channelURL =
      'sendbird_group_channel_103282792_b092a9839bbe959cab3b2d279496bf149cd024be';
    const channel = await getChannel(sb, channelURL);
    let initialParticipants = await channel.members;
    let prevMessages = await getMessages(channel);
    prevMessages = prevMessages.map((message) => {
      return transformMessage(message);
    });
    // window.addEventListener('beforeunload', onUnload);
    await setConversation({
      channel: channel,
      channelName: channel.name,
      messages: prevMessages,
      participants: initialParticipants,
      loading: false,
    });
    addChannelHandler(sb, channel, addNewMessage);
  };
  console.log('conversation', conversation);

  const addNewMessage = (newMessage) => {
    let transformedMessage = transformMessage(newMessage);
    setConversation({
      ...conversation,
      messages: [...conversation.messages, transformedMessage],
    });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App mt-6">
      <button className="btn bg-teal-600" onClick={connectSB(user._id, setSB)}>
        Connect
      </button>
      {sb && (
        <button
          className="btn bg-teal-200"
          onClick={() => createGroupChannel(sb, '5ebdeb3ef9e3190008c40907')}
        >
          Create GroupChannel
        </button>
      )}
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
