import React, {Component} from 'react';
import './Inbox.css';


import Request from 'superagent';

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

        console.log('handleClick event EXECEUTED with body text: ' + this.state.body)
        
        Request.post({
            url:'localhost:3000/api/inbox',
            header: {
                body: this.state.body
            } 
        },
        function(error,httpResponse,body){ 
            /* ... */
            if(error){
                console.error('ERROR')
                console.error(error);
            }
            console.log(body)
         })
        
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