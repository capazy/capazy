import React, { useContext, useState, useEffect } from 'react';

// style
import './index.css';

// context
import { UserContext } from '../../context/UserContext';
import { connectSB } from '../../chat/connect';
import { createOpenChannelList } from '../../chat/createOpenChannelList';

const Chat = ({ history }) => {
  const { user } = useContext(UserContext);
  const [sb, setSB] = useState();
  const [channels, setChannels] = useState();

  useEffect(() => {
    if (sb) {
      createOpenChannelList(sb, setChannels);
    }
  }, [sb]);

  const enterChannel = (sb, channelURL) => {
    console.log('CHANNEL_URL', channelURL);
    return new Promise(async (resolve) => {
      sb.OpenChannel.getChannel(channelURL, (channel, error) => {
        if (error) return console.log(error);
        channel.enter((response, error) => {
          if (error) return console.log(error);
          resolve(channel);
          console.log('CHANNEL_URK', channel);
          history.push(`/chat/${channel.url}`);
        });
      });
    });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App mt-6">
      {/* <SendBirdApp
        appId={process.env.REACT_APP_SENDBIRD_APP_ID}
        userId={user._id}
        nickname={`${user.firstName} ${user.lastName}`}
      /> */}
      <button
        className="btn bg-teal-600"
        onClick={connectSB(user._id, setSB, history)}
      >
        Connect
      </button>
      {sb && (
        <button
          className="btn bg-teal-200"
          onClick={() =>
            enterChannel(
              sb,
              'sendbird_open_channel_1347_59e1c79ef2cd0b149e45cde9a60a34efc7f00ae8'
            )
          }
        >
          Create channel
        </button>
      )}
    </div>
  );
};

export default Chat;
