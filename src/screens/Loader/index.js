import React from 'react';
import './Loader.css';

const subHeading = 'Botfather\'s Profile';

function Loader() {
  return (
    <div id="hideMe">
      <h1 className="loading-text">Loading</h1>
      <h2 className="loading-text-2">{subHeading}</h2>
    </div>
  );
}

export default Loader;
