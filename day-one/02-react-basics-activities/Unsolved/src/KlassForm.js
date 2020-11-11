import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class KlassButton extends React.Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const {name, value} = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    this.setState({
      email: "",
      password: "",
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
