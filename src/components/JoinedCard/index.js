import React from 'react';

const JoinedCard = ({
  vacancy: {
    title: titleVancancy,
    experience,
    project: { description, type, deadLine, isOpen, published, title },
    selectedUser: { _id: selectedUserId },
  },
  currentUserId,
}) => {
  return (
    <div className="w-full lg:max-w-full lg:flex">
      <div
        className="h-48 w-full lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589362084953-afd4a331706a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
        }}
        title="Woman holding a mug"
      ></div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className=" flex justify-between">
          <div>
            <p className="text-gray-900 font-bold text-xl">{titleVancancy}</p>
            <p className="text-sm text-gray-600 flex items-center mb-2">
              {experience}
            </p>
          </div>
          {!selectedUserId ? (
            <span className="inline-block bg-yellow-300 px-2 p-0 mt-2 mb-8 text-sm rounded-full text-gray-700 mr-2">
              Pending
            </span>
          ) : selectedUserId === currentUserId ? (
            <span className="inline-block bg-green-300 px-2 p-0 mt-2 mb-8 text-sm rounded-full text-gray-700 mr-2">
              Selected
            </span>
          ) : (
            <span className="inline-block bg-red-300 px-2 p-0 mt-2 mb-8 text-sm rounded-full text-gray-700 mr-2">
              Not Selected
            </span>
          )}
        </div>
        <div className="border-t">
          <p className="text-brand-blue font-semibold text-md mt-1">
            Project details
          </p>
          <p className="text-gray-900 font-bold text-base">{title}</p>

          <p className="text-gray-700 text-base">{type}</p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        {/* <div className="flex items-center mt-6">
          <button className="btn-small">View project</button>
        </div> */}
      </div>
    </div>
  );
};

export default JoinedCard;
