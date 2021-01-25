import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={1000} //1 secs
    />
  );
}

export default LoaderSpinner;