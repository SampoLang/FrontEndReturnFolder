import React from "react";
import Navbar from "./Navbar";
import About from "./sites/About";
import Home from "./sites/Home";
import Contact from "./sites/Contact";
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="">
      <h1 className="site-title">Welcome to React Router</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
    </div>
  );
}

export default App;
