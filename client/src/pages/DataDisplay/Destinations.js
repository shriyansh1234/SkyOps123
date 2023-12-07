// Destinations.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Destinations.css"; // Import a separate CSS file for styling

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations when the component mounts
    axios.get("https://localhost:3001/api/getdestination")
      .then(response => {
        console.log(response.data); // Log the response data to the console
        setDestinations(response.data);
      })
      .catch(error => {
        console.error("Error fetching destinations:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="destinations-container">
      <h2 style={{fontSize: "30px", color: "#136094"}}>Destinations List</h2>
      <ul style={{fontSize: "22px"}} className="destinations-list">
        {destinations.map((destination, index) => (
          <li key={index} className="destination-item">
            {destination["List of Destinations"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
