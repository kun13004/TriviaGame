import React, { Component } from 'react';

import './Question.css';

class QuestionComponent extends Component {
    constructor(props){
        super(props);
        const vUrl = 'https://www.youtube.com/embed/cttSSPJ-8p0'
    }

    render() {
        if (this.props.questions.length === 0) {
            return(
                <div>Loading...</div>
            )
        }
        return (
            <div className='question-container'>
                <div className='image-holder'>
                    <img src='images/USAA.png'/>
                </div>
                <div className='question-text-container'>
                    <p>{this.props.questions[this.props.questionNumber].question_text}</p>
                </div>
            </div>
        )
    }
}

export default QuestionComponent
