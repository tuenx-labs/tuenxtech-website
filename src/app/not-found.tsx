import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden px-6 py-24">
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <FadeIn>
          <div className="relative z-10 text-center max-w-lg mx-auto">
            <h1 className="text-9xl font-black text-blue-600 mb-4 tracking-tighter opacity-20 select-none">
              404
            </h1>
            <div className="-mt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-600/20">
                    Back to Home
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}