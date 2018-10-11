import React, {Component} from 'react';

import InboxCapture from './InboxCapture';
import InboxList from './InboxList';




class Inbox extends Component{


    render(){
        return(
            <div className='row'>
                <div className='col-md-6'>
                    <InboxCapture/>
                </div>
                <div className='col-md-6'>
                    <InboxList/>
                </div>
            </div>
        )
    }

}

export default Inbox;