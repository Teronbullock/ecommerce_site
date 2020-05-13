import React from 'react';
import { Consumer } from '../AppContext';
import './AppBody.scss';

export default () => {
  return (
    <Consumer>
      {() => {
        return (
          <React.Fragment>
            <h1> hello World</h1>;
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};
