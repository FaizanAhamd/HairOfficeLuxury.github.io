import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
  const { login } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(password)) {
      setError(true);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-luxury-dark p-10 rounded-lg shadow-2xl border border-gray-800 max-w-sm w-full">
        <div className="flex justify-center mb-6 text-gold-500">
          <div className="bg-black p-4 rounded-full border border-gray-700">
            <Lock size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-serif text-white text-center mb-2">Admin Access</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">Restricted Area</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full bg-black border border-gray-700 text-white p-3 rounded focus:border-gold-500 focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-xs text-center">Invalid password. Try 'admin123'</p>}
          <button 
            type="submit"
            className="w-full bg-white hover:bg-gold-500 hover:text-black text-black font-bold py-3 rounded transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;