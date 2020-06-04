import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarLoggedIn from './components/NavbarLoggedIn';

// context
import { UserContext } from '../context/UserContext';

const Main = (props) => {
  const { children } = props;
  const { user } = useContext(UserContext);

  return (
    <div className="">
      <div className="mx-auto ">
        <main className="">
          {user ? <NavbarLoggedIn /> : <Navbar />}
          <div
            className="container max-w-screen-lg mx-auto mt-2 md:mt-2"
            style={{ paddingTop: '3rem' }}
          >
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
