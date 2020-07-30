import React from 'react';

const Why = () => {
  return (
    <div>
      <section className="bg-white border-b">
        <div className="container mx-auto flex flex-wrap py-4">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            How it works?
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <span className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Upload your CV
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Or you can also create your resume with us. Remember that you
                  have to be completely fluent in english.
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
                  Get a call from a recruiter
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  You are going to have an English conversation with a
                  proffessional recruiter who help you to be confident to
                  present an interview.
                </p>
              </span>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full z-50"
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1591629941/Main/problem_ne8obd.svg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <span className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Get hired!!
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  We'll talk directly with the company, and if you're selected
                  we'll get back to you.
                  <br />
                  <span className="italic text-sm">
                    (Company hires Capazy. Capazy hires you.)
                  </span>
                </p>
              </span>
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
