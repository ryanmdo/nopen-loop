import React, {Component} from 'react';
import ProjectCard from './ProjectCard'

import './Projects.css'



class ProjectList extends Component {

//How exactly will this component be able to adjust accordingly to the
//UI? How does it become longer and short and still contain Project Cards?  

    render(){
        return(


            <div className='card bg-transparent'>
                <div className='card-header'>
                    <span className='header-title'>PROJECTS LIST
                    </span>

                    <a onClick={this.handleClick}>
                        <button id="button-text" type="button" className="btn btn-info" data-toggle='modal' data-target="#test-modal">NEW PROJECT
                        </button>
                    </a>
                </div>

                <div className='card-body'>
                {/* Placeholder Card */}
                    <ProjectCard projectTitle='Example Project' projectMission='Mission statement goes right here. And what happens when that mission text is rather long and it starts to sound like an entire paragraph? Does it retain its old style?'/>
                </div>


                {/* The entire modal gets stored inside of here */}
                <div className="modal fade" id="test-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-title"> DEFINE NEW PROJECT</span>

                            <button id="button-text" className ='btn btn-info' type="button" data-dismiss="modal">
                                <span aria-hidden='true' className='close-button'>
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='card' id='project-card'>
                                <div className='card-header' id='project-card-header'>
                                    <textarea className='header-title'>
                                        PROJECT TITLE GOES HERE
                                    </textarea>

                                    <textarea className='header-title card-subtitle text-muted'>
                                        project goal goes here
                                    </textarea>
                                </div>

                                <div className='card-body' id='project-card-body'>
                                   <textarea style={{height: '500px'}} className='card-body' >
                                        PROJECT TITLE GOES HERE
                                    </textarea>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                </div>
            </div>
        );
    }




    componentDidMount() {
        console.log('ProjectList componentDidMount EXECUTED')
   //     fetch('/api/customers')
   //       .then(res => res.json())
   //       .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
      }
}


export default ProjectList;