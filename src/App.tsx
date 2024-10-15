import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  Home
                </Link>
                <Link to="/about" className="ml-6 flex items-center">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </div>
    </Router>
  )
}

export default App
