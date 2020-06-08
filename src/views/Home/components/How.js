import React from 'react';

const How = () => {
  return (
    <div>
      <section className="bg-gray-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Benefits for the work force
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Holistic view of the entire organization
              </h3>
              <p className="text-gray-600 mb-8">
                Capacity eliminates hierarchy that impairs execution by allowing
                all talent within the organization to freely chose to colaborate
                on a compelling project
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                className="w-full  z-50"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img
                className="w-full  z-50"
                src="https://images.unsplash.com/photo-1519173619974-4d4d0ebfede6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Collabrate globally with your peers
                </h3>
                <p className="text-gray-600 mb-8">
                  Get exposure within your organization by providing meaningful
                  support when capacity is a major constrain; develop
                  relationships and strong ties within the company by mutual
                  colaboration
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
