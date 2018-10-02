import React, {Component} from 'react';
import './Inbox.css';


// import Request from 'request';

// const axios = require('axios')
import axios from 'axios'

class InboxCapture extends Component{

    state = {

            body:''
    }

    handleInputChange = event => {

        const { value } = event.target;
        

        this.setState({
            body: value
        });

    }

    handleClick = event => {

        console.log('handleClick event EXECUTED with body text: ' + this.state.body)
        

        //Perhaps this Request.post function is not the best and it very problematic
        // Request.post({
        //     url:'localhost:5000/api/inbox',
        //     header: {
        //         body: this.state.body
        //     } 
        // },
        // function(error,httpResponse,body){ 
        //     /* ... */
        //     if(error){
        //         console.error('ERROR')
        //         console.error(error);
        //     }
        //     console.log(body)
        //  })



        //The above attempts to post the data are not working
        //Still struggling to properly recieve the data on the server side.
        //It seems as though axios is working, unlike Request, but the full body needs to come through
        
        
        axios({
            method: 'POST',
            url: '/api/inbox',
            headers: {
              body: this.state.body,
            }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error){
              console.error(error)
          })

        
        


        //Clears out the input body
        this.setState({
            body:''
        });

        
    }

    render(){
        return(
            <div className='card'>
                <div id='capture-header' className='card-header'>            
                    <span id='capture-header'>CAPTURE</span>

                    {/* This button ought to be able to do the proper api-calls */}
                    <a onClick={this.handleClick}>
                        <button id='capture-submit' type="button" className="btn btn-info">Submit
                        </button>
                    </a>
                </div>
                <div className='card-body'>
                    <div className="input-group">
                        <div className="input-group-prepend"></div>
                        
                        <textarea onChange={this.handleInputChange} value={this.state.body} className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    }

}


export default InboxCapture;