import React, { useState } from 'react';
import { Modal } from '../../components';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
const FeedCard = ({ project, handleJoin }) => {
  const {
    description,
    title,
    skills,
    vacancies,
    projectPictureUrl,
    creator: { _id, profilePictureUrl, firstName, lastName, companyName },
  } = project;

  const image =
    profilePictureUrl ||
    'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png';
  const [openModal, setOpenModal] = useState();
  return (
    <div className="border border-gray-200 h-auto border-t-0">
      <div className="flex flex-shrink-0 p-4 pb-0 ">
        <Link to={`profile/${_id}`}>
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full object-cover object-center"
                src={image}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium ">
                {firstName} {lastName}{' '}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @{companyName} 16 April
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="pl-16">
        <p className="font-semibold">----> {title}</p>
        <p className="text-base width-auto font-medium flex-shrink pr-4 text-gray-700">
          {description.substr(0, 200)}....
          <br />
          <span className="font-semibold">Skills:</span>
          <span className="text-brand-blue text-sm">
            {' '}
            {skills.map((skill) => `#${skill} `)}
          </span>
          <br />
          <span className="font-semibold">Vacancies:</span>
          <span className="text-brand-blue text-sm">
            {' '}
            {vacancies.map((vacancy) => `#${vacancy.title} `)}
          </span>
        </p>

        {projectPictureUrl && (
          <div className="md:flex-shrink pr-4 pt-3">
            <img
              className="rounded-lg w-full h-64 object-cover object-center"
              src={projectPictureUrl}
              alt="Woman paying for a purchase"
            />
          </div>
        )}
        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center py-2 my-4">
                <div className="flex justify-between items-center flex-row px-2 z-50 ">
                  <p className="flex items-center text-gray-800 ">
                    {/* <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 "></span> */}
                    15 views
                  </p>
                  <button
                    className="bg-transparent text-blue-dark font-semibold  py-1 px-4 border border-blue hover:border-gray-400 rounded mr-2 rounded-lg"
                    onClick={() => setOpenModal(!openModal)}
                  >
                    view more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
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

export default FeedCard;
