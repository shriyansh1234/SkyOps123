import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AddEditPassengers from "./pages/AddEditPassengers";
import Passenger from "./pages/Passenger";
import ViewPassengers from "./pages/ViewPassengers";
import ViewAirplanes from "./pages/ViewAirplanes";
import ViewTickets from "./pages/ViewTickets";
import Home from "./components/Home"
import Airplane from "./pages/Airplanes"
import Airport from "./pages/Airport"
import Ticket from "./pages/Tickets"
import BookingPage1 from "./pages/BookingPage1";
import BookingPage2 from "./pages/BookingPage2";
import BookingPage3 from "./pages/BookingPage3";
import Destinations from "./pages/Destinations";
import MyBookings from "./pages/MyBookings";
import Layout from "./components/Layout";
import UpdateBooking from "./pages/UpdateBooking";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/addPassenger" element={<Layout><AddEditPassengers/></Layout>} />
          <Route path="/update/:id" element={<Layout><AddEditPassengers/></Layout>} />
          <Route path="/view/:id" element={<Layout><ViewPassengers/></Layout>} />
          <Route path="/view1/:id" element={<Layout><ViewAirplanes/></Layout>} />
          <Route path="/view3/:id" element={<Layout><ViewTickets/></Layout>} />
          <Route path='/airplane' element={<Layout><Airplane/></Layout>}/>
          <Route path='/airport' element={<Layout><Airport/></Layout>}/>
          <Route path='/ticket' element={<Layout><Ticket/></Layout>}/>
          <Route path='/passenger' element={<Layout><Passenger/></Layout>}/>
          <Route path="/BookingPage1" element={<Layout><BookingPage1/></Layout>} />
          <Route path="/BookingPage2" element={<Layout><BookingPage2/></Layout>} />
          <Route path="/BookingPage3" element={<Layout><BookingPage3/></Layout>} />
          <Route path="/destinations" element={<Layout><Destinations/></Layout>} />
          <Route path="/MyBookings" element={<Layout><MyBookings/></Layout>} />
          <Route path="/UpdateBooking/:id" element={<Layout><UpdateBooking/></Layout>} />
        </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
