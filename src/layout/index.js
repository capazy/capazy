import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

const Main = (props) => {
  const { children } = props;
  const { user } = useContext(AuthContext);
  const { data } = useContext(UserContext);
  return (
    <div className="">
      <div className="mx-auto ">
        <main>
          {data || user ? <NewNavbar /> : <Navbar />}
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
