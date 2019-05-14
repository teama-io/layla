import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <Button className="transition-3d-hover btn-lg" onClick={() => this.increment()}>Click Me</Button>
        <p className="text-pink-900">You've pressed the button {this.state.counter} times.</p>
        <ButtonGroup>
          <Button variant="blue">Blue</Button>
          <Button variant="pink">Pink</Button>
          <Button variant="green">Green</Button>
          <Button>Giang test</Button>
        </ButtonGroup>
      </div>
    );
  }
}
