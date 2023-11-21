import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AddEdit from "./pages/AddEdit";
import Passenger from "./pages/Passenger";
import View from "./pages/View";
import Home from "./components/Home"
import Airline from "./pages/Airline"
import Airplane from "./pages/Airplanes"
import Airport from "./pages/Airport"
import Ticket from "./pages/Tickets"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route path="/addPassenger" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
          <Route path="/view/:id" element={<View/>} />
          <Route path='/airline' element={<Airline/>}/>
          <Route path='/airplane' element={<Airplane/>}/>
          <Route path='/airport' element={<Airport/>}/>
          <Route path='/ticket' element={<Ticket/>}/>
          <Route path='/passenger' element={<Passenger/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
