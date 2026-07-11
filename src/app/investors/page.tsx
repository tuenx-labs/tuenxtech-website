"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function InvestorsPage() {
  const metrics = [
    { label: "Market Cap", value: "$12.4B" },
    { label: "P/E Ratio", value: "32.8" },
    { label: "EPS", value: "$4.34" },
    { label: "Dividend Yield", value: "1.2%" },
  ];

  return (
    <main className="bg-[#F5F7FA] min-h-screen pt-28 flex flex-col">
      <Navbar />

      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-20">
        <FadeIn>
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-[#1D4ED8] bg-[#1D4ED8]/8 rounded-full">
              NASDAQ: TUENX
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1220] mb-6 tracking-tight">Investor Relations</h1>
            <p className="text-lg text-[#5B6472] leading-relaxed">
              Driving sustainable growth and delivering long-term value to our shareholders through innovation and discipline.
            </p>
          </div>

          {/* Stock Ticker Banner */}
          <div className="bg-[#0B1220] rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-white tracking-tight">$142.50</div>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <span className="text-green-400 font-semibold text-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    +1.2%
                  </span>
                  <span className="text-white/40 text-sm">Today</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{m.label}</div>
                  <div className="text-white font-bold text-lg">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quarterly Results */}
            <div className="bg-white rounded-2xl border border-[#E6E9EF] p-8 hover:shadow-md hover:border-[#1D4ED8]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/8 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Quarterly Results</h3>
              <p className="text-[#5B6472] text-sm leading-relaxed mb-6">Q2 2026 revenue up 24% YoY. Access the full earnings report and listen to the webcast replay.</p>
              <button className="text-[#1D4ED8] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                View Earnings <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* SEC Filings */}
            <div className="bg-white rounded-2xl border border-[#E6E9EF] p-8 hover:shadow-md hover:border-[#1D4ED8]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/8 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">SEC Filings</h3>
              <p className="text-[#5B6472] text-sm leading-relaxed mb-6">Access 10-K annual reports, 10-Q quarterly filings, proxy statements, and Section 16 filings.</p>
              <button className="text-[#1D4ED8] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                View Filings <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* Governance */}
            <div className="bg-white rounded-2xl border border-[#E6E9EF] p-8 hover:shadow-md hover:border-[#1D4ED8]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0B1220]/5 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0B1220]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Governance</h3>
              <p className="text-[#5B6472] text-sm leading-relaxed mb-6">Meet our board of directors, review committee charters, and learn about our ESG commitments.</p>
              <button className="text-[#1D4ED8] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
