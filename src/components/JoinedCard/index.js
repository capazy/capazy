import React, { useState } from 'react';
import Modal from '../Modal';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';

const JoinedCard = ({
  vacancy: {
    title: titleVancancy,
    experience,
    project: {
      description,
      type,
      startDate,
      endDate,
      title,
      creator: { _id: creatorId },
    },
    project,
    selectedUser: { _id: selectedUserId },
  },
  currentUserId,
  handleJoin,
}) => {
  const [openModal, setOpenModal] = useState(false);
  console.log('Projec', project);
  return (
    <div className="w-full lg:max-w-full lg:flex">
      {project.projectPictureUrl && (
        <div
          className="h-48 w-full lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url(${project.projectPictureUrl})`,
          }}
          title="Woman holding a mug"
        ></div>
      )}
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className=" flex justify-between">
          <div>
            <p className="text-gray-900 font-bold text-xl">{titleVancancy}</p>
            <p className="text-sm text-gray-600 flex items-center mb-2">
              {experience}
            </p>
          </div>
          <Link to={`/profile/${creatorId}`}>Creator</Link>
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
          <button onClick={() => setOpenModal(true)}>
            <p className="text-brand-blue font-semibold text-md mt-1">
              Project details
            </p>
          </button>

          <p className="text-gray-900 font-bold text-base">{title}</p>

          <p className="text-gray-700 text-base">{type}</p>
          <p className="text-gray-700 text-base">{description}</p>
          <h2 className="text-md font-semibold text-gray-800">Start Date</h2>
          <p className="py-2 text-sm text-gray-700">{startDate.slice(0, 10)}</p>
          <h2 className="text-md font-semibold text-gray-800">End Date</h2>
          <p className="py-2 text-sm text-gray-700">{endDate.slice(0, 10)}</p>
        </div>
      </div>
      <Modal action={openModal}>
        <div className="mx-2">
          <ProjectCard project={project} handleJoin={handleJoin} />
        </div>
        <button
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-sm z-50 rounded-full bg-white"
          onClick={() => setOpenModal(!openModal)}
        >
          <svg
            className="fill-current text-black bg-white rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </button>
      </Modal>
    </div>
  );
};

export default JoinedCard;
