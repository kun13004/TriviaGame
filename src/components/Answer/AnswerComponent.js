import React, { Component } from 'react';

import './Answer.css';

class AnswerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dumanswers : ['vanilla', 'chocolate', 'strawberry']
        }
    }

    render() {
        return (
            <div className='answers-container'>
            {this.state.dumanswers.map((ans, i) => {
                return (
                    <div
                    key = {i}
                    className='answer-pill btn btn-default'>
                    {ans}
                </div>
            )
            })}
            </div>
        )
    }
}

export default AnswerComponent
