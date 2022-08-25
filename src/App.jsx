import React from 'react'
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Careers, Community, Product, Pricing } from './pages'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App