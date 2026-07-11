import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FadeIn from '@/components/FadeIn';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-28 flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="flex-grow w-full">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Architects of the <span className="text-blue-600">Digital Age.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              We are a global collective of engineers, designers, and strategists. 
              Our mission is to build the technology that powers the world's most ambitious organizations.
            </p>
          </FadeIn>
        </section>

        {/* EXISTING ABOUT COMPONENT */}
        <About />

        {/* CORE VALUES */}
        <section className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The Tuenx Way</span>
                <h2 className="text-4xl font-bold text-slate-900">Our Core Values</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Relentless Innovation", desc: "We push boundaries and challenge the status quo, constantly seeking better ways to solve complex problems." },
                { title: "Engineering Excellence", desc: "We write clean, scalable, and secure code. Quality is never compromised in our pursuit of speed." },
                { title: "Integrity First", desc: "We operate with total transparency and honesty, building deep trust with our clients and partners." },
                { title: "Global Agility", desc: "We adapt quickly to changing markets, delivering value at the speed of the modern enterprise." }
              ].map((value, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 h-full hover:shadow-xl hover:border-blue-200 transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="bg-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16 max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
                <p className="text-lg text-slate-500">Decades of combined experience scaling technology for Fortune 500s.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "Chief Executive Officer", bio: "Former VP of Engineering at Google. Leads our global vision and strategy." },
                { name: "Marcus Johnson", role: "Chief Technology Officer", bio: "Pioneer in distributed systems. Architected our proprietary cloud deployment platform." },
                { name: "Elena Rodriguez", role: "Chief Operating Officer", bio: "Operations expert who scaled three different tech unicorns before joining Tuenx." }
              ].map((leader, idx) => (
                <FadeIn key={idx} delay={idx * 0.2}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                    <p className="text-slate-500">{leader.bio}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
