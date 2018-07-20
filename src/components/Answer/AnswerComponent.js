import React, { Component } from 'react';
import axios from 'axios';

import './Answer.css';

class AnswerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            answers : []
        }
    }

    onAnswerClick() {
        this.setState({
            answers:[]
        })

        this.props.incrementQuestion();

    }


    renderAnswers(term) {
        this.setState({
            answers: term,
         });
    }

    render() {

        if (!this.props.questions[this.props.questionNumber]) {
            return (<div></div>)

        }
        const qid = this.props.questions[this.props.questionNumber].id

        axios.get(`http://localhost:3001/getQuestionAnswers?questionId=${qid}`)
          .then(res => {
              const answers = res.data
            this.renderAnswers(answers)
          });


        if (this.state.answers.length === 0) {
            return(
                <div className='loading-text'>Loading...</div>
            )
        }
        return (
            <div className='answers-container'>
            {this.state.answers.map((ans, i) => {
                return (
                    <div
                        key = {i}
                        className='answer-pill btn btn-default'
                        onClick={()=>this.onAnswerClick()}>
                            {ans.answer_text}
                    </div>
            )
            })}
            </div>
        )
    }
}

export default AnswerComponent
