import React, { Component } from 'react';

import CoinFace from './CoinFace';
import './CoinFlip.css';

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      headCount: 0,
      tailCount: 0,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
    };
    this.flipHandler = this.flipHandler.bind(this);
  }

  randomFlip = () => Math.floor(Math.random() * 2) + 1;

  flipHandler() {
    const flip = this.randomFlip();

    if (flip === 1) {
      this.setState((prevState) => ({
        ...prevState,
        flips: prevState.flips + 1,
        headCount: prevState.headCount + 1,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
      }));
    } else if (flip === 2) {
      this.setState((prevState) => ({
        ...prevState,
        flips: prevState.flips + 1,
        tailCount: prevState.tailCount + 1,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/440px-2017-D_Roosevelt_dime_reverse_transparent.png',
      }));
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Lets flip a coin!</h1>
        <CoinFace image={this.state.image} />
        <div className="actions">
          <button onClick={this.flipHandler}>Flip Me</button>
          <p>
            Out of {this.state.flips} flips, there have been{' '}
            {this.state.headCount} heads and {this.state.tailCount} tails.
          </p>
        </div>
      </div>
    );
  }
}

export default CoinFlip;
