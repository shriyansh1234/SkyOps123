import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
// import icons from "../Weather/icons";
import sunny from "../Weather/icons/sunny.svg";
import night from "../Weather/icons/night.svg";
import day from "../Weather/icons/day.svg";
import cloudynight from "../Weather/icons/cloudy-night.svg";
import cloudy from "../Weather/icons/cloudy.svg";
import perfectday from "../Weather/icons/perfect-day.svg";
import rain from "../Weather/icons/rain.svg";
import rainnight from "../Weather/icons/rain-night.svg";
import storm from "../Weather/icons/storm.svg";


export const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudynight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectday,
  "04n": cloudynight,
  "09d": rain,
  "09n": rainnight,
  "10d": rain,
  "10n": rainnight,
  "11d": storm,
  "11n": storm,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App({ source, destination }) {
  const [weatherSource, updateWeatherSource] = useState(null);
  const [weatherDestination, updateWeatherDestination] = useState(null);

  useEffect(() => {
    // Fetch weather for source
    fetchWeather(source, updateWeatherSource);

    // Fetch weather for destination
    fetchWeather(destination, updateWeatherDestination);
  }, [source, destination]);

  const fetchWeather = async (city, updateWeather) => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d65e4e173646556b67e871b69e4d4a5`
      );
      updateWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <Container>
      <AppLabel>Weather Information</AppLabel>
      {weatherSource && <WeatherComponent weather={weatherSource} city={source} />}
      {weatherDestination && <WeatherComponent weather={weatherDestination} city={destination} />}
    </Container>
  );
}

export default App;