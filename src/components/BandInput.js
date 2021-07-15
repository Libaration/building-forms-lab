// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  };
}

export default BandInput;
