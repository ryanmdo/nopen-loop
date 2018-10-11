import React, { Component } from 'react';
//import './App.css';


//Import stuff for react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './components/Projects/Projects'
import Process from './components/Process/Process'
import Inbox from './components/Inbox/Inbox'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Backdrop from './components/Sidebar/Backdrop'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      sidebarOpen: false,

    }
  };

  sidebarToggleHandler = () => {
    // Grab the previous state, and flip that and return it as the new state
    this.setState((previousState) => {
      return {sidebarOpen: !previousState.sidebarOpen};
    });
  };

  backdropToggleHandler = () => {
    this.setState({sidebarOpen: false});
  };


  render() {
    let backdrop;

    if(this.state.sidebarOpen){
      backdrop = <Backdrop click={this.backdropToggleHandler}/>;
    }

    return (
      <div className="App" style={{
        height: '100%'
      }}>
          <Header sidebarToggleHandler={this.sidebarToggleHandler}/>
          <Sidebar show={this.state.sidebarOpen}/>
          {backdrop}
          {/* These are now just variables in jsx that are being turned on or off by the clicking.
          When sidebarOpen is true then the Sidebar and Backdrop elements appear */}
          <Router>
        <main style={{
          marginTop: '80px',
        }}>

        {/* Make height 100% for the sidebar drawer */}
            <Switch>
              <Route exact path="/" component={Inbox} />
              <Route exact path="/process/" component={Process} />
              <Route exact path="/projects/" component={Projects} />

            </Switch>
        </main>
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
