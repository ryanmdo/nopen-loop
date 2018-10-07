import React, {Component} from 'react';
import './Header.css'

import SidebarToggleButton from '../Sidebar/SidebarToggleButton';


class Header extends Component {



    render(){
        return(
                <header className="">
                    <nav className="header-navigation">
                       
                        {/* Be able to make this actually look nice */}
                        {/* <div className="row"> */}
                            <div className="header-item">
                                <SidebarToggleButton />
                            </div>
                            <div className="header-item header-logo">
                                <h3 id="header-title">NOPEN-LOOP</h3>
                            </div>

                            <div className="header-item header-navigation">
                                <ul>
                                    <li><a id='header-link' href='/'>Capture</a></li>
                                    <li><a id='header-link' href='/process'>Process</a></li>
                                    <li><a id='header-link' href='/projects'>Projects</a></li>
                                </ul>
                            </div>
                        
                        {/* </div> */}
                    </nav>
                </header>
        );
    }

}




export default Header;