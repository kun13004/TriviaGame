import React, { Component } from 'react';
import './LandingPage.css'
import ProductCategoryComponent from '../ProductCategory/ProductCategoryComponent'

class LandingPage extends Component {


    startQuiz() {
        this.props.startQuiz()
    }

    scrollToProducts() {
// TODO make scrolling smooth.
        var element_to_scroll_to = document.getElementById('products-info-container');
        element_to_scroll_to.scrollIntoView();
    }

    render() {
        return(
            <div>
                <div className='landing-page-container'>
                    <div className='welcome-title'>
                        <h1>Product Trivia</h1>
                        <h2>Learn Products. Earn Points</h2>
                    </div>
                    <div className='landing-action-buttons'>
                        <div
                            id='btn-learn-products'
                            className='btn btn-default'
                            onClick = {() =>this.scrollToProducts()}>
                            Learn Products
                        </div>
                        <div onClick={() => this.startQuiz()} id='btn-start-quiz' className='btn btn-primary'>
                            Start Quiz
                        </div>
                    </div>
                    <div className='quiz_helper'>
                        <ul>
                             <li>Each question has a 15 second time limit.</li>
                             <li>Once you select an answer, you cannot change the answer, or go back to the question.</li>
                             <li>After selection, your answer will turn green for CORRECT or red for INCORRECT.</li>
                             <li>Your score, the correct answers, and resource links will appear at the end of the quiz.</li>
                        </ul>
                    </div>
                </div>
                <div id='products-info-container' className='products-info-container'>
                    <ProductCategoryComponent
                    categories = {this.props.categories}
                    products = {this.props.products}/>
                </div>
            </div>
        )
    }
}

export default LandingPage;
