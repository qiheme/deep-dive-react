import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FunctionForm() {
  // Setting the component's initial state

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    // Updating the input's state
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}></form>
    </>
  );
}
