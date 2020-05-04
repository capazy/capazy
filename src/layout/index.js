import React from 'react';
import PropTypes from 'prop-types';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Main = (props) => {
  const { children } = props;

  return (
    <div className="">
      <div className="mx-auto ">
        <main>
          {<Navbar />}
          <div className="container mx-auto mt-24 md:mt-16">{children}</div>
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
