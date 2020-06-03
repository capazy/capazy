import React from 'react';

const SearchCard = ({ project }) => {
  return (
    <div className="rounded overflow-hidden border w-full bg-white h-auto ">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt="profilepic"
            />
          </div>
          <span className="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
        </div>

        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <img
        className="w-full h-20 object-cover object-center"
        src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
        alt=""
      />
      <div className="px-3 pb-2">
        <div className="pt-2">
          <span className="text-md text-gray-500 font-medium">New project</span>
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            {project.description.substr(0, 200)}....
          </div>
        </div>
        {/* <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
          View all 14 comments
        </div> */}
      </div>

      <div className="flex justify-end flex-grow mb-4">
        <div className="w-full ">
          <div className="flex justify-end items-center flex-row px-2 z-50 ">
            {/* <p className="flex items-center text-gray-800 ">15 views</p> */}
            <button className="bg-transparent text-blue-dark font-semibold  py-1 px-4 border border-blue hover:border-gray-400 rounded mr-2 rounded-lg">
              view more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
