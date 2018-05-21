import React, {Component} from 'react';
import './Inbox.css'


class InboxCapture extends Component{

    render(){
        return(
            <div className='card'>
                <div id='capture-header' className='card-header'>            
                    <span id='capture-header'>CAPTURE</span>

                    {/* This button ought to be able to do the proper api-calls */}

                    <button id='capture-submit' type="button" className="btn btn-info">Submit</button>
                </div>
                <div className='card-body'>
                    <div className="input-group">
                        <div className="input-group-prepend"></div>
                        
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    }

}


export default InboxCapture;