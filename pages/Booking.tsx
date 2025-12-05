import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { Calendar, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const { addAppointment } = useAdmin();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    time: '',
    service: SERVICES[0].items[0].name,
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Save to Admin Dashboard (Context/Local Storage)
    addAppointment(formData);

    // 2. Generate WhatsApp URL
    const message = `Hello The Hair Office Luxury Salon,\nI want to book an appointment.\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nService: ${formData.service}\nNotes: ${formData.notes}\n\nPlease confirm availability.\nThank you!`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

    // 3. Show Success & Redirect
    setIsSubmitted(true);
    
    // Slight delay before redirect to ensure UI updates
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center animate-fade-in">
        <div className="bg-luxury-dark p-8 rounded-lg text-center max-w-md mx-4 border border-gold-600/50">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-serif text-white mb-4">Request Sent!</h2>
          <p className="text-gray-400 mb-6">
            We are redirecting you to WhatsApp to finalize your booking with our staff.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="text-gold-500 hover:text-white underline">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  // Flatten services for the dropdown
  const allServices = SERVICES.flatMap(cat => cat.items.map(item => item.name));

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-luxury-dark p-8 md:p-12 rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-600 rounded-full blur-[80px] opacity-20"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h1 className="font-serif text-4xl font-bold text-white mb-2">Book Appointment</h1>
            <p className="text-gray-400">Fill details below and confirm via WhatsApp</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Full Name</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none focus:ring-1 focus:ring-gold-600 transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Mobile Number</label>
              <input 
                required
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none focus:ring-1 focus:ring-gold-600 transition-colors"
                placeholder="Enter 10-digit number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Preferred Date</label>
                <input 
                  required
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Preferred Time</label>
                <input 
                  required
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Select Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none transition-colors"
              >
                {allServices.map((svc, i) => (
                  <option key={i} value={svc}>{svc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Additional Notes (Optional)</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-black border border-gray-700 text-white p-4 rounded-sm focus:border-gold-600 focus:outline-none transition-colors"
                placeholder="Any special requests?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gold-600 hover:bg-gold-700 text-black font-bold py-4 rounded-sm uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Confirm on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;