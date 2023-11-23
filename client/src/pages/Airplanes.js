import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Airplanes.css";
import { toast } from "react-toastify";
import axios from "axios";

const Airplanes = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get1");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteAirplane = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that airplane ?")
    ) {
      axios.delete(`http://localhost:3001/api/remove1/${id}`);
      toast.success("Airplane Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container1">
        <h2 className="heading">Airplane Details Page</h2>
      <Link to="/addPassenger">
        <button className="btn btn-contact">Add Passenger</button>
      </Link>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Arrival Time</th>
            <th style={{ textAlign: "center" }}>Departure Time</th>
            <th style={{ textAlign: "center" }}>Source</th>
            <th style={{ textAlign: "center" }}>Destination</th>
            <th style={{ textAlign: "center" }}>Duration</th>
            <th style={{ textAlign: "center" }}>Tail Number</th>
			<th style={{ textAlign: "center" }}>Airline</th>
			<th style={{ textAlign: "center" }}>Total Miles</th>
      <th style={{ textAlign: "center" }}>AirportId</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item['Arrival Time']}</td>
                <td>{item['Departure Time']}</td>
                <td>{item.Source}</td>
                <td>{item.Destination}</td>
                <td>{item.Duration}</td>
                <td>{item['Tail Number']}</td>
				<td>{item.Airline}</td>
				<td>{item.TotalMiles}</td>
        <td>{item.AirportId}</td>
                <td>
                  <Link to={`/update1/${item.AirlineID}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteAirplane(item.PassengerId)}
                  >
                    Delete
                  </button>
                  <Link to={`/view1/${item['Tail Number']}`}>
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

export default Airplanes