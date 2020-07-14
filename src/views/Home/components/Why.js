import React from 'react';

const Why = () => {
  return (
    <div>
      <section className="bg-white border-b">
        <div className="container mx-auto flex flex-wrap py-4">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            For the Organization
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <span className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Perfect Candidate for the Position
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Access candidates for the position worldwide. Ensure finding
                  the perfect skill set for the position
                </p>
              </span>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50 h-48"
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1591630046/Main/team_work_bnwmsp.svg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <span className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Access the Best Talent Worlwide
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Allow your organzation to become a global enterprise by
                  recruting humman capital worldwide
                </p>
              </span>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50"
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1591629941/Main/problem_ne8obd.svg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="/#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Cost Reduction
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Save all the extra costs associated with a local employee,
                  including but not limited to office space and benefits
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50"
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1591630134/Main/saving_uiy71p.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
