import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./BookingPage.css";

const UpdateBooking = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookingInfo, setBookingInfo] = useState({
    FirstName: "",
    Lastname: "",
    PhoneNumber: "",
    Miles_on_Passenger: "",
    Class: "",
    SeatNumber: "",
    TicketID: id, 
    TailNumber: "",
  });

  useEffect(() => {
    // Fetch the current booking information based on the ID
    const apiUrl = `httpss://localhost:3001/api/getmyticket/${id}`;

    axios.get(apiUrl)
      .then((response) => {
        setBookingInfo(response.data[0]);
      })
      .catch((error) => {
        console.error("Error retrieving booking information:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const handleUpdate = () => {
    // Make API call to update the booking information
    const apiUrl = `http://localhost:3001/api/updatebooking/${id}`;
    toast.success("Ticket updated successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    axios.put(apiUrl, bookingInfo)
    
      .then((response) => {
        navigate("/");
        // Handle success, e.g., show a success message or navigate to another page
        console.log("Booking updated successfully", response);
        // navigate("/mybookings"); // Assuming you have a route for the MyBookings component
      })
      .catch((error) => {
        console.error("Error updating booking:", error);
      });
  };

  return (
    <div className="container2">
      <h2 style={{ fontSize: "30px" }} className="heading">
        Update Booking
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor="FirstName" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              First Name:
              <input
                type="text"
                name="FirstName"
                value={bookingInfo?.FirstName || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
      </div>

            <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor= "Lastname" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              Last Name:
              <input
                type="text"
                name="Lastname"
                value={bookingInfo?.Lastname || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
            </div>  
      <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor= "PhoneNumber" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              Phone Number:
              <input
                type="text"
                name="PhoneNumber"
                value={bookingInfo?.PhoneNumber || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
            </div>
      <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor = "Miles_on_Passenger" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              Miles on Passenger:
              <input
                type="text"
                name="Miles_on_Passenger"
                value={bookingInfo?.Miles_on_Passenger || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
            </div>
      <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor = "Class" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              Class:
              <input
                type="text"
                name="Class"
                value={bookingInfo?.Class || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
            </div>
            <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <label htmlFor = "SeatNumber" style={{ display: "block", width: "120px", marginRight: "10px" }}>
              Seat Number:
              <input
                type="text"
                name="SeatNumber"
                value={bookingInfo?.SeatNumber || ""}
                onChange={handleInputChange}
                style={{ width: "200px" }}
              />
            </label>
            </div>
        <button className="btn btn-confirm" type="submit">
          Update Booking
        </button>
      </form>
    </div>
  );
};

export default UpdateBooking;
