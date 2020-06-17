import * as SendBird from 'sendbird';

export const connectSB = async (userId, setSendbird) => {
  const sb = new SendBird({ appId: process.env.REACT_APP_SENDBIRD_APP_ID });
  return new Promise((resolve) => {
    sb.connect(userId, (user, error) => {
      if (error) return alert(error);
      resolve(sb);
      setSendbird(sb);
    });
  });
};

export const createGroupChannelList = (sb, setChannels) => {
  var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = true;
  channelListQuery.order = 'latest_last_message';
  channelListQuery.limit = 15;

  if (channelListQuery.hasNext) {
    channelListQuery.next(function (channelList, error) {
      if (error) {
        return;
      }
      setChannels({ channels: channelList });
    });
  }
};

export const createGroupChannel = (sb, invited) => {
  var userIds = [sb.currentUser.userId, invited];
  sb.GroupChannel.createChannelWithUserIds(
    userIds,
    true,
    'NEW_CHANNEL',
    null,
    null,
    function (groupChannel, error) {
      if (error) {
        return;
      }
      console.log(groupChannel);
    }
  );
};

export const transformMessage = (sb, messageObj) => {
  const messageContent = messageObj.message;
  const userName = sb.currentUser.userId;
  const senderName = messageObj._sender.userId;
  if (senderName === userName) {
    return { sender: 'You', message: messageContent };
  }
  return { sender: senderName, message: messageContent };
};

export const getChannel = (sb, channelURL) => {
  return new Promise((resolve) => {
    sb.GroupChannel.getChannel(channelURL, (channel, error) => {
      if (error) return error;
      resolve(channel);
    });
  });
};

export const exitChannel = (curChannel) => {
  return new Promise((resolve) => {
    curChannel.exit((response, error) => {
      if (error) console.log(error);
      resolve();
    });
  });
};

export const getMessages = (channel) => {
  return new Promise((resolve) => {
    let messageListQuery = channel.createPreviousMessageListQuery();
    messageListQuery.limit = 30;
    messageListQuery.reverse = false;
    messageListQuery.load((messageList, error) => {
      if (error) return error;
      resolve(messageList);
    });
  });
};

export const addChannelHandler = (sb, channel, addNewMessage) => {
  const ChannelHandler = new sb.ChannelHandler();
  const channelHandlerID = channel.url;
  ChannelHandler.onMessageReceived = (channel, message) => {
    addNewMessage({
      _sender: message._sender,
      message: message.message,
    });
  };
  sb.addChannelHandler(channelHandlerID, ChannelHandler);
};

export const fetchMessages = async (sb, setConversation) => {
  const channelURL =
    'sendbird_group_channel_104764077_e7507851c0ea2f990bd0c4cdaff3c93c677bb109';
  const channel = await getChannel(sb, channelURL);
  const initialParticipants = await channel.members;
  let prevMessages = await getMessages(channel);
  prevMessages = prevMessages.map((message) => {
    return transformMessage(sb, message);
  });
  await setConversation({
    channel: channel,
    channelName: channel.name,
    messages: prevMessages,
    participants: initialParticipants,
    loading: false,
  });
};
