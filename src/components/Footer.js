import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* SafeLearn Brand */}
      <div>
        <div className="flex items-center mb-4">
          <span className="bg-blue-600 rounded-full p-2 mr-2">
            {/* Logo Icon (shield) */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 4v5c0 5.25-3.75 9.5-7 11-3.25-1.5-7-5.75-7-11V7l7-4z" /></svg>
          </span>
          <span className="text-xl font-bold">DRiVE</span>
        </div>
        <p className="text-gray-300 mb-5">
          Empowering students and educators with comprehensive disaster management education for a safer tomorrow.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="YouTube" className="hover:text-red-400"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      {/* Platform */}
      <div>
        <h4 className="font-semibold mb-4">Platform</h4>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#" className="hover:text-white">Courses</a></li>
          <li><a href="#" className="hover:text-white">Simulations</a></li>
          <li><a href="#" className="hover:text-white">Virtual Drills</a></li>
          <li><a href="#" className="hover:text-white">Resources</a></li>
        </ul>
      </div>
      {/* Support */}
      <div>
        <h4 className="font-semibold mb-4">Support</h4>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#" className="hover:text-white">Help Center</a></li>
          <li><a href="#" className="hover:text-white">Documentation</a></li>
          <li><a href="#" className="hover:text-white">Training</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Careers</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    {/* Bottom copyright area */}
    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
      © 2024 SafeLearn. All rights reserved. Making education safer, one student at a time.
    </div>
  </footer>
);

export default Footer;
