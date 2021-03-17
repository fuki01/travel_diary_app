import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Layout/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
