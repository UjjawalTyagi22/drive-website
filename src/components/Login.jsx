import React from 'react';

const Login = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white border rounded-2xl shadow-lg p-8">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">DRiVE</h1>
          <p className="text-gray-500 text-sm">
            Disaster Resilience in Virtual Education
          </p>
        </div>

        {/* Page Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to continue your journey in disaster preparedness.
        </p>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Signup Redirect */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
