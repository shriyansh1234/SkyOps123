// BookingPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./BookingPage.css";

const BookingPage1 = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("")
  const [destinationDetails, setDestinationDetails] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    // Fetch destinations when the component mounts
    axios.get("http://localhost:3001/api/getdestination")
      .then(response => {
        setDestinations(response.data);
      })
      .catch(error => {
        console.error("Error fetching destinations:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  useEffect(() => {
    // Fetch detailed information when the selected destination changes
    if (selectedDestination) {
      axios.get(`http://localhost:3001/api/getdestination/${selectedDestination}`)
        .then(response => {
          setDestinationDetails(response.data);
          
        })
        .catch(error => {
          console.error("Error fetching destination details:", error);
        });
    }
  }, [selectedDestination]);


  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  

return (
  <div className="container2">
      <h2 style={{ fontSize: "30px" }}className="heading">Choose Your Destination</h2>
      <select style={{width:"250px", alignItems:"center" ,fontSize: "18px"}}value={selectedDestination} onChange={(e) => handleDestinationSelect(e.target.value)}>
        <option value="">Select Destination</option>
        {destinations.map((destinationObj) => (
          <option key={destinationObj["List of Destinations"]} value={destinationObj["List of Destinations"]}>
            {destinationObj["List of Destinations"]}
          </option>
        ))}
      </select>
      {selectedDestination && (
        <div>
        <h3 style={{ fontSize: "30px" }}className="heading">Selected Destination: {selectedDestination}</h3>
        {destinationDetails && (
          <div style={{ marginBottom: "20px" }}>
            <h3>Destination Details</h3>
            <table className="table styled-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Field</th>
                  <th style={{ textAlign: "left" }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arrival Time</td>
                  <td>{destinationDetails[0]["Arrival Time"]}</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>{destinationDetails[0]["Departure Time"]}</td>
                </tr>
                <tr>
                  <td>Source</td>
                  <td>{destinationDetails[0]["Source"]}</td>
                </tr>
                <tr>
                  <td>Destination</td>
                  <td>{destinationDetails[0]["Destination"]}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>{destinationDetails[0]["Duration"]}</td>
                </tr>
                <tr>
                  <td>Tail Number</td>
                  <td>{destinationDetails[0]["Tail Number"]}</td>
                </tr>
                <tr>
                  <td>Airline</td>
                  <td>{destinationDetails[0]["Airline"]}</td>
                </tr>
                <tr>
                  <td>Total Miles</td>
                  <td>{destinationDetails[0]["TotalMiles"]}</td>
                </tr>
                <tr>
                  <td>Airport ID</td>
                  <td>{destinationDetails[0]["AirportId"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
        {confirmation ? (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ marginBottom: "20px", fontSize: "18px" }}>Do you want to continue with this booking?</p>
              <Link to={`/BookingPage2?tailNumber=${destinationDetails[0]["Tail Number"]}`}>
                <button className="btn btn-confirm" style={{ margin: "20px", padding: "15px", fontSize: "18px" }}>Continue</button>
              </Link>
              <button className="btn btn-confirm" style={{ margin: "20px", padding: "15px", fontSize: "18px" }} onClick={handleConfirmation}>Go Back</button>
            </div>
          ) : (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ marginBottom: "20px", fontSize: "18px" }}>Review the details and click the button below to go the next step of your booking.</p>
              <button className="btn btn-confirm" style={{ marginTop: "20px", margin: "auto", padding: "15px", fontSize: "18px" }} onClick={handleConfirmation} >
                Passenger Details Page
              </button>
            </div>
          )}
      </div>
    )}
    
  </div>
  );
};

export default BookingPage1;