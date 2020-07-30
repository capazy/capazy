import React from 'react';

const How = () => {
  return (
    <div>
      <section className="bg-gray-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            We speak in English!
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Capazy has been created to promove latin people who speak
                English
              </h3>
              <p className="text-gray-600 mb-8">
                We eliminate the language barriers that impair skilled-bilingual
                professionals to freely apply for jobs beyond their country of
                residence
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                className="w-full  z-50"
                src="https://res.cloudinary.com/dpnlmwgxh/image/upload/v1596071855/Main/undraw_conference_call_b0w6_ypvz5v.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img
                className="w-full  z-50"
                src="https://res.cloudinary.com/sebashr20/image/upload/v1591629584/ybt9qgsvajmoi7yiqwkr.svg"
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Wholistic view of the job market
                </h3>
                <p className="text-gray-600 mb-8">
                  The future of work is flexible and dinamic. Capazy allows
                  skilled-bilingual professionals to search for opportunities in
                  a global job market. Are you looking for your new challenge?
                  Are you finding difficult to find a job locally? Are you a
                  bilingual professional? Capazy can assist you finding your
                  perfect dream job
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
