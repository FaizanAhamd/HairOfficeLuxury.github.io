import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-luxury-dark p-8 rounded-lg border border-gray-800">
            <h3 className="font-serif text-2xl text-white mb-8">Get In Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-full text-gold-500 border border-gray-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Visit Us</h4>
                  <p className="text-gray-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-full text-gold-500 border border-gray-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Call Us</h4>
                  <p className="text-gray-400">
                    <a href={`tel:${BUSINESS_INFO.contact}`} className="hover:text-gold-500 transition-colors">
                      {BUSINESS_INFO.contact}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-full text-gold-500 border border-gray-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Timings</h4>
                  <p className="text-gray-400">{BUSINESS_INFO.timings}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-full text-gold-500 border border-gray-700">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Follow Us</h4>
                  <p className="text-gray-400">
                    <a href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@','')}`} target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors">
                      {BUSINESS_INFO.instagram}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden border border-gray-800">
             <iframe 
               src={BUSINESS_INFO.mapUrl} 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Salon Location"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;