import React, {Component} from 'react';
import './Sidebar.css'

class Sidebar extends Component{

    // constructor(props){
    //     super(props)
    // }


    render(){

        // We are trying to use htis variable to change the className of the nav class
        let sidebarClass = ["sidebar"];

        if(this.props.show){
            sidebarClass = ["sidebar open"];
        }

        return(

            <nav className={sidebarClass}>
                <ul>
                    <li><a id='sidebar-link' href='/'>CAPTURE</a></li>
                    <li><a id='sidebar-link' href='/process'>PROCESS</a></li>
                    <li><a id='sidebar-link' href='/projects'>PROJECTS</a></li>
                </ul>
            </nav>


        )
    }
}


export default Sidebar;