import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          InfluenceAI
        </Link>
        <div className="space-x-4">
          <Link to="/input" className="text-sm text-gray-600 hover:text-indigo-600">
            Input Data
          </Link>
          <Link to="/dashboard" className="text-sm text-gray-600 hover:text-indigo-600">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}