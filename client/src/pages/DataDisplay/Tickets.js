import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Tickets.css";
import { toast } from "react-toastify";
import axios from "axios";

const Tickets = () => {
const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("https://localhost:3001/api/get3");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  const deleteTickets = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that ticket ?")
    ) {
      axios.delete(`https://localhost:3001/api/remove3/${id}`);
      toast.success("Ticket Record Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="container4">
        <h2 style={{ fontSize: "30px"}}className="heading">Ticket Details Page</h2>
      <Link to="/addPassenger">
        <button className="btn btn-contact">Add Ticket</button>
      </Link>
      
      <table className="table styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Cost</th>
            <th style={{ textAlign: "center" }}>Ticket ID</th>
            <th style={{ textAlign: "center" }}>Seat Number</th>
			<th style={{ textAlign: "center" }}>Departure Date</th>
			<th style={{ textAlign: "center" }}>Class</th>
            <th style={{ textAlign: "center" }}>Cancels</th>
			<th style={{ textAlign: "center" }}>Booking Date</th>
			<th style={{ textAlign: "center" }}>Cancellation Fee</th>
      <th style={{ textAlign: "center" }}>PassengerID</th>
			<th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.Cost}</td>
                <td>{item.TicketID}</td>
                <td>{item['Seat Number']}</td>
                <td>{item['Departure_Date']}</td>
				<td>{item.Class}</td>
				<td>{item.Cancels}</td>
				<td>{item.BookingDate}</td>
				<td>{item['Cancellation Fee']}</td>
        <td>{item.PassengerID}</td>
                <td>
                  <Link to={`/update3/${item.TicketID}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteTickets(item.TicketId)}
                  >
                    Delete
                  </button>
                  <Link to={`/view3/${item.TicketID}`}>
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

export default Tickets