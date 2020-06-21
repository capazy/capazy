import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { createGroupChannelList, invitedValue } from '../../utils/chat';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const LeftBar = () => {
  const { sb } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  const [channelList, setChannelList] = useState();
  useEffect(() => {
    if (sb) {
      createGroupChannelList(sb, setChannelList);
    }
  }, [sb]);
  if (!sb) return 'Loading.....';
  if (!channelList) return 'Loading.....';
  if (!user) return 'Loading.....';

  return (
    <section className="flex flex-col flex-none overflow-auto w-full hover:w-full bg-gray-100 mt-5">
      {channelList.length === 0 ? (
        <p className="text-color-chat">You don't have conversation yet</p>
      ) : (
        <div className="p-2 flex-1 overflow-y-scroll ">
          {channelList.map((channel) => (
            <div key={channel.url}>
              <Link to={`/chat/${channel.url}`}>
                <div className="flex justify-between items-center p-3 hover:bg-gray-300 rounded-lg relative border-b-2">
                  <div className="w-16 h-16 relative flex ">
                    <img
                      className="shadow-md rounded-full w-full h-full object-cover"
                      src={
                        invitedValue(channel, sb).profileUrl ||
                        'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png'
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex-auto ml-4 mr-6 ">
                    <p className="text-left text-color-chat">
                      {invitedValue(channel, sb).nickname}
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="min-w-0">
                        <p className="truncate text-color-chat">
                          {channel.lastMessage
                            ? channel.lastMessage.message
                            : null}
                        </p>
                      </div>
                      {/* <p className="ml-2 whitespace-no-wrap">Just now</p> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LeftBar;
