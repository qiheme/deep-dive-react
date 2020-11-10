import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FunctionForm() {
  // Setting the component's initial state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const {name, value} = event.target;

    // Updating the input's state
    setFormState(...formState, {
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(
      `Your email is ${formState.email} and your password is ${formState.password}! Don't share your password with anyone!`
    );

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    setFormState({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log(formState);
  }, []);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            value={formState.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            value={formState.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
