export const addChannelHandler = (sb, channel, addNewMessage) => {
  const ChannelHandler = new sb.ChannelHandler();
  const channelHandlerID = channel.url;

  ChannelHandler.onMessageReceived = (channel, message) => {
    addNewMessage(message);
  };

  sb.addChannelHandler(channelHandlerID, ChannelHandler);
};
