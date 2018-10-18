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
                    <ProjectCard />
                </div>


                {/* The entire modal gets stored inside of here */}
                <div className="modal fade" id="test-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
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
                            This is where you ought to be able to make a new project
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