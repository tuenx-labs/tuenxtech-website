"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import About from '@/components/About';
import Careers from '@/components/Careers';

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-slate-50 to-white pt-20">
        <FadeIn delay={0.1}>
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Global Innovation Partner
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              The Future.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed">
            We build the digital infrastructure that powers the next generation of global enterprises.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('services')}
              className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition transform duration-200"
            >
              Explore Solutions
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-full hover:border-slate-900 hover:text-slate-900 transition duration-200"
            >
              Contact Sales
            </button>
          </div>
        </FadeIn>
      </section>

      <About />
      <Services />
      <Industries />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}