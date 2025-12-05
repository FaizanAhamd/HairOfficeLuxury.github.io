import React, { useState, useMemo } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { AppointmentStatus } from '../../types';
import { Download, Search, LogOut, Trash2, Check, Clock, X } from 'lucide-react';
import Login from './Login';

const Dashboard: React.FC = () => {
  const { isAuthenticated, logout, appointments, updateStatus, deleteAppointment } = useAdmin();
  const [filterDate, setFilterDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Derived Stats
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return {
      total: appointments.length,
      today: appointments.filter(a => a.date === today).length,
      pending: appointments.filter(a => a.status === 'Pending').length,
    };
  }, [appointments]);

  // Filtered Data
  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch = appt.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          appt.mobile.includes(searchTerm) ||
                          appt.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = filterDate ? appt.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  const handleExport = () => {
    const headers = ['Name', 'Mobile', 'Date', 'Time', 'Service', 'Status', 'Notes'];
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + filteredAppointments.map(e => {
        return `"${e.name}","${e.mobile}","${e.date}","${e.time}","${e.service}","${e.status}","${e.notes}"`;
      }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "appointments.csv");
    document.body.appendChild(link);
    link.click();
  };

  if (!isAuthenticated) return <Login />;

  return (
    <div className="p-4 md:p-8 bg-black min-h-screen text-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="font-serif text-3xl text-gold-500">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm">Manage bookings and salon schedule</p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleExport} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm transition-colors">
            <Download size={16} /> Export CSV
          </button>
          <button onClick={logout} className="flex items-center gap-2 bg-red-900/50 hover:bg-red-900 px-4 py-2 rounded text-sm transition-colors text-red-200">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-luxury-dark border border-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Total Appointments</h3>
          <p className="text-4xl font-serif text-white mt-2">{stats.total}</p>
        </div>
        <div className="bg-luxury-dark border border-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Bookings Today</h3>
          <p className="text-4xl font-serif text-gold-500 mt-2">{stats.today}</p>
        </div>
        <div className="bg-luxury-dark border border-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Pending Confirmation</h3>
          <p className="text-4xl font-serif text-yellow-400 mt-2">{stats.pending}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search name, mobile, service..." 
            className="w-full bg-luxury-dark border border-gray-800 pl-10 p-3 rounded focus:border-gold-500 focus:outline-none text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <input 
          type="date" 
          className="bg-luxury-dark border border-gray-800 p-3 rounded focus:border-gold-500 focus:outline-none text-white [color-scheme:dark]"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-luxury-dark border border-gray-800 rounded-lg">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-black/50 text-gold-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8">No appointments found.</td>
              </tr>
            ) : (
              filteredAppointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-black/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-white text-base">{appt.name}</div>
                    <div className="text-xs">{appt.mobile}</div>
                    {appt.notes && <div className="text-xs text-gray-500 mt-1 italic">Note: {appt.notes}</div>}
                  </td>
                  <td className="px-6 py-4 text-white">{appt.service}</td>
                  <td className="px-6 py-4">
                    <div className="text-white">{appt.date}</div>
                    <div className="text-xs">{appt.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      appt.status === 'Confirmed' ? 'bg-green-900/30 text-green-400 border border-green-900' :
                      appt.status === 'Completed' ? 'bg-blue-900/30 text-blue-400 border border-blue-900' :
                      appt.status === 'Cancelled' ? 'bg-red-900/30 text-red-400 border border-red-900' :
                      'bg-yellow-900/30 text-yellow-400 border border-yellow-900'
                    }`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => updateStatus(appt.id, 'Confirmed')}
                        className="p-2 hover:bg-green-900/50 text-green-500 rounded tooltip" 
                        title="Confirm"
                      >
                        <Check size={16} />
                      </button>
                      <button 
                        onClick={() => updateStatus(appt.id, 'Completed')}
                        className="p-2 hover:bg-blue-900/50 text-blue-500 rounded" 
                        title="Complete"
                      >
                        <Clock size={16} />
                      </button>
                      <button 
                         onClick={() => updateStatus(appt.id, 'Cancelled')}
                        className="p-2 hover:bg-gray-800 text-gray-400 rounded" 
                        title="Cancel"
                      >
                        <X size={16} />
                      </button>
                      <button 
                        onClick={() => deleteAppointment(appt.id)}
                        className="p-2 hover:bg-red-900/50 text-red-500 rounded ml-2 border-l border-gray-700" 
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;