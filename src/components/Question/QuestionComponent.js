import React, { Component } from 'react';

import './Question.css';

class QuestionComponent extends Component {

    render() {
        return (
            <div className='question-container'>
                <div className='image-holder'>
                    <img src='images/USAA.png'/>
                </div>
                <div className='question-text-container'>
                    <p>Heres my question Heres my question Heres my questionHeres my questionHeres my question?</p>
                </div>
            </div>
        )
    }
}

export default QuestionComponent
