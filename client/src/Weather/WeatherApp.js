import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import MyBookings from "../pages/Bookings/MyBookings";
import { useNavigate } from "react-router-dom";

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
justify-content: space-around;
margin-top: 20px;
`;

const WeatherContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px; /* Add spacing between each container */
background: white; /* Add background color here */
padding: 20px; /* Add padding for better visual appearance */
border-radius: 4px; /* Add border radius for a rounded look */
box-shadow: 0 3px 6px 0 #555; /* Add box shadow for depth */
`;
const Label = styled.span`
  color: black;
  margin-bottom: 10px; /* Add spacing between label and weather info */
  font-size: 18px;
  font-weight: bold;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App({ id, source, destination }) {
const navigate = useNavigate();
  const [weatherSource, updateWeatherSource] = useState(null);
  const [weatherDestination, updateWeatherDestination] = useState(null);


  const handleDeleteBooking = async () => {
    const passengerIdToDelete=  id;

    // Make API call to delete the booking
    const apiUrl = `http://localhost:3001/api/deletebooking/${passengerIdToDelete}`;

    try {
      await Axios.delete(apiUrl);
      console.log("Booking deleted successfully");
      // Handle success, e.g., navigate to another page or update the UI
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
    
  };
  
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

  const isRainy = (weather) => {
    // Check if weather array exists and has elements
    if (weather?.weather && weather.weather.length > 0) {
      const description = weather.weather[0].description.toLowerCase();
      console.log(description);
      return description.includes('mist') || description.includes('thunderstorm')|| description.includes('clear');  // change param to clear for demo
    }
    return false;
  };
  const sendEmail = async () => {
    if (isRainy(weatherSource) || isRainy(weatherDestination)) {
    const emailData = {
      to: 'shriyanshtripathi10@gmail.com', // Replace with the recipient's email
      subject: "Flight Cancelled!",
      text: "This is a message from SkyOps!! This is to alert you that due to bad weather at your travel source or destination. Your flight has been canceled! Your money should be refunded back to your account! Use SkyOps to make a new booking. Thank You, we apologize for the inconvenience.", // Customize this message
    };

    try {
      await Axios.post('http://localhost:3001/send-email', emailData);
      navigate("/");
      console.log('Email sent successfully');
      toast.success("Ticket deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error('Error sending email1:', error);
      
    }
    await handleDeleteBooking();
  } else {
    console.log('Weather is fine. No need to send an email.');
  }
  };
  return (
    <ParentContainer>
    <Container>
      <WeatherContainer>
        <Label>Source Weather</Label>
        {weatherSource && <WeatherComponent weather={weatherSource} city={source} />}
      </WeatherContainer>
      <WeatherContainer>
        <Label>Destination Weather</Label>
        {weatherDestination && <WeatherComponent weather={weatherDestination} city={destination} />}
      </WeatherContainer>
    </Container>
    {isRainy(weatherSource) || isRainy(weatherDestination) ? (
      <>
        <button onClick={sendEmail}>Delete Booking</button>
      </>
    ) : null}
  </ParentContainer>
  
  );
}

export default App;