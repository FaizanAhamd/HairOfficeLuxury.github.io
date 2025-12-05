import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Scissors, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-luxury-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4 text-gold-400 animate-pulse">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} className="opacity-50" />
            <span className="ml-2 text-white font-medium">({BUSINESS_INFO.reviewCount}+ Reviews)</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            THE HAIR <span className="text-gold-500">OFFICE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide">
            {BUSINESS_INFO.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/booking">
              <button className="bg-gold-600 hover:bg-gold-700 text-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all w-full md:w-auto transform hover:-translate-y-1">
                Book Appointment
              </button>
            </Link>
            <a href={`tel:${BUSINESS_INFO.contact}`}>
              <button className="border border-white hover:border-gold-500 hover:text-gold-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all w-full md:w-auto">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-luxury-dark p-10 rounded-lg text-center border border-gray-800 hover:border-gold-600/50 transition-colors group">
              <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors">
                <Scissors className="text-gold-500 group-hover:text-black" size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Expert Stylists</h3>
              <p className="text-gray-400">{BUSINESS_INFO.yearsExperience}+ years of delivering perfection in hair and beauty.</p>
            </div>
            <div className="bg-luxury-dark p-10 rounded-lg text-center border border-gray-800 hover:border-gold-600/50 transition-colors group">
              <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors">
                <Sparkles className="text-gold-500 group-hover:text-black" size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Premium Products</h3>
              <p className="text-gray-400">We use only top-tier international brands for your safety and glow.</p>
            </div>
            <div className="bg-luxury-dark p-10 rounded-lg text-center border border-gray-800 hover:border-gold-600/50 transition-colors group">
              <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors">
                <Award className="text-gold-500 group-hover:text-black" size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Luxury Ambience</h3>
              <p className="text-gray-400">Relax in our state-of-the-art studio designed for your comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-20 bg-luxury-dark relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hair Service" className="rounded-lg shadow-xl" />
               <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Nail Service" className="rounded-lg shadow-xl mt-8" />
             </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-gold-500 tracking-widest uppercase mb-2">Our Expertise</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Redefining Beauty</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              At The Hair Office, we believe your hair and skin deserve nothing but the best. 
              Whether it's a transformative haircut, a luxury facial, or bespoke bridal makeup, 
              our team ensures you leave looking and feeling spectacular.
            </p>
            <Link to="/services">
              <button className="border-b-2 border-gold-500 text-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Reviews */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-gold-500 mb-12 italic">"Loved by our Clients"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-luxury-dark p-6 rounded-lg text-left border border-gray-800">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-4">"{review.text}"</p>
                <div className="text-gold-600 text-xs font-bold uppercase">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;