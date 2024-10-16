import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import AddReceta from "./Pages/AddReceta/AddReceta";
import './App.css'

function App() {

  return (
    <div className="home-page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/agregar" element = {<AddReceta />} />
          <Route path="/details/:id" element = {<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
