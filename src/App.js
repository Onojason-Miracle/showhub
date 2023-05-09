import React from "react"; 

import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./css/App.css";
import "./css/Responsive.css"

import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Service from "./components/Service";
import Nopage from "./components/Nopage";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Search from "./components/Search";




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

<Route path="overview" element={<Overview />} />

<Route path="page2" element={<Page2 />} />

<Route path="page3" element={<Page3 />} />

<Route path="page4" element={<Page4 />} />

<Route path="page5" element={<Page5 />} />

<Route path="page6" element={<Page6 />} />



<Route path="searchbar" element={<Search />} />

<Route path="footer" element={<Footer />} />

<Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
