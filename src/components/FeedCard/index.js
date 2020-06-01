import React, { useState } from 'react';
import { Modal } from '../../components';
import ProjectCard from '../ProjectCard';
const FeedCard = ({
  //   project: { title, description, type, startDate, endDate, vacancies },
  project,
  handleJoin,
}) => {
  const [openModal, setOpenModal] = useState();
  return (
    // <div class="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden my-10">
    //   <div class="px-4 py-2">
    //     <h1 class="text-gray-900 font-bold text-3xl uppercase">NIKE AIR</h1>
    //     <p class="text-gray-600 text-sm mt-1">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
    //       quidem sequi illum facere recusandae voluptatibus
    //     </p>
    //   </div>
    //   <img
    //     class="h-56 w-full object-cover mt-2"
    //     src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //     alt="NIKE AIR"
    //   />
    //   <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
    //     <h1 class="text-gray-200 font-bold text-xl">$129</h1>
    //     <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
    //       Add to card
    //     </button>
    //   </div>
    // </div>
    <div
      className=" bg-white shadow-md rounded-lg overflow-hidden my-2 "
      // style={{ height: '50vh' }}
    >
      <img
        className="w-full h-32 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center px-1 py-1 bg-gray-800">
        <h1 className="mx-3 text-white font-semibold text-lg">
          {project.title}
        </h1>
      </div>
      <div className="py-4 px-4">
        <h1 className="text-md font-semibold text-gray-800">{project.type}</h1>
        <p className="py-2 text-sm text-gray-700 border-b">
          {project.description}
        </p>
        <div className="flex justify-around my-2 py border-b">
          <div className="">
            <h2 className="text-sm font-semibold text-gray-800 leading-none">
              Start Date
            </h2>
            <p className=" text-xs py-2 text-sm text-gray-700">
              {project.startDate.slice(0, 10)}
            </p>
          </div>
          <div className="">
            <h2 className="text-sm font-semibold text-gray-800 leading-none">
              End Date
            </h2>
            <p className="text-xs py-2 text-sm text-gray-700">
              {project.endDate.slice(0, 10)}
            </p>
          </div>
        </div>

        {/* TABLE */}
        <div className=" mx-auto">
          <div className="bg-white rounded my-2 w-full">
            <h1 className="text-md font-semibold text-gray-800">Vacancies</h1>
            <table className="text-left border-collapse table-fixed w-full ">
              <tbody className="w-full">
                {/* <div className="w-full"> */}
                {project.vacancies.map((vacancy) => (
                  <tr key={vacancy._id} className=" ">
                    <td className="border-b border-grey-light w-1/2 px-1 py-2 ">
                      <span className="w-full py-3  ">
                        <p className="text-gray-800 text-sm">{vacancy.title}</p>
                        {vacancy.skills.map((skill, i) => (
                          <p
                            key={skill[i]}
                            className="text-xs text-gray-500 font-medium"
                          >
                            {skill},
                          </p>
                        ))}
                      </span>
                    </td>
                    <td className="w-1/4 py-1 px-0 border-b border-grey-light my-auto mx-auto">
                      <span className="inline-block bg-green-200 px-2 py-0 text-sm rounded-full text-gray-700 mr-2">
                        open
                      </span>
                    </td>
                    {/* <td className="w-1/4 py-1 px-6 border-b border-grey-light">
                      <button
                        onClick={() => handleJoin(vacancy._id)}
                        className="inline-block tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 shadow-sm"
                      >
                        Apply
                      </button>
                    </td> */}
                  </tr>
                ))}
                {/* </div> */}
              </tbody>
            </table>
            <button
              className="btn bg-green-300 w-full mt-3"
              onClick={() => setOpenModal(!openModal)}
            >
              view more
            </button>
            <Modal action={openModal}>
              <div className="mx-2">
                <ProjectCard project={project} handleJoin={handleJoin} />
              </div>
              <button
                className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
                onClick={() => setOpenModal(!openModal)}
              >
                <svg
                  className="fill-current text-white"
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
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
