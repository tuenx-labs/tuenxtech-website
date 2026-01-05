"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <main className="bg-white min-h-screen pt-48 flex flex-col relative">
      <Navbar />
      
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-32">
        <FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Header & Contact Info */}
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Get in touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                Let's build the <br /> future together.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-12">
                Whether you have a question about features, pricing, or enterprise solutions, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Chat to Sales</h3>
                    <p className="text-slate-500 mb-1">Speak to our team about your enterprise needs.</p>
                    <a href="mailto:sales@tuenx.com" className="text-blue-600 font-bold hover:underline">sales@tuenx.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Customer Support</h3>
                    <p className="text-slate-500 mb-1">We are here to help with any technical issues.</p>
                    <a href="mailto:support@tuenx.com" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">Visit Help Center →</a>
                  </div>
                </div>
              </div>

              {/* Global Offices Mini-Grid */}
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Our Hubs</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: "San Francisco", address: "500 Howard St" },
                  { city: "London", address: "10 Downing St" },
                  { city: "Bangalore", address: "Tech Village, ORR" },
                  { city: "Singapore", address: "Marina Bay Sands" }
                ].map((loc, i) => (
                  <div key={i} className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
                    <p className="font-bold text-slate-900">{loc.city}</p>
                    <p className="text-xs text-slate-500">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
              <div className="flex gap-4 mb-8 bg-white p-1.5 rounded-xl border border-slate-100 inline-flex">
                <button 
                  onClick={() => setActiveTab('sales')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'sales' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Contact Sales
                </button>
                <button 
                  onClick={() => setActiveTab('support')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'support' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Get Support
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white" placeholder="jane@company.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Company Size</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-700">
                    <option>1 - 50 employees</option>
                    <option>51 - 200 employees</option>
                    <option>201 - 1,000 employees</option>
                    <option>1,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-400">
                  By clicking send, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>

          </div>
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}