import React, {Component} from 'react';

import './Sidebar.css'

class Backdrop extends Component {

    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="backdrop" onClick={this.props.click}>
                
                
            </div>
        )
    }
}


export default Backdrop;