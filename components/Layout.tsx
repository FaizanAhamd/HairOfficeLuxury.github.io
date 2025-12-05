import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-luxury-black text-white">
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-luxury-dark text-xs text-gray-400 border-b border-gray-800">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><MapPin size={12} /> {BUSINESS_INFO.address}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {BUSINESS_INFO.timings}</span>
        </div>
        <div className="flex gap-4">
          <a href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@','')}`} target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors flex items-center gap-1">
            <Instagram size={12} /> {BUSINESS_INFO.instagram}
          </a>
          <a href={`tel:${BUSINESS_INFO.contact}`} className="hover:text-gold-500 transition-colors flex items-center gap-1">
            <Phone size={12} /> {BUSINESS_INFO.contact}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-gold-600/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold-500 tracking-wider">THE HAIR OFFICE</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase">Luxury Salon</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${isActive(link.path) ? 'text-gold-500 font-semibold' : 'text-gray-300'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking">
              <button className="bg-gold-600 hover:bg-gold-700 text-black px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-wider transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark border-t border-gray-800 absolute w-full left-0 animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-serif ${isActive(link.path) ? 'text-gold-500' : 'text-gray-300'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-gold-600 text-black py-3 rounded-sm font-bold uppercase mt-4">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark border-t border-gold-600/20 pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl text-gold-500 mb-6">The Hair Office</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the pinnacle of luxury grooming and styling in Janakpuri. 
              Over 8 years of excellence in hair, skin, and bridal services.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@','')}`} className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/admin" className="hover:text-gold-500 transition-colors text-xs">Admin Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-gold-500" size={18} />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="flex-shrink-0 text-gold-500" size={18} />
                <a href={`tel:${BUSINESS_INFO.contact}`}>{BUSINESS_INFO.contact}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="flex-shrink-0 text-gold-500" size={18} />
                <span>{BUSINESS_INFO.timings}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} The Hair Office Luxury Salon. All rights reserved.
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi,%20I%20have%20a%20query.`} 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a 
          href={`tel:${BUSINESS_INFO.contact}`} 
          className="bg-gold-600 text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Call Now"
        >
          <Phone size={24} />
        </a>
        <Link 
          to="/booking" 
          className="bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Book Appointment"
        >
          <Calendar size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Layout;