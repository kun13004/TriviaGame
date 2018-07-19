import React, { Component } from 'react';
import './WinnerSpace.css'

class WinnerSpace extends Component {
    render() {
        if (this.props.gameStatus === 1) {
            return(
                <div className='winner-text'>
                    {this.props.whoseturn} Wins!
                </div>
            )
        } else {
            return(<div></div>)
        }
    }
}

export default WinnerSpace
