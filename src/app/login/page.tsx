"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // UI State for error messages
  
  // Using 'credentials' state to match your preferred naming
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous errors

    try {
      // 1. Send data to your Real Database API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (result.success) {
        // 2. Success! Save user data for the Dashboard to use
        localStorage.setItem('currentUser', JSON.stringify({
          firstName: result.user.first_name,
          lastName: result.user.last_name,
          email: result.user.email
        }));
        
        // 3. Set the auth cookie
        document.cookie = "auth_token=true; path=/; max-age=86400";
        
        // 4. Redirect to Dashboard
        router.push('/dashboard');
      } else {
        // Show the error from the database (or a default message)
        setError(result.error || "Invalid email or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    } finally {
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
              <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
              <p className="text-slate-500 mt-2">Sign in to access your enterprise dashboard.</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Error Banner */}
              {error && (
                <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-lg text-center">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="name@company.com"
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-slate-700">Password</label>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <input 
                  required 
                  type="password" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="••••••••"
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full text-white font-bold py-3 rounded-lg transition-colors shadow-lg ${isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-black'}`}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className="mt-8 text-center text-sm text-slate-500">
              Don't have an account? <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}