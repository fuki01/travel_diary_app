import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
