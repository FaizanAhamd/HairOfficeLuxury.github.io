import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Dashboard from './pages/Admin/Dashboard';
import { AdminProvider } from './context/AdminContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Route - No Layout (Fullscreen) */}
          <Route path="/admin" element={<Dashboard />} />
          
          {/* Public Routes - Wrapped in Layout */}
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AdminProvider>
  );
};

export default App;