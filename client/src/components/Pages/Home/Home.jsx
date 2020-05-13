import React from 'react';
import Hero from '../../Hero/';
import './home.scss';
import Header from '../../Header';
import MainContent from '../../Main-content/MainContent';

export default props => {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
    </React.Fragment>
  );
};
