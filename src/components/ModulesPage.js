import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  UserCircleIcon, 
  BellIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import ModuleCard from './ModuleCard';

const ModulesPage = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "March 2024"
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: UserCircleIcon },
    { name: 'Modules', href: '/modules', icon: AcademicCapIcon },
    { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  ];

  const handleLogout = () => {
    window.location.href = '/';
  };

  const allModules = [
    {
      id: 1,
      title: "Earthquake Safety",
      level: "intermediate",
      category: "Natural Disasters",
      description: "Learn drop, cover, and hold techniques, building evacuation, and post-earthquake safety measures.",
      duration: "2 hours",
      enrolled: "12.3K enrolled",
      progress: 65,
      image: "/api/placeholder/300/200",
      color: "from-orange-400 to-red-500",
      rating: 4.8,
      lessons: 8
    },
    {
      id: 2,
      title: "Flood Response",
      level: "beginner",
      category: "Natural Disasters",
      description: "Understanding flood warnings, evacuation routes, and water safety protocols for different scenarios.",
      duration: "1.5 hours",
      enrolled: "8.7K enrolled",
      progress: 100,
      image: "/api/placeholder/300/200",
      color: "from-blue-400 to-cyan-500",
      rating: 4.9,
      lessons: 6
    },
    {
      id: 3,
      title: "Fire Safety",
      level: "advanced",
      category: "Emergency Response",
      description: "Fire extinguisher usage, evacuation procedures, and smoke safety in buildings.",
      duration: "3 hours",
      enrolled: "15.1K enrolled",
      progress: 30,
      image: "/api/placeholder/300/200",
      color: "from-red-400 to-orange-500",
      rating: 4.7,
      lessons: 12
    },
    {
      id: 4,
      title: "First Aid Basics",
      level: "beginner",
      category: "Medical Emergency",
      description: "Essential first aid techniques, CPR basics, and emergency medical response procedures.",
      duration: "2.5 hours",
      enrolled: "20.4K enrolled",
      progress: 0,
      image: "/api/placeholder/300/200",
      color: "from-green-400 to-emerald-500",
      rating: 4.9,
      lessons: 10
    },
    {
      id: 5,
      title: "Cyber Security Awareness",
      level: "intermediate",
      category: "Digital Safety",
      description: "Protect yourself and your organization from cyber threats and data breaches.",
      duration: "2 hours",
      enrolled: "9.8K enrolled",
      progress: 0,
      image: "/api/placeholder/300/200",
      color: "from-purple-400 to-indigo-500",
      rating: 4.6,
      lessons: 9
    },
    {
      id: 6,
      title: "Workplace Safety",
      level: "intermediate",
      category: "Professional Safety",
      description: "Comprehensive workplace safety protocols, hazard identification, and emergency procedures.",
      duration: "2.5 hours",
      enrolled: "14.2K enrolled",
      progress: 0,
      image: "/api/placeholder/300/200",
      color: "from-yellow-400 to-orange-500",
      rating: 4.8,
      lessons: 11
    }
  ];

  const categories = ['all', 'Natural Disasters', 'Emergency Response', 'Medical Emergency', 'Digital Safety', 'Professional Safety'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredModules = allModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || module.level === filterLevel;
    const matchesCategory = filterCategory === 'all' || module.category === filterCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header - Same as Dashboard */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">DRiVE</span>
              </Link>
              <span className="hidden md:block text-sm text-gray-500 ml-2">
                Disaster Resilience in Virtual Education
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.name === 'Modules' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User Menu & Actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <BellIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              <div className="hidden md:flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <UserCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                <span>Logout</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      item.name === 'Modules' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile User Info */}
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <UserCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Modules</h1>
          <p className="text-gray-600">Explore our comprehensive disaster management and safety training modules</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-gray-600">
            Showing {filteredModules.length} of {allModules.length} modules
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => {/* Handle module click */}}
              showRating={true}
            />
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <FunnelIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No modules found</p>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesPage;
