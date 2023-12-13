import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./BookingPage.css"; // Make sure to import your CSS file
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";

const BookingPage3 = () => {
    
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departureDate: new Date(),
    seatNumber: "",
    classType: "First",
    cost: "",
    seatNumber: "",
    classType: "First",
    cost: "",
  });
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      departureDate: date,
    });
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Format departureDate to "MM/DD/YYYY"
    const formattedDepartureDate = formData.departureDate.toLocaleDateString('en-US');

   
    // Fetch miles for the passenger with the max PassengerId
    axios.get("http://localhost:3001/api/getmaxmiles")
      .then((response) => {
        const miles = response.data.maxMiles || 0; // If there are no passengers, start from 0
  
        // Calculate cost based on miles and classType
        let cost = 0;
        const classType = formData.classType;
  
        // Adjust cost based on classType
        if (classType === 'First') {
          cost += 1000;
        } else if (classType === 'Business') {
          cost += 600;
        } else if (classType === 'Economy') {
          cost += 300;
        }
  
        // Adjust cost based on miles (add your formula here)
        const milesAdjustment = Math.min(miles / 100, 50);  // You may need to adjust this formula based on your requirements
        cost -= milesAdjustment;
  
        // Round the cost to the nearest 10
        cost = Math.round(cost / 10) * 10;
        const formattedCost = `$${cost}`;
  
        // Include additional ticket details in the form data
        const ticketData = {
          departureDate: formattedDepartureDate,
          seatNumber: formData.seatNumber,
          classType: formData.classType,
          cost: formattedCost,  // Convert to string if your input field requires a string value
        };
  
        // Your logic to submit the form data and ticketData to the server
        // For example, you can use axios.post to make a POST request
        axios.post("/api/post3", ticketData)
          .then((response) => {
            // Handle success, e.g., show a success message
            console.log("Booking successful!", response);
            navigate("/");
            toast.success("Ticket Added Successfully!!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch((error) => {
            // Handle error, e.g., show an error message
            console.error("Error booking:", error);
          });
  
        // Continue with the confirmation process
        setConfirmation(!confirmation);
      })
      .catch((error) => {
        console.error("Error fetching max miles:", error);
      });
  };


  return (
    <div className="container2">
      <h2 className="heading">Ticket Details Page</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="departureDate" style={{ display: "block", width: "120px", marginRight: "10px" }}>Departure Date:</label>
          <DatePicker
            id="departureDate"
            name="departureDate"
            selected={formData.departureDate}
            onChange={handleDateChange}
            minDate={new Date()} // Set minimum date to today
            dateFormat="MM/dd/yyyy" // You can customize the date format
            style={{ width: "200px" }}
          />
        </div>

        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
          <label htmlFor="seatNumber" style={{ display: "block", width: "120px", marginRight: "10px" }}>Seat Number:</label>
          <input
            type="text"
            id="seatNumber"
            name="seatNumber"
            value={formData.seatNumber}
            onChange={handleChange}
            style={{ width: "200px" }} // Adjust the width as needed
          />
        </div>

        
        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <label htmlFor="classType" style={{ display: "block", width: "120px", marginRight: "10px" }}>Class:</label>
        <select
            id="classType"
            name="classType"
            value={formData.classType}
            onChange={handleChange}
            style={{ width: "200px" }}
        >
            <option value="First">First</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
        </select>
        </div>

        {confirmation ? (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ marginBottom: "20px", fontSize: "18px" }}>Do you want to continue with this booking?</p>
              <Link to="/">
                <button type="submit" className="btn btn-confirm" style={{ margin: "20px", padding: "15px", fontSize: "18px" }}onClick={handleSubmit}>Are you sure?</button>
              </Link>
              <button className="btn btn-confirm" style={{ margin: "20px", padding: "15px", fontSize: "18px" }} onClick={handleConfirmation}>Go Back</button>
            </div>
          ) : (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ marginBottom: "20px", fontSize: "18px" }}>Review the details and click the button below to go the next step of your booking.</p>
              <button className="btn btn-confirm" style={{ marginTop: "20px", margin: "auto", padding: "15px", fontSize: "18px" }} onClick={handleConfirmation} >
                Ticket Selection Page
              </button>
            </div>
          )}
      </form>
    </div>
  );
};

export default BookingPage3;
