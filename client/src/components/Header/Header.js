import React, {Component} from 'react';
import './Header.css'


class Header extends Component {



    render(){
        return(
                <header className="container">
                    <span id="header-title">NOPEN-LOOP</span>
                    {/* Be able to make this actually look nice */}
                    <div className="row">

                        <div className='col-md-3'>
                            <a id='header-link' href='/'>Capture</a>
                        </div>

                        <div className='col-md-3'>
                            <a id='header-link' href='/process'>Process</a>
                        </div>

                        <div className='col-md-3'>
                            <a id='header-link' href='/projects'>Projects</a>
                        </div>
                    </div>
                </header>
        );
    }

}




export default Header;