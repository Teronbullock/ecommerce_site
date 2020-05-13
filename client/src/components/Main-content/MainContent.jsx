import React from 'react';
import './main-content.scss';
import Hero from '../Hero/';

export default () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="main-content">
          <Hero />
        </div>
      </div>
    </React.Fragment>
  );
};
