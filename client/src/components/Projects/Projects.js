import React, {Component} from 'react';


import ProjectList from './ProjectList'

class Projects extends Component{



    render(){
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <ProjectList closeHidden={false}/>
                </div>

            </div>
        )
    }

}

export default Projects;