import React,{Component} from 'react'


import './Sidebar.css'

class SidebarToggleButton extends Component {


    render(){
        return(

            <button className="toggle-button">
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
                <div className="toggle-button-line"/>
            </button>
        )
    }

    
};


export default SidebarToggleButton;