import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import TextareaAutoSize from 'react-autosize-textarea';



import './Projects.css'



class ProjectList extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            goal: '',
            body: '',
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

    // handleTabInput = event => {
    //     if(event.keyCode === 9){
            
    //         this.state.body += "  ";
    //         console.log(this)
    //         event.preventDefault();
    //     }
    // }

//How exactly will this component be able to adjust accordingly to the
//UI? How does it become longer and short and still contain Project Cards?  

    render(){
        return(

            <div className='card bg-transparent'>



                <div className='card-header'>
                    <span className='header-title'>PROJECTS</span>
                        <a onClick={this.handleClick}>
                            <button id="button-text" type="button" className="btn btn-info" data-toggle='modal' data-target="#test-modal">New Project </button>
                        </a>
                </div>




                {/* */}
                <div className='card-body'>
                    <ProjectCard projectTitle='Example Project' projectMission='Mission statement goes right here. And what happens when that mission text is rather long and it starts to sound like an entire paragraph? Does it retain its old style?'/>
                </div>




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
                                        <TextareaAutoSize style={{minHeight:300}} className='card-body' placeholder="List actions." value={this.state.body} onChange={this.handleBodyInputChange} />
                                    </div>

                                </div>

                                <button id="save-project-button" className ='btn btn-info' type="button">
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




    componentDidMount(){
        console.log('ProjectList componentDidMount EXECUTED')
    }



    
}


export default ProjectList;