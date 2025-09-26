import React from 'react';
import { Play, CheckCircle, Users } from 'lucide-react';

const Hero = ({ stats }) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Learn Disaster{' '}
              <span className="text-blue-600">Preparedness</span>
              <span className="block">the Smart Way</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Interactive disaster management education for schools and colleges. 
              Learn life-saving skills through gamified lessons, virtual drills, 
              and region-specific training.
            </p>
            <div className="flex space-x-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Learning
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-xl p-6 relative z-10">
<div className="mb-4">
<img 
  src="/Gemini_Generated_Image_ueu2faueu2faueu2.png" 
  alt="Professional Disaster Training"
  className="rounded-lg w-full h-48 object-cover"
/>

</div>

                <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Emergency Certified</div>
                    <div className="text-sm text-gray-600">Real-time verification</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;