import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const ViewTickets = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios 
    .get(`https://localhost:3001/api/get3/${id}`)
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
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>TicketID: </strong>
          <span>{user.TicketID}</span>
          <br />
          <br />
          <strong>Arrival Time: </strong>
          <span>{user['Arrival Time']}</span>
          <br />
          <br />
          <strong>Seat Number: </strong>
          <span>{user['Seat Number']}</span>
          <br />
          <br />
          <strong>Departure Date: </strong>
          <span>{user['Departure_Date']}</span>
          <br />
          <br />
          <strong>Class: </strong>
          <span>{user.Class}</span>
          <br />
          <br />
          <strong>Cancels: </strong>
          <span>{user.Cancels}</span>
          <br />
          <br />
          <strong>BookingDate: </strong>
          <span>{user.BookingDate}</span>
          <br />
          <br />
          <strong>Cancellation Fee: </strong>
          <span>{user['Cancellation Fee']}</span>
          <br />
          <br />
          <strong>PassengerID: </strong>
          <span>{user.PassengerID}</span>
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

export default ViewTickets;