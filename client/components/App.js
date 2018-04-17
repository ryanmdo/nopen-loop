import React, { Component } from 'react';
import '../css/App.css';

import InboxInput from'./Inbox/InboxInput';
import Header from './Header/Header';



class App extends Component {
  render() {
    return (
      <div className="App">

        

        <Header/>
        <InboxInput/>
      </div>
    );
  }
}

export default App;
