import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/animate.css';
import './css/fonts.css';
import './css/form.css';
import './css/invitation.css';
import './css/information.css';
import './css/imageCarousel.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
