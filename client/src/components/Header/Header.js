import React, {Component} from 'react';
import './Header.css'

import SidebarToggleButton from '../Sidebar/SidebarToggleButton';


class Header extends Component {




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
                        
                    </nav>
                </header>
        );
    }

}




export default Header;