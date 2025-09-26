import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon,
  MapPinIcon,
  PencilIcon,
  CameraIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  DocumentArrowDownIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const UserProfile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "March 2024"
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-08-15',
    location: 'New York, USA',
    bio: 'Passionate about disaster preparedness and emergency response. Currently working towards becoming a certified emergency responder.',
    organization: 'ABC University',
    role: 'Student'
  });

  // FIXED: Corrected the achievements array syntax
  const [achievements] = useState([
    { id: 1, title: 'First Module Completed', date: '2024-03-15', icon: '🎯', description: 'Completed your first disaster response module' },
    { id: 2, title: 'Week Streak', date: '2024-03-22', icon: '🔥', description: 'Maintained a 7-day learning streak' },
    { id: 3, title: 'Emergency Response Expert', date: '2024-04-10', icon: '🚨', description: 'Mastered emergency response protocols' },
    { id: 4, title: 'Community Helper', date: '2024-04-18', icon: '🤝', description: 'Helped fellow learners in forums' },
    { id: 5, title: 'Perfect Score', date: '2024-05-02', icon: '⭐', description: 'Achieved 100% in a module assessment' },
    { id: 6, title: 'Safety Champion', date: '2024-05-15', icon: '🛡️', description: 'Completed all safety training modules' }
  ]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: UserCircleIcon },
    { name: 'Modules', href: '/modules', icon: AcademicCapIcon },
    { name: 'Profile', href: '/profile', icon: UserCircleIcon }
  ];

  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving profile:', formData);
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.name === 'Profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
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
                      item.name === 'Profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile </h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
              <CameraIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-8 pb-6">
            <div className="flex items-end justify-between -mt-12 mb-4">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <UserCircleIcon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 transition-colors">
                  <CameraIcon className="w-3 h-3" />
                </button>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center text-sm"
              >
                <PencilIcon className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{formData.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <EnvelopeIcon className="w-4 h-4 mr-2 text-gray-400" />/``
                  <span className="truncate">{formData.email}</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Born {new Date(formData.dateOfBirth).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Edit Form */}
            {isEditing && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Edit Profile</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      rows="3"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Learning Statistics */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Learning Statistics</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">7</div>
                  <div className="text-gray-600 text-sm">Modules Completed</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">24</div>
                  <div className="text-gray-600 text-sm">Hours Learned</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">5</div>
                  <div className="text-gray-600 text-sm">Day Streak</div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <ShieldCheckIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Privacy Settings</div>
                    <div className="text-xs text-gray-500">Manage your privacy preferences</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <BellIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Notification Preferences</div>
                    <div className="text-xs text-gray-500">Control email and push notifications</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <DocumentArrowDownIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Download Data</div>
                    <div className="text-xs text-gray-500">Export your account data</div>
                  </div>
                </button>
                
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors text-left">
                  <TrashIcon className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    <div className="font-medium text-sm">Delete Account</div>
                    <div className="text-xs text-red-400">Permanently delete your account</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-cyan-50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
