import React, {Component} from 'react';
import './Inbox.css';


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

    handleEnterButton = event => {


    }


    //Needs to be rephrased as submitText
    handleClick = event => {

        console.log('handleClick event EXECUTED with body text: ' + this.state.body)

        //Struggling to properly recieve the data on the server side.
        //It seems as though axios is working, unlike Request, but the full body needs to come through

        axios({
            method: 'POST',
            url: '/api/inbox',
            
            //The concern that I have is whether or not the body text ought to be placed in the headers
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*", //don't know what this is
                body: this.state.body
            }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error){
              console.error(error)
          });

    
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