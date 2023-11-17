import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <ToastContainer position="top-center" />
    //     <Routes> 
    //     <Route exact path="/" element={<Home/>} />
    //     <Route path="/addPassenger" element={<AddEdit/>} />
    //       <Route path="/update/:id" element={<AddEdit/>} />
    //       <Route path="/view/:id" element={<View/>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
