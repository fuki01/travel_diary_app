import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './component/Main';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
