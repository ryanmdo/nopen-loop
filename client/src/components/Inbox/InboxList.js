import React, { Component } from 'react';
import './Inbox.css';

class InboxList extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

// Here, I would have to understand how to grab all the inbox list items from
// MongoDB and then spell them all out

//   componentDidMount() {
//     fetch('/api/customers')
//       .then(res => res.json())
//       .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
//   }

  render() {
    return (
        <div className='card'>

            <div className='card-header'>            
                    Current Inbox
                </div>
                <div className='card-body'>
                    A bunch of inbox cards ought to be displayed here.
                </div>
        </div>
    );
  }
}

export default InboxList;