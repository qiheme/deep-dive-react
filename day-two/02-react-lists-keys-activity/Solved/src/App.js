import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [forecast, setForecast] = useState({list: []});

  useEffect(() => {
    const queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Philadelphia&units=imperial&appid=0ec949b8b13f2ad5d8653cd84a541bde";
    setTimeout(() => {
      axios.get(queryURL).then((response) => {
        console.log(response);
        setForecast(response.data);
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      {forecast.list.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        forecast.list.map((day, index) => {
          return (
            <div className="card" style={{width: "18rem"}} key={index}>
              <img
                className="card-img-top"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {`${forecast.city.name} weather on ${new Date(day.dt)}`}
                </h5>
                <p class="card-text">{`The weather will be ${day.weather[0].description} and ${day.main.temp} degrees F, but will feel like ${day.main.feels_like} degrees.`}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
