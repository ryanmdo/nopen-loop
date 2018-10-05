import React, { Component } from 'react';
import './Inbox.css';


import InboxCard from './InboxCard';


import axios from 'axios';


class InboxList extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      body: '',
      inboxCards: []
    };

    //    the function needs to bind to this
    //    this.delta = this.delta.bind(this);

  }

// Here, I would have to understand how to grab all the inbox list items from
// MongoDB and then spell them all out
  

    componentDidMount() {
     console.log('InboxList componentDidMount EXECUTED')

     //I feel as though I have some async problem
      axios({
        method: 'GET',
        url: '/api/inbox'

        //This is wen to use an arrow function
        //The previous syntax function(response {}) made it so that this was not this, so this could not setState
      }).then(response => {
        console.log(response.data.length)

        if(response.data.length > 0){

          for(var i=0;i<response.data.length;i++){
            
            console.log(response.data[i])

            this.setState({
              body:response.data[0].body
            })
            //Just the setState is causing issues because it doesnt know what this is
            // this.setState({
            //   // captures: response.data.length[i].body
            // })
            // this.state.captures += response.data.length[i].body
          }

        }

      }).catch(error => {
        console.error(error)
      });

   }

  render() {
    return (
        <div className='card'>

            <div className='card-header'>            
                    Current Inbox
                </div>
                <div className='card-body'>
                    A bunch of inbox cards ought to be displayed here.
                    
                    <InboxCard body={this.state.body}/>
                    <div>
                      {/* <textarea value={this.state.captures} className="form-control"></textarea> */}
                    </div>
                </div>
        </div>
    );
  }
}

export default InboxList;