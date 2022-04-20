import React, { Component } from 'react';
import Balls from './Balls';

import './Lotto.css';

class Lotto extends Component {
  static defaultProps = {
    title: 'National Lotto',
    maxBalls: 5,
    maxNum: 50,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.genLottoHandler = this.genLottoHandler.bind(this);
  }

  randNumGen() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  genLottoHandler() {
    this.randNumGen();
    // console.log(this.state.nums.length);
    // if (this.state.nums.length > 4) {
    //   this.setState({ title: 'National Lotto' });
    // } else {
    //   this.setState({ title: 'Mini Lotto' });
    // }
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <div className="num-container">
          {this.state.nums.map((n) => (
            <Balls num={n} key={Math.random()} />
          ))}
        </div>
        <div className="center">
          <button className="btn-lotto center" onClick={this.genLottoHandler}>
            Generate
          </button>
        </div>
      </div>
    );
  }
}

export default Lotto;
