"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function LifeAtTuenxPage() {
  // 1. Photo Gallery Data
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Team collaboration session",
      caption: "Collaborative innovation is at our core."
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      alt: "Modern office environment",
      caption: "Spaces designed for comfort and creativity."
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      alt: "Team strategy meeting whiteboard",
      caption: "Solving complex challenges together."
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Company offsite event",
      caption: "Building bonds beyond the desk."
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "Developers working",
      caption: "Focused on engineering excellence."
    },
    {
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
      alt: "Diverse team laughing",
      caption: "A culture of belonging and fun."
    },
  ];

  // 2. Culture Vibe Data
  const vibes = [
    { title: "Flexible & Remote-First", desc: "Work where you are most productive. We focus on outcomes, not hours logged." },
    { title: "Continuous Learning", desc: "Access to Tuenx Academy, conferences, and certifications to keep you ahead." },
    { title: "Inclusive Community", desc: "Diverse perspectives drive better solutions. We champion an open, respectful environment." },
    { title: "Impactful Work", desc: "Don't just build features. Engineer platforms that transform global enterprises." }
  ];

  // 3. NEW: Employee Spotlight Data (Template)
  const employees = [
    {
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote: "At Tuenx, I'm not just writing code; I'm helping shape the future of ethical AI. The autonomy I get here is unmatched."
    },
    {
      name: "Marcus Johnson",
      role: "Product Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      quote: "The speed at which we move from 'idea' to 'shipped product' is incredible. It's a fast-paced environment, but incredibly rewarding."
    },
    {
      name: "Elena Rodriguez",
      role: "Cloud Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "I joined for the technology stack, but I stayed for the people. It's rare to find a team this talented yet this humble."
    }
  ];

  // 4. NEW: Perks & Benefits Data (Template)
  const perks = [
    { icon: "🏥", title: "Comprehensive Health", desc: "100% premium coverage for you and your dependents." },
    { icon: "✈️", title: "Unlimited PTO", desc: "Take the time you need to recharge. We insist on it." },
    { icon: "📈", title: "Equity & 401k", desc: "Competitive stock options and matching retirement plans." },
    { icon: "🏋️", title: "Wellness Stipend", desc: "$100/mo for gym, yoga, or whatever keeps you moving." },
    { icon: "💻", title: "Home Office Setup", desc: "Latest MacBook Pro and a generous budget for your desk." },
    { icon: "🍼", title: "Parental Leave", desc: "16 weeks of paid leave for all new parents." },
  ];

  return (
    <main className="bg-white min-h-screen font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn delay={0.1}>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-900/50 rounded-full border border-blue-800">
              Careers & Culture
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Life at Tuenx Technologies
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              More than just a workplace. It's a hub of innovation, collaboration, and endless possibilities. Discover the culture that drives us forward.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Engineered for People</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Tuenx Technologies, we believe that great software comes from happy, supported teams. We’ve ditched the traditional corporate stiffness for a culture of trust, autonomy, and rapid innovation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether we're brainstorming around a whiteboard in San Francisco or collaborating asynchronously across time zones, our shared passion for building the future connects us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Captured Moments</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium text-lg">{img.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

       {/* Culture/Vibe Check Section */}
       <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">The Tuenx Vibe</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {vibes.map((vibe, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-center lg:text-left h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0 text-blue-600">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{vibe.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{vibe.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Employee Spotlights Template */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">Meet the Builders</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employees.map((emp, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-6xl text-slate-700 font-serif opacity-50">"</div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img src={emp.image} alt={emp.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
                    <div>
                      <h4 className="font-bold text-lg">{emp.name}</h4>
                      <p className="text-sm text-blue-400">{emp.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic relative z-10">"{emp.quote}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Perks & Benefits Template */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Perks & Benefits</h2>
              <p className="text-slate-600 mt-4">We take care of you, so you can take care of business.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {perks.map((perk, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{perk.title}</h3>
                    <p className="text-slate-600 text-sm">{perk.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to picture yourself here?</h2>
          <p className="text-xl text-blue-100 mb-10">Explore our open roles and find where you fit in.</p>
          <a href="/#careers" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:shadow-lg transition-all">
            View Open Positions
          </a>
        </div>
      </section>
        
      <Footer />
    </main>
  );
}