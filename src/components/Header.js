// Modified Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side with title and subheader */}
          <div>
            <div className="text-2xl font-bold text-blue-600">DRiVE</div>
            <div className="text-sm text-gray-500 -mt-1">
              Disaster Resilience in Virtual Education
            </div>
          </div>

          {/* Right side with buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;