import React, { Component } from 'react';

import BoxForm from './BoxForm';
import BoxItem from './BoxItem';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.createBox = this.createBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  createBox(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] });
  }

  removeBox(id) {
    const remainingBoxes = this.state.boxes.filter((box) => box.id !== id);
    console.log(remainingBoxes);
    this.setState({ boxes: [...remainingBoxes] });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <BoxItem
        height={box.height}
        width={box.width}
        color={box.color}
        id={box.id}
        key={box.id}
        remove={this.removeBox}
      />
    ));

    return (
      <div className="">
        <h1>Box Maker</h1>
        <BoxForm createBox={this.createBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
