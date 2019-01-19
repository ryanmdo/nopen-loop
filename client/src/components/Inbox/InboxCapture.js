import React, {Component} from 'react';
import './Inbox.css';


import axios from 'axios'

class InboxCapture extends Component{

    state = {
            body:''
    }

    handleInputChange = event => {

        const value = event.target.value;
        //console.log(value)

        this.setState({
            body: value
        });

    }

    handleEnterButton = event => {
        // console.log(event.key)
        if(event.key === 'Enter'){
            
            this.handleClick();

            this.setState({
                body:''
            });
        }

    }


    //Needs to be rephrased as submitText
    handleClick = event => {

        console.log('handleClick event EXECUTED with body text: ' + this.state.body)


        
        axios({
            method: 'POST',
            url: '/api/inbox',
            data: {
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
            <div className='card bg-transparent'>
                <div  className='card-header'>            
                    <span className='header-title'>CAPTURE</span>

                    <a onClick={this.handleClick}>
                        <button id='submit-text' type="button" className="btn btn-info">INPUT
                        </button>
                    </a>
                </div>
                <div className='card-body'>
                    <div className="input-group">
                        <div className="input-group-prepend"></div>
                        
                        <textarea onKeyPress={this.handleEnterButton} onChange={this.handleInputChange} value={this.state.body} className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    }

}


export default InboxCapture;