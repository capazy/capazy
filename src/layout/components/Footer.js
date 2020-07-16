import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full text-center border-t border-grey p-4 mt-2">
      <nav className="">
        <Link to="/">
          <span className="inline-block text-gray-800 hover:text-gray-600 mr-4">
            Home
          </span>
        </Link>
        {/* <Link to="/terms">
          <span className="inline-block text-gray-800 hover:text-gray-600 mr-4">
            Terms
          </span>
        </Link> */}
        <Link to="/help">
          <span className="inline-block text-gray-800 hover:text-gray-600 mr-4">
            Support
          </span>
        </Link>
      </nav>
      <div>
        <span>© {new Date().getFullYear()} Capazy</span>
      </div>
    </footer>
  );
};

export default Footer;
