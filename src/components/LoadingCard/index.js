import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const LoadingCard = () => {
  return (
    <div className="flex inline-block" style={{ height: '100vh' }}>
      <span className="mb-auto mt-auto mr-auto ml-auto">
        <ScaleLoader size={200} color={'#2E75E1'} />
      </span>
    </div>
  );
};

export default LoadingCard;
