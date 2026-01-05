"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function InvestorsPage() {
  return (
    <main className="bg-white min-h-screen pt-48 flex flex-col">
      <Navbar />
      
      {/* 1. MAIN WRAPPER: 
        max-w-7xl mx-auto px-6 ensures the content container 
        is exactly as wide as the Footer and Navbar.
      */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-20">
        
        <FadeIn>
          {/* 2. INNER WRAPPER: 
            Removed "items-center" and "max-w-3xl" from here 
            to allow the grid to breathe and expand.
          */}
          <div className="w-full">
            
            {/* Header Section - Kept centered for design balance */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Investor Relations
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Driving sustainable growth and delivering long-term value to our shareholders through innovation and discipline.
              </p>
            </div>
            
            {/* 3. GRID CONTAINER: 
               By using "w-full", these cards will now stretch to the edges 
               of the 7xl container, lining up perfectly with the Footer.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
              
              {/* Card 1: Stock Price */}
              <div className="h-full p-10 bg-slate-900 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">
                 <h3 className="text-lg font-bold opacity-80 uppercase tracking-widest text-slate-400">Stock Price</h3>
                 <div className="text-6xl font-bold mt-6 mb-3 tracking-tighter">$142.50</div>
                 <div className="text-green-400 font-bold text-sm flex items-center gap-1 bg-green-400/10 px-4 py-1.5 rounded-full">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                   +1.2% Today
                 </div>
                 <p className="text-slate-500 text-xs mt-8 font-mono tracking-widest">NASDAQ: TUENX</p>
              </div>

              {/* Card 2: Financial Reports */}
               <div className="h-full p-10 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:shadow-2xl hover:bg-white transition-all duration-300">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-blue-600 border border-slate-100">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Financial Reports</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                   Access quarterly earnings, annual reports, and SEC filings to stay updated on our performance.
                 </p>
                 
                 <button className="text-blue-600 font-bold text-base hover:underline flex items-center mt-auto group">
                   View Archive 
                   <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </button>
              </div>

              {/* Card 3: Governance */}
              <div className="h-full p-10 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:shadow-2xl hover:bg-white transition-all duration-300">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-blue-600 border border-slate-100">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Governance</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                   Learn about our board of directors, committee composition, and our commitment to ESG goals.
                 </p>
                 
                 <button className="text-blue-600 font-bold text-base hover:underline flex items-center mt-auto group">
                   Learn More 
                   <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </button>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
      
      <Footer />
    </main>
  );
}