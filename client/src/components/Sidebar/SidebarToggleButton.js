import React,{Component} from 'react'


import './Sidebar.css'

class SidebarToggleButton extends Component {

    // constructor(props){
    //     super(props)
    // }

    render(){
        return(

            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
            </button>
        )
    }

    
};


export default SidebarToggleButton;