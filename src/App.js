import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import T3board from './components/t3-board/tboard';
import WinnerSpace from './components/WinnerSpace/WinnerSpace';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          gameStatus : 0, //0 is incomplete 1 is complete
          whoseturn : 'x', //will alternate between x and o
          gameboard : [['','',''],['','',''],['','','']],
      }
  }


  //*************** Functions *******************//
  checkGameStatus() {
      let winnerfound = 0;
      for (let i = 0; i < 3; i++) {
          if ((this.state.gameboard[0][i] !== '' &&
              this.state.gameboard[0][i] === this.state.gameboard[1][i] &&
              this.state.gameboard[0][i] === this.state.gameboard[2][i] )
              ||
              (this.state.gameboard[i][0] !== '' &&
              this.state.gameboard[i][0] === this.state.gameboard[i][1] &&
              this.state.gameboard[i][0] === this.state.gameboard[i][2])
              ||
              (this.state.gameboard[1][1] !== '' &&
              this.state.gameboard[1][1]===this.state.gameboard[2][2] &&
              this.state.gameboard[1][1]===this.state.gameboard[0][0])
              ||
              (this.state.gameboard[1][1] !== '' &&
              this.state.gameboard[1][1]===this.state.gameboard[0][2] &&
              this.state.gameboard[1][1]===this.state.gameboard[2][0])
              )
              {
              winnerfound = 1;
          }
      }
      if (winnerfound === 1) {
          this.setState({
              gameStatus:1,
          })
          return 1;
      } else {
          return 0;
      }
  }


  //*************** Callback Binding Functions *******************//
  onSquareClick(row,col) {
      let g = this.state.gameboard;
      if (g[row][col]==='' && this.state.gameStatus == 0) {
          if (this.state.whoseturn === 'x') {
              g[row][col]= 'x';
              this.setState({
                  gameboard: g
              });
              this.checkGameStatus();
              if (this.checkGameStatus() !== 1) {
                  console.log('game not won yet')
                  this.setState({
                      whoseturn:'o'
                  })
              }
          } else {
              g[row][col]= 'o';
              this.setState({
                  gameboard: g
              });
              if (this.checkGameStatus() !== 1) {
                  console.log('game not won yet')

                  this.setState({
                      whoseturn:'x'
                  })
              }
          }
      }
  }

  //*************** Rendering *******************//
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic-Tac-Toe</h1>
        </header>
            <div className = 'Game-space'>
                <T3board
                    onSquareClick={this.onSquareClick.bind(this)}
                    gameboard = {this.state.gameboard}
                />
            </div>
            <div className = 'winner-space'>
                <WinnerSpace
                    whoseturn= {this.state.whoseturn}
                    gameStatus = {this.state.gameStatus}

                />
            </div>

      </div>
    );
  }
}

export default App;
