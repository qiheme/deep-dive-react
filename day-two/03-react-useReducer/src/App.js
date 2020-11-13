import {useReducer} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button
        className="btn btn-danger"
        onClick={() => dispatch({type: "decrement"})}
      >
        -
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({type: "increment"})}
      >
        +
      </button>
    </>
  );
}
