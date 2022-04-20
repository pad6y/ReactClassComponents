import React, { Component } from 'react';

class BoxItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="">
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

export default BoxItem;
