export const createOpenChannelList = (sb, setChannels) => {
  const openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
  openChannelListQuery.next((channels, error) => {
    if (error) return console.log(error);
    setChannels({ channels: channels });
    console.log('Channels', channels);
  });
};
