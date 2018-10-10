import React, {Component} from 'react';


class InboxItem extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return(

            <div className='card'>
                <div className='card-body'>
                    {this.props.body}

                    <button type='button' className='close' onClick={this.props.removeItem} aria-label='close'>
                        <span aria-hidden='true'>
                            &times;
                        </span>
                    </button>

                </div>
            </div>


        )
    }

}


export default InboxItem;