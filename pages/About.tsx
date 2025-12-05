import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521590832896-724683728439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Salon Team" 
              className="rounded-sm shadow-2xl opacity-90"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-gold-500 mb-6">A Legacy of Luxury</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Established over 8 years ago, <strong>The Hair Office Luxury Salon</strong> has been a cornerstone of style and sophistication in Janakpuri, Delhi. 
              We started with a simple vision: to provide international-standard beauty and hair services in a luxurious, relaxing environment.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our team consists of senior stylists and certified makeup artists who are passionate about their craft. 
              We don't just offer services; we offer a transformation that boosts your confidence.
            </p>
            <ul className="grid grid-cols-2 gap-4 mt-8">
              <li className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span> 8+ Years Experience
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span> 500+ Happy Brides
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span> Premium Products
              </li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span> 4.5 Star Rating
              </li>
            </ul>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-luxury-dark p-12 rounded-lg text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-600 to-transparent"></div>
          <h2 className="font-serif text-3xl text-white mb-6">Our Philosophy</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg italic">
            "Beauty is not just about how you look, but how you feel. We strive to create an experience where every client feels like royalty."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;