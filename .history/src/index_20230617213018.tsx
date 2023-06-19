import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
    rel="stylesheet"
/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
