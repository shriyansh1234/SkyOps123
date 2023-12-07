import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import ViewPassengers from "./pages/ViewPages/ViewPassengers";
import ViewAirplanes from "./pages/ViewPages/ViewAirplanes";
import ViewTickets from "./pages/ViewPages/ViewTickets";
import Home from "./components/Home"
import Chatbox from "./components/chatbox"
import Passenger from "./pages//DataDisplay/Passenger";
import Airplane from "./pages//DataDisplay/Airplanes"
import Airport from "./pages/DataDisplay/Airport"
import Ticket from "./pages/DataDisplay/Tickets"
import Destinations from "./pages/DataDisplay/Destinations";
import BookingPage1 from "./pages/Bookings/BookingPage1";
import BookingPage2 from "./pages/Bookings/BookingPage2";
import BookingPage3 from "./pages/Bookings/BookingPage3";
import UpdateBooking from "./pages/Bookings/UpdateBooking";
import MyBookings from "./pages/Bookings/MyBookings";
import Busiest from "./pages/InterestingQueries/BusiestAirport";
import Distribution from "./pages/InterestingQueries/ClassDistribution";
import TicketsSold from "./pages/InterestingQueries/TicketsSold";
import Layout from "./components/Layout";
import  Index from "../src/Weather/index"


function App() {
  const [weatherInfo, setWeatherInfo] = useState({ source: '', destination: '' });  // State to store weather information

  const handleWeatherInfoChange = (source, destination) => {
    setWeatherInfo({ source, destination });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Chatbox />
        <ToastContainer position="top-center" />
        <Routes> 
        <Route path="/" element={<Home/>} />
          <Route path="/view/:id" element={<Layout><ViewPassengers/></Layout>} />
          <Route path="/view1/:id" element={<Layout><ViewAirplanes/></Layout>} />
          <Route path="/view3/:id" element={<Layout><ViewTickets/></Layout>} />
          <Route path='/airplane' element={<Layout><Airplane/></Layout>}/>
          <Route path='/airport' element={<Layout><Airport/></Layout>}/>
          <Route path='/ticket' element={<Layout><Ticket/></Layout>}/>
          <Route path='/passenger' element={<Layout><Passenger/></Layout>}/>
          <Route path="/BookingPage1" element={<Layout><BookingPage1/></Layout>} />
          <Route path="/BookingPage2/:id" element={<Layout><BookingPage2/></Layout>} />
          <Route path="/BookingPage3" element={<Layout><BookingPage3/></Layout>} />
          <Route path="/destinations" element={<Layout><Destinations/></Layout>} />
          <Route path="/MyBookings" element={<Layout><MyBookings/></Layout>} />
          <Route path="/UpdateBooking/:id" element={<Layout><UpdateBooking/></Layout>} />
          <Route path="/busiest" element={<Layout><Busiest/></Layout>} />
          <Route path="/distribution" element={<Layout><Distribution/></Layout>} />
          <Route path="/ticketsSold" element={<Layout><TicketsSold/></Layout>} />
          <Route path="/Index/:id/:source/:destination" element={<Layout><Index/></Layout>} />
        </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;