import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [animate, setAnimate] = useState(false);

  const toggleAnimate = () => {
    if (animate) {
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            animate
              ? "https://media.giphy.com/media/bkcbX8SqTCXHG/200w.gif"
              : "https://media.giphy.com/media/bkcbX8SqTCXHG/200w_s.gif"
          }
          className="App-logo"
          alt="logo"
        />
        <p>
          Click <code>Animate</code> to bring the gif to life.
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={toggleAnimate}
        >
          Animate
        </button>
      </header>
    </div>
  );
}

export default App;
