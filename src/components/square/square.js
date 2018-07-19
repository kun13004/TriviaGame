import React, { Component } from 'react';
import './square.css'

class Square extends Component {
    render() {
        return(
            <div className="square-x-o">
                {this.props.gameboard[this.props.row][this.props.col]}
            </div>
        )
    }
}

export default Square;
