"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // To show error messages
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      // 1. Get the saved user from Local Storage
      const storedUser = localStorage.getItem('currentUser');
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        
        // 2. Check if credentials match
        if (user.email === credentials.email && user.password === credentials.password) {
           document.cookie = "auth_token=true; path=/; max-age=86400";
           router.push('/dashboard');
           return;
        }
      }

      // If we get here, login failed
      setError("Invalid email or password. (Hint: Did you sign up first?)");
      setIsLoading(false);
    }, 1000);
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
              {error && <p className="text-red-500 text-sm text-center font-bold bg-red-50 p-2 rounded-lg">{error}</p>}
              
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
                className={`w-full text-white font-bold py-3 rounded-lg transition-colors shadow-lg ${isLoading ? 'bg-slate-700' : 'bg-slate-900 hover:bg-black'}`}
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