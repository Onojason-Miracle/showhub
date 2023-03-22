import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import"./index.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Service from "./components/Service";
import Nopage from "./components/Nopage";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />

<Route path="homepage" element={<Home />} />

<Route path="login" element={<Login />} />

<Route path="signup" element={<Signup />} />

<Route path="series" element={<Series />} />

<Route path="movies" element={<Movies />} />

<Route path="service" element={<Service />} />

<Route path="footer" element={<Footer />} />

<Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
