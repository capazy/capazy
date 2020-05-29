import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const LoadingCard = () => {
  return (
    <div className="text-center mt-10" style={{ height: '80vh' }}>
      <ScaleLoader size={200} color={'#2E75E1'} />
    </div>
  );
};

export default LoadingCard;
