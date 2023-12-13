import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Airport.css";
import { toast } from "react-toastify";
import axios from "axios";

const Airport = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("/api/get2");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteAirport = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that airport ?")
    ) {
      axios.delete(`/remove2/${id}`);
      toast.success("Airport Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container">
        <h2 style={{ fontSize: "30px"}}className="heading">Airport Details Page</h2>
      <Link to="/addPassenger">
        <button className="btn btn-contact">Add Airport</button>
      </Link>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Airport ID</th>
            <th style={{ textAlign: "center" }}>Airport Name</th>
            <th style={{ textAlign: "center" }}>City</th>
            <th style={{ textAlign: "center" }}>City Code</th>
            <th style={{ textAlign: "center" }}>State or Country</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.airportID}</td>
                <td>{item.airportname}</td>
                <td>{item.city}</td>
                <td>{item.citycode}</td>
                <td>{item.stateorcountry}</td>
                <td>
                  <Link to={`/update2/${item.AirportID}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteAirport(item.AirportId)}
                  >
                    Delete
                  </button>
                  <Link to={`/view2/${item.AirportID}`}>
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

export default Airport;