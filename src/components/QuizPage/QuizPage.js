import React, { Component } from 'react';
import './QuizPage.css'

import QuestionComponent from '../Question/QuestionComponent'
import AnswerComponent from '../Answer/AnswerComponent'

class QuizPage extends Component {


    render() {
        return(
            <div className='quiz-container'>
                <div className='clock'>00:10</div>
                <QuestionComponent/>
                <AnswerComponent/>
            </div>
        )
    }
}

export default QuizPage;
