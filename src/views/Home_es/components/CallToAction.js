import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div>
      <section className="container mx-auto text-center py-6 mb-12 bg-gray-100">
        <h1 className="w-full mt-2 text-5xl font-bold leading-tight text-center text-black">
          Join Now!
        </h1>
        <h3 className="my-6 text-3xl leading-tight">
          Be the hero to the other team
        </h3>
        <Link to="/signup">
          <button className="btn bg-brand-blue text-white mx-2">Signup</button>
        </Link>
      </section>
    </div>
  );
};

export default CallToAction;
