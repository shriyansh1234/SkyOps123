import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../DataDisplay/Passenger.css";
import { toast } from "react-toastify";
import axios from "axios";

const ClassDistribution = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/passengerdistribution");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container2">
        <h2 style={{ fontSize: "30px"}} className="heading">Ticket Sold By Airlines Page</h2>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Flight Tail Number</th>
            <th style={{ textAlign: "center" }}>Class</th>
            <th style={{ textAlign: "center" }}>PassengerCount</th>

          
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.FlightTailNumber}</td>
                <td>{item.Class}</td>
                <td>{item.PassengerCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ClassDistribution;