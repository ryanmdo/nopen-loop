import React, {Component} from 'react';
import './Header.css'

import SidebarToggleButton from '../Sidebar/SidebarToggleButton';


class Header extends Component {

    // constructor(props){
    //     super(props)
    // }


    render(){
        return(
                <header className="">
                    <nav className="header-navigation">
                                       
                            <div className="header-item">
                                <SidebarToggleButton click={this.props.sidebarToggleHandler}/>
                            </div>
                            <div className="header-item header-logo">
                                <h3 id="header-title">NOPEN-LOOP</h3>
                            </div>

                            {/* <div className="header-item header-navigation-links">
                                <ul>
                                    <li><a id='header-link' href='/'>Capture</a></li>
                                    <li><a id='header-link' href='/process'>Process</a></li>
                                    <li><a id='header-link' href='/projects'>Projects</a></li>
                                </ul>
                            </div> */}
                        
                    </nav>
                </header>
        );
    }

}




export default Header;