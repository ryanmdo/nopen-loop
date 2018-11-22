import React, { Component } from 'react';


import './Inbox.css';
import InboxItem from './InboxItem'


import axios from 'axios';


class InboxList extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      itemArr: [],
    };

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
              itemArr:response.data
            });

        }

      }).catch(error => {
        console.error(error)
      });

   }


   //This is for when you remove those items
   removeItem(id){
    console.log('ITEM BEING REMOVED\nid: '+id)
    let urlId = '/api/inbox/'
    
    axios({
      method:'DELETE',
      url:urlId,
      
      headers : {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        id:id, //don't know what this is
      },



    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.error(error)
    })
    
   }

  render() {

    return (
      <div className='card bg-transparent'>
        <div className='card-header'>            
          <span className='header-title'>INBOX ITEMS</span>
        </div>

        <div className='card-body'>
            {

              this.state.itemArr.map((object) => {
          
              return(
                    <InboxItem 
                        key={object._id.toString()}
                        body={object.body}
                        removeItem={this.removeItem.bind(this, object._id)}
                        closeHidden={this.props.closeHidden} />
                        
                );
              })
            }

        </div>

      </div>
    );
  }
}

export default InboxList;