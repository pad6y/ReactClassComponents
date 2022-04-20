import React, { Component } from 'react';

import './Dice-component.css';

class Dice extends Component {
  render() {
    return (
      <i
        className={`dice ${this.props.animate && 'animate'} fas fa-dice-${
          this.props.diceNum
        }`}
      />
    );
  }
}

export default Dice;
