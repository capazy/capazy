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
    <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
      <div className="header p-4 flex flex-row justify-center items-center flex-none">
        <p className="text-md font-bold hidden md:block group-hover:block text-color-chat">
          Messenger
        </p>
      </div>

      <div className="search-box p-4 flex-none">
        <form>
          <div className="relative">
            <label>
              <input
                className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-white focus:bg-gray-100 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in text-color-chat"
                type="text"
                // value=""
                placeholder="Search Messenger"
              />
              <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#bbb"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>
      {channelList.length === 0 ? (
        "You don't have conversation yet"
      ) : (
        <div className="contacts p-2 flex-1 overflow-y-scroll">
          {channelList.map((channel) => (
            <div key={channel.url}>
              <Link to={`/chat/${channel.url}`}>
                <div className="flex justify-between items-center p-3 hover:bg-gray-300 rounded-lg relative">
                  <div className="w-16 h-16 relative flex flex-shrink-0">
                    <img
                      className="shadow-md rounded-full w-full h-full object-cover"
                      src={
                        invitedValue(channel, sb).profileUrl ||
                        'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png'
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
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
