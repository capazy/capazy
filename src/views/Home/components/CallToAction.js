import React from "react";

const CallToAction = () => {
  return (
    <div>
      <section className='container mx-auto text-center py-6 mb-12 bg-gray-100'>
        <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center text-black'>
          Call to Action
        </h1>
        <div className='w-full mb-4'>
          <div className='h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t'></div>
        </div>

        <h3 className='my-4 text-3xl leading-tight'>
          Main Hero Message to sell yourself!
        </h3>

        <button className='btn bg-brand-blue text-white mx-2'>Action!</button>
      </section>
    </div>
  );
};

export default CallToAction;
