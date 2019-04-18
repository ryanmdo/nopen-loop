import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import TextareaAutoSize from 'react-autosize-textarea';
import axios from 'axios';

// for markdown

import { convertFromRaw, EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';

import './react-draft-wysiwyg.css';


// import MarkdownEditor from './MarkdownEditor'

import './Projects.css';

// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};




class ProjectList extends Component {

    constructor(props){
        super(props);



        this.state = {
            title: '',
            goal: '',
            body: '',
            editorState: EditorState.createEmpty(),
            convertedEditorState: [],
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
    

    handleTabInput = event => {
        console.log(event.target)

        if(event.keyCode === 9){
            event.preventDefault()
            const value = event.target.value
            const start = event.target.selectionStart
            const end =   event.target.selectionEnd;




            event.target.value = value.substring(0, start) + '\t' + value.substring(end)
            event.target.selectionStart = event.target.selectionEnd = start + 1;
        }
        console.log(event.keyCode)
    }


    handleBodyInputChange = event => {
        const value= event.target.value;
        this.setState({
            body: value
        });
    }

    handleSaveButtonPress = event => {
        console.log('SAVE PROJECT pressed');

        // const projectData = {   title: this.state.title,
        //                         goal: this.state.goal,
        //                         body: this.state.body,      }

                            
        // var convertedContentState = convertFromRaw(this.state.editorState);


        axios({
            method: 'POST',
            url: '/api/project',
            data: {
                title: this.state.title,
                goal: this.state.goal,
                body: this.state.editorState,
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error){
              console.error(error)
        });


        this.setState({
            title: '',
            goal: '',
            body:'',
        });
    }


    

    onEditorStateChange = (editorState) => {

        console.log(editorState)


        this.setState({
          editorState,
        });
      };





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

                console.log(response.data)
                this.setState({
                  projectArr:response.data
                });

                console.log(this.state.projectArr)

                this.forceUpdate()
    
            }
    
          }).catch(error => {
            console.error(error)
          });

    }

    render(){


        var listProjects = this.state.projectArr.map((object) => 
        
            <ProjectCard
            key={object._id.toString()}
            projectTitle={object.title}
            projectGoal={object.goal}
            // projectBody={object.body}
            editorState={object.body}
            closeHidden={this.props.closeHidden}
            />
        )

        var { editorState } = this.state;



        return(

            <div className='card bg-transparent'>


                <div className='card-header'>
                    <span className='header-title'>PROJECTS</span>
                        <a onClick={this.handleClick}>
                            <button id="button-text" type="button" className="btn btn-info" data-toggle='modal' data-target="#test-modal">New Project </button>
                        </a>
                </div>


            {/* <ul> */}
                {listProjects}
            {/* </ul> */}






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
                                       


                                        <Editor
        onEditorStateChange={this.onEditorStateChange}
        editorState={editorState}

        // onChange={this.onChange}
        // onContentStateChange={this.onContentStateChange}
        // contentState={contentState}

        toolbar={{
            options: ['inline', 'list',],
            inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough'],
                bold: { className: 'bordered-option-classname' },
                italic: { className: 'bordered-option-classname' },
                underline: { className: 'bordered-option-classname' },
                strikethrough: { className: 'bordered-option-classname' },
                     },
          }}
                                        />

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