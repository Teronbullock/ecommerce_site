import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </BrowserRouter>
  );
};
