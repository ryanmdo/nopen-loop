import React, {Component} from 'react';
import './Projects.css';



class ProjectCard extends Component{

    constructor(props){

        super(props);
    };

    render(){

        const buttonStyle = this.props.closeHidden ? {display:'none'} : {};

        return(
            <div className='card' id='project-card'>
                <div  className='card-header' id='project-card-header'>            
                    
                    <span className='header-title'>{this.props.projectTitle}</span>
                    
                    <button type='button' className='close' style={buttonStyle}>
                            <span className='close-button' >
                                &times;
                            </span>
                    </button>

                    <h6 className="goal-text text-muted" style={{margin: '0px'}}>{this.props.projectGoal}</h6>

                </div>
                <div className='card-body' id='project-card-body'>

                    {this.props.projectBody}
                    
                    

                </div>
            </div>
        )
    };

}


export default ProjectCard;



