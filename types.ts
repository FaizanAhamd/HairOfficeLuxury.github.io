export interface ServiceItem {
  name: string;
  description: string;
  priceStart: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Appointment {
  id: string;
  name: string;
  mobile: string;
  date: string;
  time: string;
  service: string;
  notes: string;
  timestamp: string; // ISO string
  status: AppointmentStatus;
}