"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Send data to your new Database API
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // Uses the state we are tracking
    });

    const result = await response.json();

    if (result.success) {
      // 2. Success! Save locally for dashboard display
      localStorage.setItem('currentUser', JSON.stringify(formData));
      
      // 3. Set cookie for middleware
      document.cookie = "auth_token=true; path=/; max-age=86400";
      
      router.push('/dashboard');
    } else {
      alert("Error signing up: " + result.error);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-36">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <FadeIn>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
              <p className="text-slate-500 mt-2">Join Tuenx Technologies today.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSignup}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="Jane"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="Doe"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="name@company.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  required 
                  type="password" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="Create a password"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full text-white font-bold py-3 rounded-lg transition-colors shadow-lg ${isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-black'}`}
              >
                {isLoading ? 'Creating Account...' : 'Get Started'}
              </button>
            </form>
            <div className="mt-8 text-center text-sm text-slate-500">
              Already have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}