import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  UserCircleIcon, 
  BellIcon,
  PlayCircleIcon,
  ClockIcon,
  CheckCircleIcon,
  TrophyIcon,
  BookOpenIcon,
  CalendarIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: null,
    joinDate: "March 2024",
    totalModules: 12,
    completedModules: 7,
    currentStreak: 5,
    points: 2450
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "completed", module: "Earthquake Safety", date: "2 hours ago", points: 150 },
    { id: 2, type: "started", module: "Fire Safety", date: "1 day ago", points: 0 },
    { id: 3, type: "achievement", module: "First Week Streak", date: "3 days ago", points: 100 }
  ]);

  const [continueModules, setContinueModules] = useState([
    {
      id: 2,
      title: "Flood Response",
      progress: 75,
      nextLesson: "Emergency Evacuation Routes",
      timeRemaining: "15 min",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Fire Safety",
      progress: 30,
      nextLesson: "Fire Extinguisher Usage",
      timeRemaining: "20 min",
      color: "from-red-400 to-orange-500"
    }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, title: "Live Emergency Drill Simulation", date: "Oct 2, 2024", time: "10:00 AM" },
    { id: 2, title: "Disaster Preparedness Webinar", date: "Oct 5, 2024", time: "2:00 PM" }
  ]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: UserCircleIcon },
    { name: 'Modules', href: '/modules', icon: AcademicCapIcon },
    { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  ];

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Same as before login */}
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
                    item.name === 'Dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User Menu & Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <BellIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <UserCircleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                <span>Logout</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
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
                      item.name === 'Dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
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

      {/* Main Content - NO SEPARATE WELCOME SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message integrated into main content */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name.split(' ')[0]}! 
          </h1>
          <p className="text-gray-600">Continue your disaster preparedness journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{user.completedModules}</div>
                  <div className="text-blue-100">Modules Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{user.currentStreak}</div>
                  <div className="text-blue-100">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{user.points}</div>
                  <div className="text-blue-100">Total Points</div>
                </div>
              </div>
              
              {/* Overall Progress */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-100">Overall Progress</span>
                  <span className="font-semibold">{Math.round((user.completedModules / user.totalModules) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(user.completedModules / user.totalModules) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {continueModules.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center`}>
                        <PlayCircleIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-500">{module.progress}%</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">
                      Next: {module.nextLesson}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {module.timeRemaining} remaining
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-500`}
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    
                    <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'completed' ? 'bg-green-100' :
                      activity.type === 'started' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      {activity.type === 'completed' ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      ) : activity.type === 'started' ? (
                        <BookOpenIcon className="w-5 h-5 text-blue-600" />
                      ) : (
                        <TrophyIcon className="w-5 h-5 text-yellow-600" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">
                        {activity.type === 'completed' ? 'Completed' :
                         activity.type === 'started' ? 'Started' : 'Earned'} {activity.module}
                      </p>
                      <p className="text-gray-500 text-sm">{activity.date}</p>
                    </div>
                    
                    {activity.points > 0 && (
                      <span className="text-blue-600 font-semibold">+{activity.points} pts</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-semibold text-blue-600">
                    {Math.round((user.completedModules / user.totalModules) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Streak</span>
                  <span className="font-semibold text-orange-500">{user.currentStreak} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-semibold text-green-600">{user.points}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-semibold text-purple-600">{user.completedModules}</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {event.date} at {event.time}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                View All Events
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/modules" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <AcademicCapIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                  <span className="text-gray-900 group-hover:text-blue-600">Browse All Modules</span>
                </Link>
                
                <Link 
                  to="/progress" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <ChartBarIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                  <span className="text-gray-900 group-hover:text-blue-600">View Progress</span>
                </Link>
                
                <Link 
                  to="/profile" 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <UserCircleIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                  <span className="text-gray-900 group-hover:text-blue-600">Edit Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
