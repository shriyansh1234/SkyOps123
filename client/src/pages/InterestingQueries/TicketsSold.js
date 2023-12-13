import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../DataDisplay/Passenger.css"
import { toast } from "react-toastify";
import axios from "axios";

const TicketsSold = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("/api/ticketssold");
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
            <th style={{ textAlign: "center" }}>Airline</th>
            <th style={{ textAlign: "center" }}>Tickets Sold</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.Airline}</td>
                <td>{item.TotalTicketsSold}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TicketsSold;