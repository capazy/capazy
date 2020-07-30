import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div
      className="pt-5 "
      style={{
        height: '600px',

        // backgroundImage: `url(https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=700)`,
        // backgroundImage: `url(https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=700)`,
        // opacity: "80%",

        // backgroundColor: "black"
      }}
    >
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-gray-800">
            Work Remotely for a Company in North America
          </h1>
          <p className="leading-normal text-2xl mb-8 text-gray-800">
            You only need 3 things: to know english, to have a computer and to
            really want to work!
          </p>
          <Link to="/signup">
            <button className="btn-rounded bg-brand-blue text-white my-6 py-4 px-8 z-0 ">
              Sign Up Now
            </button>
          </Link>
        </div>
        <div className="w-full md:w-3/5 text-center hidden md:block">
          <img
            className="w-full  z-50"
            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
