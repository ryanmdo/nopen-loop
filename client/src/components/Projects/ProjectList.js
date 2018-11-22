import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import TextareaAutoSize from 'react-autosize-textarea';
import axios from 'axios';


import './Projects.css';


class ProjectList extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            goal: '',
            body: '',
            projectArr: [],

        }
    }


    handleTitleInputChange = event => {
        const value= event.target.value;
        this.setState({
            title: value
        });
    }


    handleGoalInputChange = event => {
        const value= event.target.value;
        this.setState({
            goal: value
        });
    }


    handleBodyInputChange = event => {
        const value= event.target.value;
        this.setState({
            body: value
        });
    }

    handleSaveButtonPress = event => {
        console.log('SAVE PROJECT pressed');
        
        axios({
            method: 'POST',
            url: '/api/project',
            
            //The concern that I have is whether or not the body text ought to be placed in the headers
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*", //don't know what this is
                title: this.state.title,
                goal: this.state.goal,
            }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error){
              console.error(error)
          });


        this.setState({
            title: '',
            goal: '',
        });
    }



    componentDidMount() {
        console.log('ProjectList componentDidMount EXECUTED')

        axios({
            method: 'GET',
            url: '/api/project'
    
            //This is wen to use an arrow function
            //The previous syntax function(response {}) made it so that this was not this, so this could not setState
          }).then(response => {
            //console.log(response)
            
            if(response.data.length > 0){
                this.setState({
                  projectArr:response.data
                });

                this.forceUpdate()
    
            }
    
          }).catch(error => {
            console.error(error)
          });

    }

    render(){
        return(

            <div className='card bg-transparent'>



                <div className='card-header'>
                    <span className='header-title'>PROJECTS</span>
                        <a onClick={this.handleClick}>
                            <button id="button-text" type="button" className="btn btn-info" data-toggle='modal' data-target="#test-modal">New Project </button>
                        </a>
                </div>




                {

                    this.state.projectArr.map((object) => {

                        return(
                            <ProjectCard 
                                key={object._id.toString()}
                                projectTitle={object.title}
                                projectGoal={object.goal}
                                projectBody=''/>
                                
                        );
                    })
                }




                {/* The entire modal gets stored inside of here */}

                <div className="modal fade" id="test-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    
                    <div className="modal-dialog modal-lg" role="document">
                        
                        <div className="modal-content">
                            
                            <div className="modal-header">
                                <span className="modal-title">CREATE NEW PROJECT</span>
                                <button id="button-text" className ='btn btn-info' type="button" data-dismiss="modal">
                                    <span aria-hidden='true' className='close-button'>
                                        &times;
                                    </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='card' id='project-card'>

                                    <div className='card-header' id='project-card-header'>
                                        <TextareaAutoSize className='header-title' placeholder="Title the project." value={this.state.title} onChange={this.handleTitleInputChange}/>
                                        <TextareaAutoSize className='header-title goal-text text-muted' placeholder="Define the condition for success." value={this.state.goal} onChange={this.handleGoalInputChange} />                                    </div>

                                    <div className='card-body' id='project-card-body'>
                                        <TextareaAutoSize style={{minHeight:200}} className='card-body' placeholder="List actions." value={this.state.body} onChange={this.handleBodyInputChange} />
                                    </div>

                                </div>

                                <button id="save-project-button" className ='btn btn-info' type="button" onClick={this.handleSaveButtonPress} data-dismiss="modal">
                                    <span aria-hidden='true' className=''>
                                        SAVE PROJECT
                                    </span>
                                </button>
                            </div>
                            
                        </div>

                    </div>

                </div>





            </div>
        );
    }   


    
}


export default ProjectList;