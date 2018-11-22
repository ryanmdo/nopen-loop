import React, {Component} from 'react';
import './Projects.css';


class ProjectCard extends Component{

    constructor(props){

        super(props);
    };

    render(){
        return(
            <div className='card' id='project-card'>
                <div  className='card-header' id='project-card-header'>            
                    <span className='header-title'>{this.props.projectTitle}</span>
                    <h6 className="goal-text text-muted" style={{margin: '0px'}}>{this.props.projectGoal}</h6>
                </div>
                <div className='card-body' id='project-card-body'>

                    Project Actions goes here.
                    
                </div>
            </div>
        )
    };

}

export default ProjectCard;