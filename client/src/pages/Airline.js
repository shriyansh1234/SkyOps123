import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Airline.css";
import { toast } from "react-toastify";
import axios from "axios";

const Airline = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteAirline = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that airline ?")
    ) {
      axios.delete(`http://localhost:3001/api/remove/${id}`);
      toast.success("Airline Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container">
        <h2 className="heading">Airline Details Page</h2>
      <Link to="/addAirline">
        <button className="btn btn-contact">Add Airline</button>
      </Link>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>AirlineName</th>
            <th style={{ textAlign: "center" }}>AirlineId</th>
            <th style={{ textAlign: "center" }}>AirlineCode</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.AirlineName}</td>
                <td>{item.AirlineId}</td>
                <td>{item.AirlineCode}</td>
                <td>
                  <Link to={`/update/${item.AirlineId}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteAirline(item.AirlineId)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.AirlineId}`}>
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

export default Airline;