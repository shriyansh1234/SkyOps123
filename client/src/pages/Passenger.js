import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Passenger.css";
import { toast } from "react-toastify";
import axios from "axios";

const Passenger = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      axios.delete(`http://localhost:3001/api/remove/${id}`);
      toast.success("Passenger Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container2">
        <h2 className="heading">Passenger Details Page</h2>
      <Link to="/addPassenger">
        <button className="btn btn-contact">Add Passenger</button>
      </Link>
      
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
                  <Link to={`/update/${item.PassengerId}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.PassengerId)}
                  >
                    Delete
                  </button>
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