import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';

// context
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

const Main = (props) => {
  const { children } = props;
  const { user } = useContext(AuthContext);
  const { data } = useContext(UserContext);

  console.log('DATA', data);
  console.log('USER', user);

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
