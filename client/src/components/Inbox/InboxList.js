import React, { Component } from 'react';
import './Inbox.css';



import axios from 'axios'

class InboxList extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      captures: []
    };

    //    the function needs to bind to this
    //    this.delta = this.delta.bind(this);

  }

// Here, I would have to understand how to grab all the inbox list items from
// MongoDB and then spell them all out

//Use function to write and update the Captures

  updateCapture(getResponse){
    this.setState({
      captures: getResponse[2].body
    })

  }
  

    componentDidMount() {
     console.log('InboxList componentDidMount EXECUTED')

     //I feel as though I have some async problem

      axios({
        method: 'GET',
        url: '/api/inbox',
       
      }).then(function(response){
        console.log(response.data)
        console.log(response.data.length)

        for(var i=0;i<response.data.length;i++){
          console.log(response.data[i])

          // updateCapture(response.data)

          //Just the setState is causing issues because it doesnt know what this is
          // this.setState({
          //   // captures: response.data.length[i].body
          // })
          // this.state.captures += response.data.length[i].body
        }
      }).catch(function(error){
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

                    <div>
                      {/* <textarea value={this.state.captures} className="form-control"></textarea> */}
                    </div>
                </div>
        </div>
    );
  }
}

export default InboxList;