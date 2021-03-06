export const createGroupChannelList = (sb, setChannelList) => {
  var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = true;
  channelListQuery.order = 'latest_last_message';
  channelListQuery.limit = 15;

  if (channelListQuery.hasNext) {
    channelListQuery.next(function (channelList, error) {
      if (error) {
        return;
      }
      setChannelList(channelList);
    });
  }
};

export const createGroupChannel = (sb, invited, history) => {
  const { _id } = invited;
  var userIds = [sb.currentUser.userId, _id];
  sb.GroupChannel.createChannelWithUserIds(
    userIds,
    true,
    null,
    null,
    null,
    function (groupChannel, error) {
      if (error) {
        return;
      }
      history.push(`/chat/${groupChannel.url}`);
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

export const addChannelHandler = (sb, addNewMessage) => {
  const ChannelHandler = new sb.ChannelHandler();
  let channelHandlerID;
  ChannelHandler.onMessageReceived = (channel, message) => {
    channelHandlerID = message.channelUrl;
    addNewMessage(
      {
        _sender: message._sender,
        message: message.message,
      },
      channel
    );
  };
  sb.addChannelHandler(channelHandlerID, ChannelHandler);
};

export const fetchMessages = async (sb, setConversation, channelURL) => {
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

export const invitedValue = (channel, sb) => {
  return channel.members.find(
    (member) => member.userId !== sb.currentUser.userId
  );
};
