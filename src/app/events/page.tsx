"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function EventsPage() {
  const upcomingEvents = [
    { date: "Nov 15, 2025", title: "AI Ethics Workshop", location: "Virtual Global Session", type: "Workshop", color: "bg-[#1D4ED8]" },
    { date: "Dec 01, 2025", title: "London Fintech Forum", location: "London, United Kingdom", type: "Conference", color: "bg-[#3B82F6]" },
    { date: "Jan 20, 2026", title: "Cloud Architecture Summit", location: "San Francisco, CA", type: "Summit", color: "bg-[#0B1220]" },
    { date: "Feb 10, 2026", title: "Developer Hackathon 2026", location: "Bangalore, India", type: "Hackathon", color: "bg-[#1D4ED8]" },
  ];

  return (
    <main className="bg-[#F5F7FA] min-h-screen pt-28 flex flex-col">
      <Navbar />

      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-[#1D4ED8] bg-[#1D4ED8]/8 rounded-full">
              Events
            </div>
            <h1 className="text-5xl font-bold text-[#0B1220] mb-4 tracking-tight">Upcoming Events</h1>
            <p className="text-lg text-[#5B6472] max-w-2xl">
              Connect with us at conferences, hackathons, and workshops around the world.
            </p>
          </div>

          {/* Featured Event */}
          <div className="relative overflow-hidden rounded-2xl mb-12 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] opacity-90" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 p-10 md:p-16 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Featured Event</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Global Tech Summit 2026</h2>
                <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> June 15-17, 2026</span>
                  <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> San Francisco, CA</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">Join us for our flagship conference on AI, Cloud Architecture, and the future of enterprise engineering.</p>
              </div>
              <button className="px-8 py-4 bg-white text-[#0B1220] font-bold rounded-full hover:bg-white/90 hover:shadow-xl transition-all whitespace-nowrap text-lg">
                Register Now
              </button>
            </div>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E6E9EF] p-8 hover:shadow-md hover:border-[#1D4ED8]/20 transition-all group flex gap-6">
                {/* Date badge */}
                <div className={`w-16 h-16 rounded-xl ${event.color} text-white flex flex-col items-center justify-center flex-shrink-0`}>
                  <span className="text-lg font-bold leading-none">{event.date.split(' ')[1]}</span>
                  <span className="text-xs uppercase opacity-80">{event.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1220] mb-2 group-hover:text-[#1D4ED8] transition-colors">{event.title}</h3>
                  <p className="text-[#5B6472] text-sm flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {event.location}
                  </p>
                </div>
                <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[#E6E9EF] group-hover:bg-[#1D4ED8] group-hover:border-[#1D4ED8] group-hover:text-white text-[#5B6472] transition-all flex-shrink-0 self-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
