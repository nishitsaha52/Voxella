import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={`/pre.gif`} alt="Loading Logo" className="preloader-logo" />
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
