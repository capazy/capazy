import React, { useState, useRef, Fragment, useEffect } from 'react';
import { ChatLeftBar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { invitedValue } from '../../utils/chat';

const Invited = ({ msg }) => (
  <div className="flex flex-row justify-start">
    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
      <div className="flex items-center group">
        <p className="px-6 py-2 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200 mt-1">
          {msg}
        </p>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
            <path
              d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
          </svg>
        </button>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const You = ({ msg }) => (
  <div className="flex flex-row justify-end">
    <div className="messages text-sm text-white grid grid-flow-row gap-2">
      <div className="flex items-center flex-row-reverse group">
        <p className="px-6 py-2 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md mt-1">
          {msg}
        </p>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
            <path
              d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
          </svg>
        </button>
        <button
          type="button"
          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const Chat = ({
  sb,
  user: { profilePicture },
  conversation: { channel, messages },
  addNewMessage,
}) => {
  const [message, setMessage] = useState('');

  const scrollBottom = useRef(null);

  const scrollToBottom = () => {
    if (scrollBottom.current)
      scrollBottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom);

  const sendMessage = async (message) => {
    const params = await new sb.UserMessageParams();
    params.message = message;
    channel.sendUserMessage(params, function (message, error) {
      if (error) {
        return;
      }
    });
    let newMessage = { _sender: { userId: 'You' }, message: message };
    addNewMessage(newMessage);
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  // if (!channel || channel === '') return 'Loading....';

  console.log('SCROLL', scrollBottom);

  return (
    <div className="h-full w-full flex antialiased text-gray-200 bg-gray-100 overflow-hidden ">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <ChatLeftBar />

          <section className="flex flex-col flex-auto border-l border-gray-400">
            {!channel ? (
              <p className="text-color-chat">Select a conversation</p>
            ) : (
              <Fragment>
                <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                  <div className="flex">
                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src={
                          invitedValue(channel, sb).profileUrl ||
                          'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png'
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-color-chat">
                        {invitedValue(channel, sb).nickname}
                      </p>
                      <p className="text-color-chat text-left">Active 1h ago</p>
                    </div>
                  </div>
                </div>

                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                  {/* <p className="p-4 text-center text-sm text-gray-500">
                    FRI 3:04 PM
                  </p> */}

                  {messages.map((msg, i) => (
                    <div key={i} ref={scrollBottom}>
                      {msg.sender === 'You' ? (
                        <You msg={msg.message} />
                      ) : (
                        <Invited msg={msg.message} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="chat-footer flex-none border-t-2">
                  <div className="flex flex-row items-center p-4">
                    {/* <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                      </svg>
                    </button> */}

                    <div className="relative flex-grow ">
                      <form onSubmit={handleSubmit} className="flex">
                        <div className="w-full">
                          <label>
                            <input
                              className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-400 focus:border-gray-700 bg-white focus:bg-gray-100 focus:outline-none  focus:shadow-md transition duration-300 ease-in text-color-chat "
                              type="text"
                              onChange={(e) => handleChange(e)}
                              value={message}
                              placeholder="Write a message..."
                            />
                            {/* <button type="submit">Send Message</button> */}
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="my-auto flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-7 h-7"
                        >
                          <div className="text-red-600">
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
            <div ref={scrollBottom} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Chat;
