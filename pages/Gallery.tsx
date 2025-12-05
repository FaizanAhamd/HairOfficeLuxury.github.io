import React from 'react';

const Gallery: React.FC = () => {
  // Simulating gallery images with Placeholder services
  const images = [
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1487412947132-26c25fc49c1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Hair' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Makeup' },
    { src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Nails' },
    { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Hair' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', cat: 'Makeup' },
  ];

  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-gray-400">Glimpses of our work and studio</p>
          <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg cursor-pointer h-80">
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold-500 font-serif text-2xl border border-gold-500 px-6 py-2 uppercase tracking-widest">
                  {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;