import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

// context
import { UserContext } from '../../context/UserContext';
import Alert from '../../components/Alert';
import { ProjectContext } from '../../context/ProjectContext';
import useOutsideClick from '../../utils/useOutsideClik';

const NavbarLoggedIn = () => {
  const { logout, user } = useContext(UserContext);
  const { resetProject } = useContext(ProjectContext);
  const [isOpen, setOpen] = useState(false);
  const [isOpenLogout, setOpenLogout] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen || isOpenLogout) {
      setOpen(false);
      setOpenLogout(false);
    }
  });

  const image =
    user.profilePictureUrl ||
    'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png';

  const links = () => (
    <div
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
        <li className="mx-6 my-2 md:my-0">
          <Link
            to="/search"
            className="block py-1 md:py-1 px-1 align-center no-underline hover:text-black rounded border-transparent text-gray-900 hover:border-brand-blue"
          >
            <i className="fa fa-envelope fa-fw"></i>
            <span className="md:pb-0 text-sm">Search</span>
          </Link>
        </li>
        <li className="mx-6 my-2 md:my-0">
          <Link
            to="/joined-projects"
            className="block py-1 md:py-1 px-1 align-center no-underline hover:text-black rounded border-transparent text-gray-900 hover:border-brand-blue"
          >
            <i className="fa fa-envelope fa-fw"></i>
            <span className="md:pb-0 text-sm">My feed</span>
          </Link>
        </li>
        <li className="mx-6 my-2 md:my-0">
          <Link
            to="/created-projects"
            className="block py-1 md:py-1 px-1 align-center no-underline hover:text-black rounded border-transparent text-gray-900 hover:border-brand-blue"
          >
            <i className="fa fa-envelope fa-fw"></i>
            <span className="md:pb-0 text-sm">Posted projects</span>
          </Link>
        </li>

        <li className="md:hidden mx-6 my-2 md:my-0">
          <Link
            to="/project/create"
            className=" block py-1 md:py-1 align-middle text-grey no-underline hover:text-black border-white hover:border-red"
          >
            <button
              className="btn-square bg-brand-blue text-white"
              onClick={() => {
                resetProject();
                setOpen(false);
              }}
            >
              Post a Project
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div
      className="bg-grey-lightest font-sans leading-normal tracking-normal"
      ref={ref}
    >
      <nav className="bg-white w-full z-10 pin-t shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div className="flex w-1/2 md:w-1/2 pl-2 md:pl-0 my-auto ">
            <Link to="/feed">
              <img
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1588518483/Main/text-blue_lbqwwy.png"
                alt=""
                className="h-12 md:h-14 text-left -ml-2 -mb-2 md:mb-1 "
              />
            </Link>
            <div className="hidden lg:block my-auto">{links()}</div>
          </div>

          <div className="w-1/2 md:w-1/2 pr-0 my-auto">
            <div className="flex relative inline-block float-right">
              <Link
                to="/project/create"
                className="hidden lg:block mr-5 my-auto md:block py-1 md:py-1 align-middle text-grey no-underline hover:text-black border-white hover:border-red"
              >
                <button
                  className="btn-square bg-brand-blue text-white mx-2"
                  onClick={() => resetProject()}
                >
                  Post a Project
                </button>
              </Link>
              <div className="relative text-sm my-auto">
                <button
                  id="userButton"
                  className="flex items-center focus:outline-none mr-3 "
                  onClick={() => setOpenLogout(!isOpenLogout)}
                >
                  <img
                    className="w-8 h-8 rounded-full mr-4 object-cover object-center"
                    src={image}
                    alt=""
                  />
                  <span className="hidden md:inline-block ">
                    Hi, {user.firstName}
                  </span>
                  <svg
                    className="pl-2 h-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                  >
                    <g>
                      <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                    </g>
                  </svg>
                </button>
                {isOpenLogout && (
                  <div className="bg-white rounded shadow-md mt-2 absolute mt-2 pin-t pin-r min-w-full overflow-auto z-30 ">
                    <ul className="list-reset">
                      <li>
                        <button onClick={() => setOpenLogout(!isOpenLogout)}>
                          <Link
                            to={`/profile/${user._id}`}
                            className="px-4 py-2 block text-black hover:bg-grey-light no-underline hover:no-underline"
                          >
                            My account
                          </Link>
                        </button>
                      </li>
                      <li>
                        <Link
                          to="/#"
                          className="px-4 py-2 block text-black hover:bg-grey-light no-underline hover:no-underline"
                        >
                          Notifications
                        </Link>
                      </li>
                      <li>
                        <hr className="border-t mx-2 border-grey-light" />
                      </li>
                      <li>
                        <button
                          onClick={() => logout()}
                          className="px-4 py-2 block text-black hover:bg-grey-light no-underline hover:no-underline"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-teal appearance-none focus:outline-none"
                  onClick={() => setOpen(!isOpen)}
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>{isOpen && links()}</div>
      </nav>
      <Alert />
    </div>
  );
};

export default NavbarLoggedIn;
