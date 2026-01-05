"use client";

import React, { useEffect, useState } from 'react'; // Added imports
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';

export default function Dashboard() {
  const [user, setUser] = useState({ firstName: 'Guest' }); // Default state

  useEffect(() => {
    // Read the user from storage when the page loads
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const applicationStatus = {
    role: "Senior Full Stack Engineer",
    status: "Interview Scheduled",
    date: "Jan 12, 2026",
    progress: 65
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24">
      <Navbar />
      
      <div className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                {/* DYNAMIC NAME HERE */}
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello, {user.firstName}!</h1>
                <p className="text-slate-500">Welcome to your Tuenx candidate portal.</p>
              </div>
              
              {/* Rest of the code stays exactly the same... */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Active Application</h2>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {applicationStatus.status}
                  </span>
                </div>
                {/* ... (keep previous progress bar code) ... */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-4">
                    <div className="bg-blue-600 h-full" style={{ width: `${applicationStatus.progress}%` }} />
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
               {/* Right sidebar content... */}
               <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">Complete Your Profile</h3>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">Edit Profile</button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}