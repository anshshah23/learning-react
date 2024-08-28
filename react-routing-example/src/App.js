import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 p-4 text-white">
          <nav className="container mx-auto flex justify-between">
            <div className="flex space-x-4">
              <Link to="/" className="hover:bg-blue-700 p-2 rounded">Home</Link>
              <Link to="/about" className="hover:bg-blue-700 p-2 rounded">About</Link>
              <Link to="/contact" className="hover:bg-blue-700 p-2 rounded">Contact</Link>
              <Link to="/dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
