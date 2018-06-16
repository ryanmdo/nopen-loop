import React, {Component} from 'react';

import InboxCapture from './InboxCapture';
import InboxList from './InboxList';




class Inbox extends Component{


    render(){
        return(
            <div className='row'>
                <div className='col-md-4'>
                    <InboxCapture/>
                </div>
                <div className='col-md-8'>
                    <InboxList/>
                </div>
            </div>
        )
    }

}

export default Inbox;