import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    alert('Sign up submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-8">
        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-xl shadow-md px-10 py-8 w-full max-w-md">
            {/* Logo and Title */}
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-blue-600 mb-1">DRiVE</div>
              <div className="text-sm text-gray-500 mb-6">
                Disaster Resilience in Virtual Education
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Create Account
              </div>
              <div className="text-gray-500 text-sm">
                Join us and start your learning journey in disaster preparedness.
              </div>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4 text-left">
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="********"
                  className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="********"
                  className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label className="text-gray-600 text-sm">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition mb-4"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 text-xs">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline font-medium">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
