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
  // When 'distinct' is false
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
