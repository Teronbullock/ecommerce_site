import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass';
import App from './components/App';

// This is for context look into hooks to see if there is  a better way .

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
