import React, { useState, useEffect } from "react";

function App() {
  let [weatherList, setWeatherList] = useState({});
  let [search, setSeach] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      const url = `https://open-weather13.p.rapidapi.com/city/landon`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "249c2e6112msh0df18d9e32cae59p1efb3ajsnbf8faecd8641",
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherList(result);
      } catch (error) {
        console.error(error);
      }
      // C = (5/9) * (F - 32)
    };
    fetchData();

  },[]);

  console.log(weatherList);

  function searchHandler(event) {
    let fetchData = async () => {
      const url = `https://open-weather13.p.rapidapi.com/city/${search}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "249c2e6112msh0df18d9e32cae59p1efb3ajsnbf8faecd8641",
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherList(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // C = (5/9) * (F - 32)
  }

  return weatherList.main ? (
    <>
      <div className="container">
        <div className="weather-wrapper">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search City Here"
              value={search}
              onChange={(e) => setSeach(e.target.value)}
            />
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
              alt="search--v1"
              onClick={searchHandler}
            />
          </div>
          <div className="weather-body">
            <div className="temp-wrapper">
              <div className="temp">
                {weatherList.main.temp}
                <sup>o</sup>
              </div>
              <div className="min-max">
                <p>
                  MIN : {weatherList.main.temp_min}
                  <sup>o</sup>
                </p>
                <p>
                  MAX : {weatherList.main.temp_max}
                  <sup>o</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Wait</h1>
  );
}

export default App;
