import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import "./BookingPage.css"; // Make sure to import your CSS file

const BookingPage2 = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    miles: "",
    tailNumber: id || "",
  });
  const [confirmation, setConfirmation] = useState(false);
  const [tailNumbers, setTailNumbers] = useState([]); // New state for storing distinct tail numbers

  useEffect(() => {
    // Set the selected tail number from the URL parameter
    setFormData((prevState) => ({
      ...prevState,
      tailNumber: id || "",
    }));
  }, [id]);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/post", {
        firstname: formData.firstName,
        lastname: formData.lastName,
        phoneno: formData.phone,
        miles: formData.miles,
        tailnumber: formData.tailNumber,
      })
      .then((response) => {
        // Handle success
        console.log("Booking successful!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error booking:", error);
      });
  };
  


  return (
    <div className="container">
      <h2 className="heading">Passenger Details Page</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (confirmation) {
            handleSubmit();
          } else {
            handleConfirmation();
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="firstName" style={{ display: "block", width: "120px", marginRight: "10px" }}>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: "200px" }} // Adjust the width as needed
          />
        </div>

        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="lastName" style={{ display: "block", width: "120px", marginRight: "10px" }}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: "200px" }} // Adjust the width as needed
          />
        </div>

        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="phone" style={{ display: "block", width: "120px", marginRight: "10px" }}>Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "200px" }} // Adjust the width as needed
          />
        </div>

        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="miles" style={{ display: "block", width: "120px", marginRight: "10px" }}>Miles:</label>
          <input
            type="text"
            id="miles"
            name="miles"
            value={formData.miles}
            onChange={handleChange}
            style={{ width: "200px" }} // Adjust the width as needed
          />
        </div>

        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="tailNumber" style={{ display: "block", width: "120px", marginRight: "10px" }}>Airplane:</label>
          <input
            type="text"
            id="tailNumber"
            name="tailNumber"
            value={formData.tailNumber}
            readOnly  // Make the input field read-only
            style={{ width: "200px" }}
          />
        </div>

        {confirmation ? (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              Do you want to continue with this booking?
            </p>
            <button
              type="submit"
              className="btn btn-confirm"
              style={{
                margin: "20px",
                padding: "15px",
                fontSize: "18px",
              }}
            >
              Confirm Booking
            </button>
            <button
              className="btn btn-confirm"
              style={{
                margin: "20px",
                padding: "15px",
                fontSize: "18px",
              }}
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        ) : (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              Review the details and click the button below to go the next step
              of your booking.
            </p>
            <button
              className="btn btn-confirm"
              style={{
                marginTop: "20px",
                margin: "auto",
                padding: "15px",
                fontSize: "18px",
              }}
              onClick={handleConfirmation}
            >
              Confirm Details
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingPage2;