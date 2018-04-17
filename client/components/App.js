import React, { Component } from 'react';
import '../css/App.css';

import InboxInput from'./Inbox/InboxInput';
import Header from './Header/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome React APP.JS</h1>
        </header>
        <p className="App-intro">

        <Header/>
        <InboxInput/>
        TEST
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
