import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyA93VqM4i_OzTlKrAwp6pVOKD1iL0nEiFo",
    authDomain: "nopen-loop.firebaseapp.com",
    databaseURL: "https://nopen-loop.firebaseio.com",
    projectId: "nopen-loop",
    storageBucket: "nopen-loop.appspot.com",
    messagingSenderId: "1065193579334"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
