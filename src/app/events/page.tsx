"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function EventsPage() {
  return (
    <main className="bg-white min-h-screen pt-96 flex flex-col relative">
      <Navbar />
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            
            <div className="max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Upcoming Events</h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Connect with us at conferences, hackathons, and workshops around the world.
              </p>
            </div>

            {/* Featured Card */}
            <div className="bg-slate-50 p-12 rounded-[2rem] text-center border border-slate-200 mb-12 w-full hover:shadow-2xl transition-all hover:bg-white">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-xs rounded-full mb-6 uppercase tracking-widest">Featured Event</span>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Global Tech Summit 2026</h3>
              <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">Join us in San Francisco for our annual developer conference focusing on AI and Cloud Architecture.</p>
              <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
                Register Now
              </button>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
              <div className="h-full p-10 border border-slate-200 rounded-3xl text-center hover:border-blue-400 hover:shadow-xl transition-all flex flex-col items-center bg-white group">
                 <div className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest">Nov 15, 2025</div>
                 <h3 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-blue-600">AI Ethics Workshop</h3>
                 <p className="text-slate-500 mb-8">Virtual Global Session</p>
                 <button className="text-blue-600 font-bold text-sm hover:underline mt-auto">View Details →</button>
              </div>

              <div className="h-full p-10 border border-slate-200 rounded-3xl text-center hover:border-blue-400 hover:shadow-xl transition-all flex flex-col items-center bg-white group">
                 <div className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest">Dec 01, 2025</div>
                 <h3 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-blue-600">London Fintech Forum</h3>
                 <p className="text-slate-500 mb-8">London, United Kingdom</p>
                 <button className="text-blue-600 font-bold text-sm hover:underline mt-auto">View Details →</button>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}