import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  UserCircleIcon, 
  BellIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  TrophyIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  FireIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { 
  CheckCircleIcon as CheckCircleIconSolid,
  StarIcon as StarIconSolid 
} from '@heroicons/react/24/solid';

const ProgressPage = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "March 2024",
    totalModules: 12,
    completedModules: 7,
    currentStreak: 5,
    longestStreak: 12,
    totalHours: 24,
    points: 2450,
    certificates: 7,
    rank: "Advanced Learner"
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');
  const [expandedModule, setExpandedModule] = useState(null);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: UserCircleIcon },
    { name: 'Modules', href: '/modules', icon: AcademicCapIcon },
    { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  ];

  const handleLogout = () => {
    window.location.href = '/';
  };

  // Progress data for different time ranges
  const progressData = {
    all: [
      { month: 'Mar', completed: 1, hours: 2 },
      { month: 'Apr', completed: 2, hours: 4 },
      { month: 'May', completed: 1, hours: 3 },
      { month: 'Jun', completed: 2, hours: 5 },
      { month: 'Jul', completed: 1, hours: 4 },
      { month: 'Aug', completed: 0, hours: 2 },
      { month: 'Sep', completed: 0, hours: 4 }
    ]
  };

  const moduleProgress = [
    {
      id: 1,
      title: "Earthquake Safety",
      category: "Natural Disasters",
      progress: 100,
      completedDate: "2024-09-15",
      timeSpent: "2h 15m",
      score: 95,
      certificate: true,
      lessons: [
        { name: "Understanding Earthquakes", completed: true, score: 92 },
        { name: "Drop, Cover, Hold", completed: true, score: 98 },
        { name: "Building Safety", completed: true, score: 95 },
        { name: "Post-Earthquake Actions", completed: true, score: 93 }
      ]
    },
    {
      id: 2,
      title: "Flood Response",
      category: "Natural Disasters", 
      progress: 100,
      completedDate: "2024-09-10",
      timeSpent: "1h 45m",
      score: 88,
      certificate: true,
      lessons: [
        { name: "Flood Warnings", completed: true, score: 90 },
        { name: "Evacuation Routes", completed: true, score: 85 },
        { name: "Water Safety", completed: true, score: 89 }
      ]
    },
    {
      id: 3,
      title: "Fire Safety",
      category: "Emergency Response",
      progress: 75,
      completedDate: null,
      timeSpent: "2h 30m",
      score: 0,
      certificate: false,
      lessons: [
        { name: "Fire Prevention", completed: true, score: 94 },
        { name: "Fire Extinguishers", completed: true, score: 87 },
        { name: "Evacuation Plans", completed: true, score: 91 },
        { name: "Smoke Safety", completed: false, score: 0 }
      ]
    },
    {
      id: 4,
      title: "First Aid Basics",
      category: "Medical Emergency",
      progress: 60,
      completedDate: null,
      timeSpent: "1h 20m",
      score: 0,
      certificate: false,
      lessons: [
        { name: "Basic First Aid", completed: true, score: 89 },
        { name: "CPR Techniques", completed: true, score: 92 },
        { name: "Wound Care", completed: false, score: 0 },
        { name: "Emergency Response", completed: false, score: 0 }
      ]
    },
    {
      id: 5,
      title: "Workplace Safety",
      category: "Professional Safety",
      progress: 25,
      completedDate: null,
      timeSpent: "45m",
      score: 0,
      certificate: false,
      lessons: [
        { name: "Hazard Identification", completed: true, score: 86 },
        { name: "Safety Protocols", completed: false, score: 0 },
        { name: "Emergency Procedures", completed: false, score: 0 },
        { name: "Incident Reporting", completed: false, score: 0 }
      ]
    }
  ];

  const achievements = [
    { id: 1, title: 'First Module Completed', earned: true, date: '2024-03-15', icon: '🎯' },
    { id: 2, title: 'Week Streak', earned: true, date: '2024-03-22', icon: '🔥' },
    { id: 3, title: '5 Modules Complete', earned: true, date: '2024-04-10', icon: '📚' },
    { id: 4, title: '10 Day Streak', earned: true, date: '2024-04-18', icon: '⚡' },
    { id: 5, title: 'Perfect Score', earned: true, date: '2024-05-02', icon: '⭐' },
    { id: 6, title: '20 Hours Studied', earned: true, date: '2024-05-15', icon: '⏰' },
    { id: 7, title: 'Emergency Expert', earned: false, date: null, icon: '🚨' },
    { id: 8, title: 'All Modules Complete', earned: false, date: null, icon: '🏆' }
  ];

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
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
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <span className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
                Progress
              </span>
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
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <span className="text-blue-600 bg-blue-50 block px-3 py-2 rounded-md text-base font-medium">
                  Progress
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content - NO SEPARATE HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title at the top of content */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
            <p className="text-gray-600">Track your disaster preparedness journey and achievements</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {user.rank}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{user.completedModules}</div>
                <div className="text-gray-600 text-sm">Modules Completed</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{user.totalHours}h</div>
                <div className="text-gray-600 text-sm">Hours Studied</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{user.currentStreak}</div>
                <div className="text-gray-600 text-sm">Current Streak</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{user.certificates}</div>
                <div className="text-gray-600 text-sm">Certificates</div>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Overall Progress</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {Math.round((user.completedModules / user.totalModules) * 100)}%
                  </div>
                  <div className="text-gray-500 text-sm">Complete</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${(user.completedModules / user.totalModules) * 100}%` }}
                ></div>
              </div>
              
              <div className="text-gray-600 text-center">
                {user.completedModules} of {user.totalModules} modules completed
              </div>
            </div>

            {/* Module Progress */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Module Progress</h2>
              
              <div className="space-y-4">
                {moduleProgress.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                            {module.certificate && (
                              <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                                <CheckCircleIconSolid className="w-4 h-4 text-green-600" />
                                <span className="text-green-700 text-xs font-medium">Certified</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>{module.category}</span>
                            <span>•</span>
                            <span>{module.timeSpent}</span>
                            {module.completedDate && (
                              <>
                                <span>•</span>
                                <span>Completed {new Date(module.completedDate).toLocaleDateString()}</span>
                              </>
                            )}
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getProgressColor(module.progress)} transition-all duration-500`}
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="ml-6 text-right">
                          <div className="text-2xl font-bold text-gray-900">{module.progress}%</div>
                          {module.score > 0 && (
                            <div className={`text-sm font-medium ${getScoreColor(module.score)}`}>
                              Score: {module.score}%
                            </div>
                          )}
                        </div>
                        
                        <div className="ml-4">
                          {expandedModule === module.id ? (
                            <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Lessons */}
                    {expandedModule === module.id && (
                      <div className="border-t bg-gray-50 p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Lessons</h4>
                        <div className="space-y-3">
                          {module.lessons.map((lesson, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                              <div className="flex items-center space-x-3">
                                {lesson.completed ? (
                                  <CheckCircleIconSolid className="w-5 h-5 text-green-500" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                )}
                                <span className={`font-medium ${lesson.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                  {lesson.name}
                                </span>
                              </div>
                              
                              {lesson.completed && lesson.score > 0 && (
                                <span className={`text-sm font-medium ${getScoreColor(lesson.score)}`}>
                                  {lesson.score}%
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-4 gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg mb-2 ${
                      achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}>
                      <span className={achievement.earned ? '' : 'grayscale opacity-50'}>
                        {achievement.icon}
                      </span>
                    </div>
                    <div className={`text-xs font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-400'}`}>
                      {achievement.title}
                    </div>
                    {achievement.earned && achievement.date && (
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Study Streak</h3>
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-orange-500 mb-1">{user.currentStreak} days</div>
                <div className="text-gray-600 text-sm mb-4">Current streak</div>
                <div className="text-gray-500 text-xs">
                  Best: {user.longestStreak} days
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/modules" 
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center">
                    <AcademicCapIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                    <span className="text-gray-900 group-hover:text-blue-600">Continue Learning</span>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </Link>
                
                <Link 
                  to="/profile" 
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center">
                    <UserCircleIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 mr-3" />
                    <span className="text-gray-900 group-hover:text-blue-600">Edit Profile</span>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
