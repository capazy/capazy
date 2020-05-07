import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ExamplesNavbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="fixed md:relative w-full bg-white z-50">
      <div className=" sm:flex sm:justify-between sm:items-center  md:my-3 border-b-2">
        <div className="flex items-end justify-between px-4 py-3 sm:p-0">
          <div className="-ml-8">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1588518483/Main/text-blue_lbqwwy.png"
                alt=""
                className="h-12 md:h-16 text-left "
              />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setOpen(isOpen === false ? true : false)}
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
        <div className="md:hidden">
          {isOpen && (
            <div className="px-2 pt-2 pb-4 sm:block sm:flex sm:p-0">
              <Link
                to="/support"
                className="block sm:inline-block px-2 py-1 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
              >
                Support
              </Link>
              <Link
                to="/"
                className="block sm:inline-block px-2 py-1 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
              >
                Sing up
              </Link>
              <button className="btn-rounded">Contact Us</button>
            </div>
          )}
        </div>
        <div className="hidden md:block px-2 pt-2 pb-4 sm:block sm:flex sm:p-0">
          <Link
            to="/support"
            className="block sm:inline-block px-2 py-1 text-gray-900 font-semibold hover:border-gray-800 rounded border-b-2 border-transparent hover:border-indigo-400"
          >
            Support
          </Link>
          <button id="navAction" className="btn bg-brand-blue text-white mx-2">
            Action
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ExamplesNavbar;
