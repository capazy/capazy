export const addChannelHandler = (sb, channel, addNewMessage) => {
  const ChannelHandler = new sb.ChannelHandler();
  const channelHandlerID = channel.url;

  ChannelHandler.onMessageReceived = (channel, message) => {
    let newMessage = {
      _sender: message._sender,
      message: message.message,
    };
    console.log('MESSAGR', message);
    addNewMessage(newMessage);
    // console.log('CHANNELID', channelHandlerID);
  };
  sb.addChannelHandler(channelHandlerID, ChannelHandler);
};
