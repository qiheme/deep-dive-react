import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    const queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Philadelphia&units=imperial&appid=0ec949b8b13f2ad5d8653cd84a541bde";
    setTimeout(() => {
      axios.get(queryURL).then((response) => {
        console.log(response);
      });
    }, 2000);
  }, []);

  return <div className="App"></div>;
}

export default App;
