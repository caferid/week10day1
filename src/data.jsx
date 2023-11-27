import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';

function Data() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Data