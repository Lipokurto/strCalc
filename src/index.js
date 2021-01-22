import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import _state from './redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App appState={_state}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
