import React, { Component } from 'react';


import './Inbox.css';
import InboxItem from './InboxItem'


import axios from 'axios';


class InboxList extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      data: [],
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

        if(response.data.length > 0){
            this.setState({
              data:response.data
            });

        }

      }).catch(error => {
        console.error(error)
      });

   }


   //This is for when you remove those items
   removeItem(id){
    console.log('ITEM BEING REMOVED')
   }

  render() {
    
    //This should make it so that data is this.state.data
    let {data} = this.state;

    const inboxItemList = data.map((object) => {
      // console.log(object);

      return(
        <li key={object._id.toString()} className='list-unstyled'>
          <InboxItem body={object.body} removeItem={this.removeItem}/>
        </li>
      )
    })

    return (
        <div className='card'>

            <div className='card-header'>            
                    Current Inbox
                </div>
                <div className='card-body'>
                  <ul>
                      {inboxItemList}
                  </ul>
                </div>
        </div>
    );
  }
}

export default InboxList;