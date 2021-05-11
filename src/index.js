import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// var registerObserver = require('react-perf-devtool')

// var options = {
//   shouldLog: true,
//   port: 8080
// }

// function callback(measures) {
//   console.log('Log: ~> file: index.js ~> line 14 ~> callback ~> measures', measures)
//   // do something with the measures
// }

// registerObserver(options, callback)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

