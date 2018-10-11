import React, {Component} from 'react';


import './Projects.css'


class ProjectList extends Component {

//How exactly will this component be able to adjust accordingly to the
//UI? How does it become longer and short and still contain Project Cards?  

    render(){
        return(


            <div className='card'>
                <div className='card-header'>
                    <span className='projects-header'>PROJECTS LIST
                    </span>
                </div>

                <div className='card-body'>
                PROJECT CARDS GO HERE
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