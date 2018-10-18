import React, {Component} from 'react';


import InboxList from '../Inbox/InboxList'
import ProjectList from '../Projects/ProjectList';

class Process extends Component {


    render(){
        return(
            <div className='row'>

                <div className='col-md-6'>
                    <InboxList/>
                </div>
                <div className='col-md-6'>
                    <ProjectList closeHidden={false}/>
                </div>
            </div>
        )
    }
}

export default Process;