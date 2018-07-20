import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


//components
import LandingPage from './components/LandingPage/LandingPage'
import QuizPage from './components/QuizPage/QuizPage'
import ResultsPage from './components/ResultsPage/ResultsPage'

class App extends Component {
  constructor(props){
      super(props);
      let oPlayer = this.getPlayer;
      this.state = {
          view_page: 'landing_page', //landing_page, quiz_page, results_page
          questions: [],
          player:oPlayer,
          categories: [],
          products: [],
      }
  }

  componentDidMount() {
      axios.get(`http://localhost:3001/getProductsByCategory`)
        .then(res => {
            const categories = res.data['categories'];
            const products = res.data['products'];
          // const category = res.data.data.children.map(obj => obj.data);
          this.setState({
              categories: categories,
              products: products,
           });
        });

        axios.get(`http://localhost:3001/getQuestions`)
          .then(res => {
              const questions = res.data;
            this.setState({
                questions: questions,
             });
          });
  }

//*************** API Call Functions *******************//

  getPlayer(){
      //jsonPlayer = somecalltoapi()
      //convert json into Player object (oPlayer)
      let oPlayer = 'dummyplayer';
      return oPlayer;

  }

//*************** Prop Callback Functions *******************//
    startQuiz() {
        console.log('starting quiz?')
        this.setState({
            view_page: 'quiz_page'
        })
    }


  navigateHome(){
      this.setState({
          view_page:'landing_page'
      })
  }

//*************** Render Function *******************//

  render() {
      if (this.state.view_page === 'quiz_page'){
          return (
              <div className='app-container'>
                  <QuizPage
                    questions={this.state.questions}
                    navigateHome={this.navigateHome.bind(this)}/>
              </div>
          )
      } else if (this.state.view_page === 'results_page'){
          return (
              <div className='app-container'>
                  <ResultsPage/>
              </div>
          )
      } else {
          return(
              <div className='app-container'>
                  <LandingPage
                    startQuiz={this.startQuiz.bind(this)}
                    products = {this.state.products}
                    categories={this.state.categories}/>
              </div>
          )
      }

  }
}

export default App;
