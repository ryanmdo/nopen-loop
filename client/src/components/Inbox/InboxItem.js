import React, {Component} from 'react';


class InboxItem extends Component{
    

    render(){

        const buttonStyle = this.props.closeHidden ? {display:'none'} : {};

        return(
                <div className='card bg-transparent'>
                    <div className='card-body'>
                        {this.props.body}

                        <button type='button' className='close' onClick={this.props.removeItem} style={buttonStyle}>
                            <span className='close-button' >
                                &times;
                            </span>
                        </button>

                    </div>
                </div>

        )
    }

}


export default InboxItem;