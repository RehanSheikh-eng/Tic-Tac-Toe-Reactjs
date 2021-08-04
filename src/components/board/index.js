import {React, Component} from 'react';
import Square from '../square';
import '../../index.css'

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="grid">
        <div>{this.renderSquare(0)}</div>
        <div>{this.renderSquare(1)}</div>
        <div>{this.renderSquare(2)}</div>
        <div>{this.renderSquare(3)}</div>
        <div>{this.renderSquare(4)}</div>
        <div>{this.renderSquare(5)}</div>
        <div>{this.renderSquare(6)}</div>
        <div>{this.renderSquare(7)}</div>
        <div>{this.renderSquare(8)}</div>
      </div>
    );
  }
}

export default Board;