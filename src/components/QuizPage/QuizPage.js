import React, { Component } from 'react';
import './QuizPage.css'

import QuestionComponent from '../Question/QuestionComponent'
import AnswerComponent from '../Answer/AnswerComponent'

class QuizPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            questionNumber : 0,
            activeQuestionId : ''
        }
    }
    incrementQuestion() {
        if (this.state.questionNumber <4 ){
            let q = this.state.questionNumber;
            this.setState({
                questionNumber: q+1
            })
        } else {
            this.props.navigateHome()
        }

    }

    render() {
        if (this.props.question===[]) {
            return(
                <div>Loading</div>
            )
        }
        return(
            <div className='quiz-container'>
                <div className='clock'>00:10</div>
                <QuestionComponent
                    questions={this.props.questions}
                    questionNumber={this.state.questionNumber}/>
                <AnswerComponent
                    questions={this.props.questions}
                    questionNumber={this.state.questionNumber}
                    incrementQuestion = {this.incrementQuestion.bind(this)}/>

            </div>
        )
    }
}

export default QuizPage;
