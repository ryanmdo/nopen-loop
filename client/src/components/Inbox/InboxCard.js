import React, {Component} from 'react';


class InboxCard extends Component{

    constructor(props){
        super(props)
    }

    

    render(){

        //Recieve all the props that are neede
        // let {body} = this.props;

        return(
            <div>
                <p>{this.props.body}</p>
            </div>
        )
    }

}


export default InboxCard;