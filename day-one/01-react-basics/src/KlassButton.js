import React from "react";

export default class KlassButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: ""};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({date: new Date()});
  }

  handleClick() {
    alert(`This button was created at ${this.state.date}`);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{backgroundColor: this.props.color}}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
