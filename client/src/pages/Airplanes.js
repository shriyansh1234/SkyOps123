import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Airplanes.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteAirplane = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that airplane ?")
    ) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Airplane Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container">
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
            <th style={{ textAlign: "center" }}>Destination</th>
            <th style={{ textAlign: "center" }}>Duration</th>
            <th style={{ textAlign: "center" }}>Tail Number</th>
			<th style={{ textAlign: "center" }}>Airline ID</th>
			<th style={{ textAlign: "center" }}>Total Miles</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.ArrivalTime}</td>
                <td>{item.DepartureTime}</td>
                <td>{item.Destination}</td>
                <td>{item.Duration}</td>
                <td>{item.TailNumber}</td>
				<td>{item.AirlineID}</td>
				<td>{item.TotalMiles}</td>
                <td>
                  <Link to={`/update/${item.AirlineID}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.PassengerId)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.AirlineID}`}>
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