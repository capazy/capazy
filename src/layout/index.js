import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';

// context
import { AuthContext } from '../context/AuthContext';

const Main = (props) => {
  const { children } = props;
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div className="mx-auto ">
        <main>
          {user ? <NewNavbar /> : <Navbar />}
          <div className="container mx-auto mt-2 md:mt-2">{children}</div>
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
