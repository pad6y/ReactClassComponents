import React, { Component } from 'react';

import './Balls.css';

class Balls extends Component {
  render() {
    return <div className="balls">{this.props.num}</div>;
  }
}

export default Balls;
