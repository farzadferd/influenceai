import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import React Router components
import InputPage from "./InputPage"; // Import InputPage component
import DashboardPage from "./DashboardPage"; // Import DashboardPage component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-lg font-bold">InfluenceAI</Link>
            <div>
              <Link to="/" className="mr-4">Input</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
