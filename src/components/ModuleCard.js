import React from 'react';
import { Play, Clock, Users } from 'lucide-react';

const ModuleCard = ({ module, onClick }) => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
      onClick={() => onClick(module)}
    >
      {/* Module Image */}
      <div className={`h-48 bg-gradient-to-br ${module.color} relative`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(module.level)}`}>
            {module.level}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Module Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {module.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {module.description}
        </p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{module.enrolled}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-bold text-blue-600">{module.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                module.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
              }`}
              style={{ width: `${module.progress}%` }}
            ></div>
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          {module.progress === 0 ? 'Start Module' : 
           module.progress === 100 ? 'Review Module' : 'Continue Learning'}
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;