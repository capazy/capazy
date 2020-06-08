import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../components';

const links = () => (
  <div className="hidden flex md:block px-2 pt-2 pb-4 sm:block sm:flex sm:p-0">
    <Link
      to="/signup"
      className="block sm:inline-block px-2 py-1 mx-3 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
    >
      Signup
    </Link>
    <Link
      to="/login"
      className="block sm:inline-block px-2 py-1 mx-3 mx-3 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
    >
      Login
    </Link>

    <Link to="/signup">
      <button className="btn-square bg-brand-blue text-white mx-2">
        Post a Project
      </button>
    </Link>
  </div>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className=" w-full z-10 top-0 bg-white border-b-2 top-0 fixed ">
      <div className="container mx-auto sm:flex sm:justify-between sm:items-center max-w-screen-lg mx-auto">
        <div className="flex  items-end justify-between px-4 py-3 sm:p-0">
          <div className="-ml-8">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1588518483/Main/text-blue_lbqwwy.png"
                alt=""
                className="h-12 md:h-16 text-left "
              />
            </Link>
          </div>
          {/* SEARCH */}

          <div className="hidden md:block flex-1 w-full mx-auto max-w-sm content-center py-4 ">
            {/* <div className="relative pull-right pl-4 pr-4 md:pr-0">
              <input
                type="search"
                placeholder="Search"
                className="w-64 bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-brand-blue py-1 px-2 pl-10 appearance-none leading-normal"
              />
              <div
                className="absolute search-icon"
                style={{ top: '0.375rem', left: '1.75rem' }}
              >
                <svg
                  className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </div> */}
          </div>
          {/* FINISH SEARCH */}
          <div className="sm:hidden">
            <button
              onClick={() => setOpen(!isOpen)}
              type="button"
              className="block text-gray-900 hover:text-white focus:text-black pb-1"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 md:hidden">
          {isOpen && (
            <div className="px-2 pt-2 pb-4 sm:block sm:flex sm:p-0">
              <Link
                to="/signup"
                className="block sm:inline-block px-2 py-1 mx-3 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="block sm:inline-block px-2 py-1 mx-3 mx-3 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
              >
                Login
              </Link>
              <Link
                to="/search"
                className="block sm:inline-block px-2 py-1 mx-3 mx-3 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
              >
                Projects
              </Link>
              <Link to="/signup">
                <button className="btn-square bg-brand-blue text-white mx-2">
                  Post a Project
                </button>
              </Link>
            </div>
          )}
        </div>
        {links()}
      </div>
      <Alert />
    </nav>
  );
};

export default Navbar;
