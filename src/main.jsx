import React from 'react';
import ReactDOM from 'react-dom/client';

import store from '../src/redux/store.js'
import {Provider} from 'react-redux'
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
