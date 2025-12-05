import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const handleBookService = (serviceName: string) => {
    const text = `Hi The Hair Office, I am interested in booking: ${serviceName}. Please share details.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400">Discover our range of premium treatments</p>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((category, idx) => (
            <div key={idx} className="bg-luxury-dark rounded-xl overflow-hidden border border-gray-800 hover:border-gold-600/30 transition-all duration-300 shadow-lg">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center">
                <h2 className="font-serif text-2xl text-gold-500">{category.title}</h2>
                <span className="text-gray-500 text-sm uppercase tracking-widest">{category.items.length} Services</span>
              </div>
              <div className="divide-y divide-gray-800">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-6 hover:bg-black/20 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-white group-hover:text-gold-400 transition-colors">{item.name}</h3>
                      <span className="text-gold-600 font-semibold whitespace-nowrap">{item.priceStart}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <button 
                      onClick={() => handleBookService(item.name)}
                      className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-gray-500 hover:text-green-500 transition-colors"
                    >
                      <MessageCircle size={14} /> Book via WhatsApp
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;