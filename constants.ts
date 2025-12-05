import { ServiceCategory, Review } from './types';

export const BUSINESS_INFO = {
  name: "The Hair Office Luxury Salon",
  subtitle: "Premium Hair, Makeup & Nail Studio in Janakpuri",
  address: "A5B/113A, 114A, 117A, Janakpuri, Delhi – 110058",
  contact: "9599228235",
  whatsapp: "9599228235",
  instagram: "@thehairoffice_salon",
  rating: 4.5,
  reviewCount: 544,
  yearsExperience: 8,
  timings: "Open Daily till 9:00 PM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.666795493069!2d77.0899!3d28.6200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b000000001%3A0x0!2sJanakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1600000000000" // Generic Janakpuri map embed for demo
};

export const SERVICES: ServiceCategory[] = [
  {
    title: "Hair Services",
    items: [
      { name: "Haircut", description: "Expert styling by senior professionals.", priceStart: "₹500" },
      { name: "Hair Colour", description: "Global color, balayage, and highlights.", priceStart: "₹2500" },
      { name: "Hair Smoothening", description: "Keratin and rebonding treatments.", priceStart: "₹4000" },
      { name: "Hair Extensions", description: "Premium quality natural hair extensions.", priceStart: "On Consult" },
      { name: "Hair Patch", description: "Non-surgical hair replacement solutions.", priceStart: "On Consult" },
      { name: "Hair Spa / Treatment", description: "Deep conditioning and scalp repair.", priceStart: "₹1200" },
    ]
  },
  {
    title: "Makeup",
    items: [
      { name: "Party Makeup", description: "Glamorous looks for any occasion.", priceStart: "₹2500" },
      { name: "Bridal Makeup", description: "Complete luxury bridal packages.", priceStart: "₹15000" },
      { name: "Pre-wedding Trials", description: "Consultation and trial for brides.", priceStart: "₹2000" },
    ]
  },
  {
    title: "Nails",
    items: [
      { name: "Nail Extensions", description: "Acrylic and gel extensions.", priceStart: "₹1500" },
      { name: "Nail Art", description: "Customized premium nail art designs.", priceStart: "₹500" },
      { name: "Nail Buffing", description: "Shine and health treatment.", priceStart: "₹400" },
    ]
  },
  {
    title: "Grooming & Skin",
    items: [
      { name: "Facials", description: "Luxury skin rejuvenation therapies.", priceStart: "₹1800" },
      { name: "Manicure & Pedicure", description: "Relaxing hand and foot care.", priceStart: "₹800" },
      { name: "Beard Grooming", description: "Styling and maintenance for men.", priceStart: "₹300" },
    ]
  }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Priya Sharma", rating: 5, text: "Absolutely loved my bridal makeup! The team is so professional and the ambience is pure luxury.", date: "2 days ago" },
  { id: 2, name: "Rahul Verma", rating: 5, text: "Best salon in Janakpuri for hair patches. Very natural look and great service.", date: "1 week ago" },
  { id: 3, name: "Simran Kaur", rating: 4, text: "Great nail art services. The staff is polite and the vibe is very upscale.", date: "2 weeks ago" },
  { id: 4, name: "Anjali Gupta", rating: 5, text: "Been coming here for 3 years. Consistent quality and hygiene. Highly recommended!", date: "1 month ago" },
];