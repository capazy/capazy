import React from 'react';

const Why = () => {
  return (
    <div>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
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
                  Team Work
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Good teamwork helps to build morale in the workplace, which
                  makes workers more productive and ultimately improves profits
                </p>
              </span>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <span className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Problem Solving
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Problem-solving is easier – since people with different skills
                  and knowledge will work together to produce a creative
                  solution
                </p>
              </span>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50"
                src="https://images.unsplash.com/photo-1586527155314-1d25428324ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
                  Reduce the cost allocated to temporary hires due to lack of
                  resources within your team. There is Capacity available
                  within!!
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <img
                className="w-full  z-50"
                src="https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
