import React, { useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { ProjectContext } from '../../context/ProjectContext';

// components
import { Modal, ProjectCard } from '../../components';
import ApplyButton from '../ApplyButton';

const VacancyCard = ({ vacancy, handleJoin }) => {
  const { update } = useContext(ProjectContext);
  const [readMore, setReadMore] = useState(false);
  const [openModal, setOpenModal] = useState();

  const {
    title,
    description,
    skills,
    postulatedUsers,
    project: {
      _id: projectId,
      views,
      creator: { _id: creatorId, firstName, lastName },
    },
    project,
  } = vacancy;

  //Apply button => logic in project card
  //Style

  // const image =
  //   profilePictureUrl ||
  //   'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png';

  // const date = new Date(updatedAt).toLocaleDateString('en', {
  //   month: 'long',
  //   day: 'numeric',
  // });

  // const sumOfPostulated = (vacancies) => {
  //   let arr = [];
  //   vacancies.map((vacancy) => arr.push(vacancy.postulatedUsers.length));
  //   var sum = arr.reduce((a, b) => {
  //     return a + b;
  //   }, 0);
  //   return sum;
  // };

  const handleViewMore = () => {
    setOpenModal(!openModal);
    update({
      projectId,
      views: views + 1,
      method: '$set',
    });
  };

  // if (!vacancy) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="inline-block mb-2 w-full border border-gray-200">
      {/* <div className="flex flex-shrink-0 p-4 pb-0 ">
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
                  @{companyName} {date}
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div> */}

      <div className="p-4">
        <h1 className="font-semibold text-xl mb-1">{title}</h1>
        {description.length > 200 && !readMore ? (
          <Fragment>
            <div className="">
              <span className="text-base width-auto font-medium  text-gray-700">
                {parse(description.substr(0, 200))}
              </span>
              <span>
                <button
                  className="text-brand-blue"
                  onClick={() => setReadMore(!readMore)}
                >
                  ...read more
                </button>
              </span>
            </div>
          </Fragment>
        ) : (
          <span className="text-base width-auto font-medium flex-shrink pr-4 text-gray-700 text-justify">
            {parse(description)}{' '}
            <span>
              {description.length > 200 && (
                <button
                  className="text-brand-blue"
                  onClick={() => setReadMore(!readMore)}
                >
                  read less
                </button>
              )}
            </span>
          </span>
        )}
        <div className="border-t-2 my-2">
          <p className="font-semibold text-gray-700 mt-2">
            Skills:
            <span className="text-brand-blue text-sm">
              {' '}
              {skills.map((skill) => `#${skill} `)}
            </span>
          </p>
          <p className="font-semibold text-gray-700">
            Retruiter:
            <span className="text-brand-blue text-md">
              <Link to={`profile/${creatorId}`}>
                {' '}
                {firstName} {lastName}{' '}
              </Link>
            </span>
          </p>
        </div>

        {/* <p className="font-semibold text-gray-700">
          Vacancies ({vacancies.length}):
          <span className="text-brand-blue text-sm">
            {' '}
            {vacancies.map((vacancy) => `#${vacancy.title} `)}
          </span>
        </p> */}

        {/* {projectPictureUrl && (
          <div className="md:flex-shrink pr-4 pt-3">
            <img
              className="rounded-lg w-full h-64  object-cover object-center  overflow-hidden"
              src={projectPictureUrl}
              alt={title}
            />
          </div>
        )} */}
        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center py-2 my-1">
                <div className="flex justify-between items-center flex-row px-2 z-50 text-xs md:text-sm">
                  <div className="flex justify-left">
                    <p className="flex items-center text-gray-800 mr-4">
                      {views} views
                    </p>
                    <p className="flex items-center text-gray-800 ">
                      {postulatedUsers.length} applicants
                    </p>
                  </div>
                  <div className="flex justify-right">
                    <button
                      className=" bg-transparent text-blue-dark font-semibold  py px-2 border border-blue hover:border-gray-400 rounded mr-2 rounded-lg"
                      onClick={handleViewMore}
                    >
                      View more
                    </button>
                    <div>
                      <ApplyButton vacancy={vacancy} />
                      {/* <button
                      className="bg-transparent text-blue-dark font-semibold  py-1 px-4 border border-blue hover:border-gray-400 rounded mr-2 rounded-lg"
                      onClick={handleViewMore}
                      >
                      View more
                    </button> */}
                    </div>
                  </div>
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

export default VacancyCard;
