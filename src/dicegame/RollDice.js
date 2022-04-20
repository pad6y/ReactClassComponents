import React, { Component } from 'react';

import Dice from './Dice-component';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    diceFace: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { num1: 'one', num2: 'one', rolling: false, anime: '' };
    this.rollHandler = this.rollHandler.bind(this);
  }

  rollHandler() {
    const num1 = this.props.diceFace[
      Math.floor(Math.random() * this.props.diceFace.length)
    ];
    const num2 = this.props.diceFace[
      Math.floor(Math.random() * this.props.diceFace.length)
    ];

    this.setState({ num1: num1, num2: num2, rolling: true });

    setTimeout(() => this.setState({ rolling: false }), 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice diceNum={this.state.num1} animate={this.state.rolling} />
          <Dice diceNum={this.state.num2} animate={this.state.rolling} />
        </div>
        <button
          className="btn-dice"
          disabled={this.state.rolling}
          onClick={this.rollHandler}
        >
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
