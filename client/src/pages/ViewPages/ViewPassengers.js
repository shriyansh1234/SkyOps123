import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const ViewPassengers = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios 
    .get(`/api/get/${id}`)
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
          <p>Passenger Detail</p>
        </div>
        <div className="container">
          <strong>PassengerID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>FirstName: </strong>
          <span>{user.FirstName}</span>
          <br />
          <br />
          <strong>Lastname: </strong>
          <span>{user.Lastname}</span>
          <br />
          <br />
          <strong>PhoneNo: </strong>
          <span>{user.PhoneNumber}</span>
          <br />
          <br />
          <strong>PassengerID: </strong>
          <span>{user.PassengerId}</span>
          <br />
          <br />
          <strong>Miles: </strong>
          <span>{user.Miles_on_Passenger}</span>
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

export default ViewPassengers;
