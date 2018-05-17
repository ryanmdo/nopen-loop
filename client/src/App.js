import React, { Component } from 'react';
//import './App.css';


//Import stuff for react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './components/Projects/Projects'
import Process from './components/Process/Process'
import Inbox from './components/Inbox/Inbox'
import Header from './components/Header/Header'
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />



        <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Inbox} />
        <Route exact path="/process/" component={Process} />
        <Route exact path="/projects/" component={Projects} />

      </Switch>
    </div>
  </Router>

        {/* This is how I got to make react-router work
        I just need it to connect to the 3 main pages */}


        {/* <Switch> */}
          {/* <Route exact path='/' component={Customers}/> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
