import React from 'react';

const Home = () => {
  return (
    <div className="pt-5">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            New generation of companies
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Main Hero Message to sell yourself!
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </p>

          <button className="btn-rounded bg-brand-blue text-white my-6 py-4 px-8 z-0 ">
            Subscribe
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 text-center">
          <img
            className="w-full  z-50"
            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
