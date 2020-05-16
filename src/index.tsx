import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBdD0OxYB3cZfT_2Dmek7da5L_nsoXxFTk',
  authDomain: 'chatup-007.firebaseapp.com',
  databaseURL: 'https://chatup-007.firebaseio.com',
  projectId: 'chatup-007',
  storageBucket: 'chatup-007.appspot.com',
  messagingSenderId: '565416909034',
  appId: '1:565416909034:web:1ef3c8928b8d61d9885f93',
  measurementId: 'G-RPQEPQ75QT',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
