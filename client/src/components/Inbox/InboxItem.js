import React, {Component} from 'react';


class InboxItem extends Component{

    render(){
        return(
            <li className='list-unstyled'>
                <div className='card bg-transparent'>
                    <div className='card-body text-white'>
                        {this.props.body}

                        <button type='button' className='close' onClick={this.props.removeItem} aria-label='close'>
                            <span aria-hidden='true' className='close-button'>
                                &times;
                            </span>
                        </button>

                    </div>
                </div>
            </li>


        )
    }

}


export default InboxItem;