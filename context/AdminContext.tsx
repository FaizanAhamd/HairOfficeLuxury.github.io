import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Appointment, AppointmentStatus } from '../types';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (pass: string) => boolean;
  logout: () => void;
  appointments: Appointment[];
  addAppointment: (appt: Omit<Appointment, 'id' | 'timestamp' | 'status'>) => void;
  updateStatus: (id: string, status: AppointmentStatus) => void;
  deleteAppointment: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('tho_auth');
    if (savedAuth === 'true') setIsAuthenticated(true);

    const savedAppts = localStorage.getItem('tho_appointments');
    if (savedAppts) {
      setAppointments(JSON.parse(savedAppts));
    }
  }, []);

  // Save to LocalStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem('tho_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const login = (password: string) => {
    // Simple mock authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('tho_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('tho_auth');
  };

  const addAppointment = (data: Omit<Appointment, 'id' | 'timestamp' | 'status'>) => {
    const newAppt: Appointment = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: 'Pending'
    };
    setAppointments(prev => [newAppt, ...prev]);
  };

  const updateStatus = (id: string, status: AppointmentStatus) => {
    setAppointments(prev => prev.map(app => 
      app.id === id ? { ...app, status } : app
    ));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, appointments, addAppointment, updateStatus, deleteAppointment }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};