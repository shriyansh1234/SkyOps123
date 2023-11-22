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
import BookingPage from "./pages/BookingPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route path="/addPassenger" element={<AddEditPassengers/>} />
          <Route path="/update/:id" element={<AddEditPassengers/>} />
          <Route path="/view/:id" element={<ViewPassengers/>} />
          <Route path="/view1/:id" element={<ViewAirplanes/>} />
          <Route path="/view3/:id" element={<ViewTickets/>} />
          <Route path='/airplane' element={<Airplane/>}/>
          <Route path='/airport' element={<Airport/>}/>
          <Route path='/ticket' element={<Ticket/>}/>
          <Route path='/passenger' element={<Passenger/>}/>
          <Route path="/BookingPage" component={BookingPage} />
        </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
