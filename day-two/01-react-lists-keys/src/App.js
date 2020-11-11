import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const queryURL =
      "https://api.giphy.com/v1/gifs/trending?api_key=vHQDjSkj9UkPscONU8NsiP549feFmAIX";
    setTimeout(() => {
      axios.get(queryURL).then((response) => {
        console.log(response);
        setGifs(response.data.data);
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      {gifs.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        gifs.map((gif, index) => {
          return (
            <div className="card" style={{width: "18rem"}} key={index}>
              <img
                className="card-img-top"
                src={gif.images.original.url}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{gif.title}</h5>
                <a href={gif.url} className="btn btn-primary">
                  Visit Gif
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
