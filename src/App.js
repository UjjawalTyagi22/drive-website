// Modified App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Features from './components/Features';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ModulesPage from './components/ModulesPage';
import UserProfile from './components/UserProfile';
import ProgressPage from './components/ProgressPage';  // <- ADD THIS IMPORT
import Header from './components/Header';
import ModuleCard from './components/ModuleCard';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

// Create a wrapper component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();
  const [selectedModule, setSelectedModule] = useState(null);

  // Define routes where Header should NOT show - ADD /progress HERE
  const hideHeaderRoutes = ['/login', '/signup', '/dashboard', '/modules', '/profile', '/progress'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  // Define routes where Footer should NOT show - ADD /progress HERE  
  const hideFooterRoutes = ['/dashboard', '/modules', '/profile', '/progress'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  const modules = [
    {
      id: 1,
      title: "Earthquake Safety",
      level: "intermediate",
      description: "Learn drop, cover, and hold techniques, building evacuation, and post-earthquake safety measures.",
      duration: "2 hours",
      enrolled: "12.3K enrolled",
      progress: 65,
      image: "/api/placeholder/300/200",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "Flood Response",
      level: "beginner",
      description: "Understanding flood warnings, evacuation routes, and water safety protocols for different scenarios.",
      duration: "1 hours",
      enrolled: "8.7K enrolled",
      progress: 100,
      image: "/api/placeholder/300/200",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Fire Safety",
      level: "advanced",
      description: "Fire extinguisher usage, evacuation procedures, and smoke safety in buildings.",
      duration: "3 hours",
      enrolled: "15.1K enrolled",
      progress: 0,
      image: "/api/placeholder/300/200",
      color: "from-red-400 to-orange-500"
    }
  ];

  const stats = [
    { label: "Students Trained", value: "50K+", color: "text-blue-600" },
    { label: "Schools", value: "500+", color: "text-blue-600" },
    { label: "Success Rate", value: "95%", color: "text-blue-600" }
  ];

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const handleCloseModal = () => {
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Conditionally render Header - Hide on Login/Signup/Dashboard pages */}
      {!shouldHideHeader && <Header />}

      <Routes>
        {/* Post-Login Pages (No Header/Footer) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/progress" element={<ProgressPage />} />  {/* <- ADD THIS ROUTE */}

        {/* Home Page (With Header/Footer) */}
        <Route
          path="/"
          element={
            <>
              <Hero stats={stats} />
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Interactive Learning Modules
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Comprehensive disaster management education designed for different age groups and learning styles
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onClick={handleModuleClick}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <Features />

              {selectedModule && (
                <Modal
                  module={selectedModule}
                  onClose={handleCloseModal}
                />
              )}
            </>
          }
        />

        {/* Auth Pages (No Header but with Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Conditionally render Footer - Hide on post-login pages only */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
