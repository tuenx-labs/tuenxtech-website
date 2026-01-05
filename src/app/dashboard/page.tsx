"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  // Initialize as null so we don't flash "Guest" before checking
  const [user, setUser] = useState<{ firstName: string; lastName: string; email: string } | null>(null);

  useEffect(() => {
    // 1. Check for the user in Local Storage
    const storedUser = localStorage.getItem('currentUser');
    
    if (!storedUser) {
      // Security: If not logged in, kick them out to the login page immediately
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    // 1. Clear the data
    localStorage.removeItem('currentUser');
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    
    // 2. Redirect to Home
    router.push('/');
  };

  // Hardcoded data for the demo
  const applicationStatus = {
    role: "Senior Full Stack Engineer",
    status: "Interview Scheduled",
    date: "Jan 12, 2026",
    progress: 65
  };

  // Don't show the dashboard until we confirm the user exists
  if (!user) return null;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24">
      <Navbar />
      
      <div className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT COLUMN (Main Content) */}
            <div className="lg:w-2/3 space-y-8">
              
              {/* 1. Welcome Card + Logout Button */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello, {user.firstName}!</h1>
                  <p className="text-slate-500">Welcome to your Tuenx candidate portal.</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
                >
                  Sign Out
                </button>
              </div>
              
              {/* 2. Application Status Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Active Application</h2>
                    <p className="text-sm text-slate-500 mt-1">{applicationStatus.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {applicationStatus.status}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-700">
                        <span>Application Progress</span>
                        <span>{applicationStatus.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-1000" style={{ width: `${applicationStatus.progress}%` }} />
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Next Interview: {applicationStatus.date}
                    </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (Sidebar) */}
            <div className="lg:w-1/3 space-y-8">
               <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-lg font-bold mb-4">Complete Your Profile</h3>
                <p className="text-slate-400 text-sm mb-6">Complete your profile to increase your chances of being hired by 20%.</p>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Profile
                </button>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}