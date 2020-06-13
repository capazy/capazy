import * as SendBird from 'sendbird';

const connectToSendbird = (userId) => {
  const sb = new SendBird({ appId: process.env.REACT_APP_SENDBIRD_APP_ID });
  return new Promise((resolve) => {
    sb.connect(userId, (user, error) => {
      if (error) return alert(error);
      resolve(sb);
    });
  });
};

const createChannel = async (sb) => {
  if (!sb) return;
  let newChannelURL = await (() => {
    const userID = sb.currentUser.userId;
    return new Promise((resolve) => {
      // Array adds the operatorID's to the channel to provide admin privs.
      const channel = sb.OpenChannel.createChannel(
        sb.currentUser.nickname,
        null,
        null,
        ['admin', userID],
        (channel, error) => {
          if (error) return console.log(error);
          resolve(channel.url);
          console.log('CHANNEL_CONNECT', channel);
        }
      );
    });
  })();
  // await enterChannel(newChannelURL);
  // this.props.history.push(`/chat/${newChannelURL}`);
};

export const connectSB = (userId, setSendbird, history) => async () => {
  if (!userId) return;
  let sb = await connectToSendbird(userId);
  let channel = await createChannel(sb);
  setSendbird(sb);
  console.log('SB', sb);
  // history.push('/channels');
};
