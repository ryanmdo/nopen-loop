import React, {Component} from 'react';
import './Projects.css';


class ProjectCard extends Component{

    render(){
        return(
            <div className='card'>
                <div  className='card-header'>            
                    <span className='header-title'>Project Title</span>
                </div>
                <div className='card-body'>
                    <h5> Project Goals Stated Here</h5>
                    Project Actions
                </div>
            </div>
        )
    }

}

export default ProjectCard;