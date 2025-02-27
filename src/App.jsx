
import { useState } from 'react'
import Footer from './component/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './component/Navbar'


function App() {
  return (
    <>
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  </>
  )
}

export default App
