import React, { Component } from 'react';
import './style.css';


export default class Header extends Component{



    render(){
        return(

            <nav className="navbar navbar-default navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">

                    <a className="navbar-brand" href="#">
                        INBOX
                    </a>

                    <a className="navbar-brand" href="#">
                        PROJECTS
                    </a>
                    </div>
                </div>
            </nav>
                
        );
    }
}