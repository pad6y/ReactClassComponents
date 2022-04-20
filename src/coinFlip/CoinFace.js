import React, { Component } from 'react';

import './CoinFace.css';

class CoinFace extends Component {
  render() {
    return (
      <div className="coin">
        <img src={this.props.image} alt="coin face" />
      </div>
    );
  }
}
export default CoinFace;
