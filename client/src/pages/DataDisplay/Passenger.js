import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Passenger.css";
import { toast } from "react-toastify";
import axios from "axios";

const Passenger = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("https://localhost:3001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container2">
        <h2 style={{ fontSize: "30px"}} className="heading">Passenger Details Page</h2>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>FirstName</th>
            <th style={{ textAlign: "center" }}>Lastname</th>
            <th style={{ textAlign: "center" }}>PhoneNo.</th>
            <th style={{ textAlign: "center" }}>PassengerID</th>
            <th style={{ textAlign: "center" }}>Miles</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.FirstName}</td>
                <td>{item.Lastname}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.PassengerId}</td>
                <td>{item.Miles_on_Passenger}</td>
                <td>
                  <Link to={`/view/${item.PassengerId}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Passenger;