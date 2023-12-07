import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const ViewAirplanes = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios 
    .get(`https://localhost:3001/api/get1/${id}`)
    .then((resp) => {
      console.log("API Response:", resp.data);
      setUser(resp.data[0]);
    })
      .catch((error) => console.error("Error fetching data:", error));;
  }, [id]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Airplane Detail</p>
        </div>
        <div className="container">
          <strong>Tail Number: </strong>
          <span>{user['Tail Number']}</span>
          <br />
          <br />
          <strong>Arrival Time: </strong>
          <span>{user['Arrival Time']}</span>
          <br />
          <br />
          <strong>Departure Time: </strong>
          <span>{user['Departure Time']}</span>
          <br />
          <br />
          <strong>Source: </strong>
          <span>{user.Source}</span>
          <br />
          <br />
          <strong>Destination: </strong>
          <span>{user.Destination}</span>
          <br />
          <br />
          <strong>Duration: </strong>
          <span>{user.Duration}</span>
          <br />
          <br />
          <strong>Airline: </strong>
          <span>{user.Airline}</span>
          <br />
          <br />
          <strong>TotalMiles: </strong>
          <span>{user.TotalMiles}</span>
          <br />
          <br />
          <strong>AirportId: </strong>
          <span>{user.AirportId}</span>
          <br />
          <br />
          <Link to="/">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewAirplanes;