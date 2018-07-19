import React, { Component } from 'react';
import './t3-board.css';
import Square from '../square/square'

class T3board extends Component {
    render() {
        return(
            <table className = "t3-table">
                <tbody>
                    <tr>
                        <td onClick = {()=>this.props.onSquareClick(0,0)}>
                            <Square
                                row = {0}
                                col = {0}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(0,1)}>
                            <Square
                                row = {0}
                                col = {1}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(0,2)}>
                            <Square
                                row = {0}
                                col = {2}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td onClick = {()=>this.props.onSquareClick(1,0)}>
                            <Square
                                row = {1}
                                col = {0}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(1,1)}>
                            <Square
                                row = {1}
                                col = {1}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(1,2)}>
                            <Square
                                row = {1}
                                col = {2}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td onClick = {()=>this.props.onSquareClick(2,0)}>
                            <Square
                                row = {2}
                                col = {0}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(2,1)}>
                            <Square
                                row = {2}
                                col = {1}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                        <td onClick = {()=>this.props.onSquareClick(2,2)}>
                            <Square
                                row = {2}
                                col = {2}
                                gameboard = {this.props.gameboard}
                                />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default T3board;
