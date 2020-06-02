import React, { Fragment } from 'react';

const NoData = (props) => {
  const { text } = props;
  return (
    <Fragment>
      <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
        <span className="h-full w-full text-center flex flex-col items-center justify-center items-center mx-auto">
          <img
            className="mx-auto w-32"
            src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
            alt="no data"
          />
          <span className="text-small text-gray-500">{text}</span>
        </span>
      </section>
    </Fragment>
  );
};

export default NoData;
