"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// --- Configuration for Mega Menus ---
const MEGA_MENU_CONTENT: any = {
  About: {
    sidebarLinks: [
      { name: "Company Overview", href: "#" },
      { name: "Leadership Team", href: "#" },
      { name: "History", href: "#" },
      { name: "Awards & Recognition", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Diversity & Inclusion", href: "#" }
    ],
    featured: [
      { title: "Our Purpose", desc: "Engineering a better tomorrow through technology." },
      { title: "The Tuenx Way", desc: "Our core values and culture of innovation." },
      { title: "Global Footprint", desc: "Operating in 12+ countries worldwide." },
      { title: "Newsroom", desc: "Latest press releases and media coverage." }
    ],
    promo: { title: "2025 Annual Report", desc: "See our year of record growth.", cta: "Read Report" }
  },
  Services: {
    sidebarLinks: [
      { name: "AI & Analytics", href: "#" },
      { name: "Cloud Transformation", href: "#" },
      { name: "Application Modernization", href: "#" },
      { name: "Digital Strategy", href: "#" },
      { name: "Enterprise Security", href: "#" },
      { name: "IoT & Edge Computing", href: "#" },
      { name: "Quality Engineering", href: "#" },
      { name: "Software Product Engineering", href: "#" }
    ],
    featured: [
      { title: "Generative AI", desc: "Scale AI responsibly across your enterprise." },
      { title: "Cloud Native", desc: "Build resilient, scalable applications on Azure/AWS." },
      { title: "Cybersecurity", desc: "Zero-trust architecture for modern threats." },
      { title: "Data Engineering", desc: "Turn raw data into actionable insights." }
    ],
    promo: { title: "Client Success Stories", desc: "How we saved Client X $50M.", cta: "View Case Studies" }
  },
  Industries: {
    sidebarLinks: [
      { name: "Automotive", href: "#" },
      { name: "Banking", href: "#" },
      { name: "Capital Markets", href: "#" },
      { name: "Communications", href: "#" },
      { name: "Consumer Goods", href: "#" },
      { name: "Education", href: "#" },
      { name: "Healthcare", href: "#" },
      { name: "Insurance", href: "#" },
      { name: "Life Sciences", href: "#" },
      { name: "Manufacturing", href: "#" },
      { name: "Retail", href: "#" },
      { name: "Transportation", href: "#" }
    ],
    featured: [
      { title: "Aerospace & Defense", desc: "Solve your toughest A&D challenges." },
      { title: "Digital Lab Solutions", desc: "Ignite peak performance in R&D." },
      { title: "Gen AI for Mfg", desc: "Reimagine manufacturing competitive advantage." },
      { title: "Banking Tech", desc: "Accelerate growth with customer-focused solutions." }
    ],
    promo: { title: "Industry Insights", desc: "Explore trends tailored to your sector.", cta: "Read Blog" }
  },
  Insights: {
    sidebarLinks: [
      { name: "Latest Articles", href: "/insights" },
      { name: "Whitepapers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Podcasts", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Engineering Blog", href: "#" }
    ],
    featured: [
      { title: "Future of AI", desc: "How GenAI is reshaping enterprise architecture." },
      { title: "Cloud Migration", desc: "Strategies for moving legacy systems to the cloud." },
      { title: "Cyber Threats 2026", desc: "The new landscape of digital security." },
      { title: "Green Computing", desc: "Reducing carbon footprints in data centers." }
    ],
    promo: { title: "Subscribe", desc: "Get the latest tech insights weekly.", cta: "Sign Up" }
  },
  Careers: {
    sidebarLinks: [
      { name: "Internship Program", href: "/careers/internships" }, 
      { name: "Search Jobs", href: "/careers" },
      { name: "Students & Grads", href: "#" },
      { name: "Experienced Professionals", href: "#" },
      { name: "Executives", href: "#" },
      { name: "Alumni Network", href: "#" },
      { name: "Life at Tuenx Technologies", href: "/life-at-tuenx" } 
    ],
    featured: [
      { title: "Why Join Us?", desc: "Build the future with the world's best engineers." },
      { title: "Learning & Development", desc: "Upskill with Tuenx Academy." },
      { title: "Benefits", desc: "Comprehensive health and wellness packages." },
      { title: "Remote Work", desc: "Our flexible 'Work from Anywhere' policy." }
    ],
    promo: { title: "Join the Team", desc: "We are hiring 50+ engineers this month.", cta: "Apply Now" }
  },
  Contact: {
    sidebarLinks: [
      { name: "Contact Sales", href: "#" },
      { name: "Client Support", href: "#" },
      { name: "Media Relations", href: "#" },
      { name: "Investor Relations", href: "/investors" },
      { name: "Analyst Relations", href: "#" },
      { name: "Office Locations", href: "#" }
    ],
    featured: [
      { title: "Global HQ", desc: "San Francisco, California, USA." },
      { title: "APAC Hub", desc: "Bangalore, India." },
      { title: "EMEA Hub", desc: "London, United Kingdom." },
      { title: "24/7 Support", desc: "Access our global helpdesk portal." }
    ],
    promo: { title: "Partner With Us", desc: "Let's build something great together.", cta: "Start Conversation" }
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHomePage, setIsHomePage] = useState(true);

  // Check if we are in the dashboard area (any url starting with /dashboard)
  const isLoggedIn = pathname?.startsWith('/dashboard');

  useEffect(() => {
    setIsHomePage(pathname === '/');
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: 'About', href: '/#about' }, 
    { name: 'Services', href: '/#services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const topLinks = [
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Investors', href: '/investors' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    if (href.startsWith('/#') || href.startsWith('#')) {
        if (window.location.pathname !== '/' && href.startsWith('/#')) {
            return;
        }
        e.preventDefault();
        const id = href.replace('/#', '').replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const handleLogout = () => {
    // 1. Delete the cookie by setting max-age to 0
    document.cookie = "auth_token=; path=/; max-age=0";
    
    // 2. Refresh so Middleware kicks in or redirect manually
    router.push('/login');
    router.refresh(); // Forces Next.js to re-evaluate the layout
  };

  const activeContent = activeDropdown ? MEGA_MENU_CONTENT[activeDropdown] : null;
  const navbarBgClass = scrolled || activeDropdown || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent';
  const topBarBgClass = scrolled || activeDropdown || !isHomePage ? 'bg-white border-gray-100' : 'bg-transparent border-transparent text-slate-700';
  const navTextClass = scrolled || activeDropdown || !isHomePage ? 'text-slate-600' : 'text-slate-700';

  return (
    <div 
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${navbarBgClass}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      
      {/* 1. Top Utility Bar - Hidden if Logged In */}
      {!isLoggedIn && (
        <div className={`hidden md:block border-b transition-colors duration-300 ${topBarBgClass}`}>
          <div className={`max-w-7xl mx-auto px-6 h-10 flex items-center justify-end space-x-6 text-xs font-medium ${scrolled || activeDropdown || !isHomePage ? 'text-slate-500' : ''}`}>
            {topLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="flex items-center cursor-pointer hover:text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>IN-EN</span>
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Navbar */}
      <div className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50 transition-colors duration-300 ${scrolled || activeDropdown || !isHomePage ? 'bg-white' : 'bg-transparent'}`}>
        
        {/* Logo */}
        <Link 
          href={isLoggedIn ? "/dashboard" : "/"} 
          className="text-2xl font-bold tracking-tight cursor-pointer text-slate-900 flex-shrink-0 mr-8"
        >
          Tuenx Technologies
        </Link>
        
        {/* Center: Main Navigation */}
        <div className="hidden md:flex items-center space-x-1 h-full">
          {navLinks.map((item) => (
            <div 
              key={item.name}
              onMouseEnter={() => setActiveDropdown(item.name)}
              className="relative h-full flex items-center"
            >
              <Link 
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-t-lg ${
                  activeDropdown === item.name 
                    ? 'text-blue-700 bg-slate-50 border-b-2 border-blue-600' 
                    : `${navTextClass} hover:text-blue-600`
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Right Section: Switches based on Login State */}
        <div className="hidden md:flex items-center ml-auto pl-8 space-x-4">
          
          {isLoggedIn ? (
            // --- LOGGED IN STATE ---
            <div className="flex items-center gap-4">
               <Link href="/dashboard" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">JD</div>
                  <span>My Dashboard</span>
               </Link>
               <button onClick={handleLogout} className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors">
                  Log Out
               </button>
            </div>
          ) : (
            // --- LOGGED OUT STATE ---
            <>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className={`w-40 py-2 pl-4 pr-10 text-sm border rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white ${scrolled || activeDropdown || !isHomePage ? 'border-slate-300 text-slate-700' : 'border-white/50 text-slate-700 shadow-sm'}`}
                />
                <button className="absolute right-0 top-0 h-full px-3 text-slate-400 group-focus-within:text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="h-6 w-px bg-slate-300"></div>

              <Link href="/login" className={`text-sm font-medium hover:text-blue-600 ${navTextClass}`}>
                Log In
              </Link>
              <Link href="/signup" className="px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 relative focus:outline-none ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`w-6 h-0.5 block bg-slate-900 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-4 h-0.5 block bg-slate-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 block bg-slate-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mega Menu & Mobile Menu */}
      <AnimatePresence>
        {activeDropdown && activeContent && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-xl z-40"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             <div className="max-w-7xl mx-auto flex h-[450px]">
              <div className="w-1/4 bg-slate-50 border-r border-slate-200 py-8 overflow-y-auto custom-scrollbar">
                <div className="px-8 pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{activeDropdown}</div>
                {activeContent.sidebarLinks.map((link: any, idx: number) => (
                  <Link key={idx} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block px-8 py-2.5 text-sm text-slate-700 hover:bg-blue-100 hover:text-blue-700 hover:font-semibold transition-colors border-l-4 border-transparent hover:border-blue-600">{link.name}</Link>
                ))}
              </div>
              <div className="w-2/4 p-10 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Featured in {activeDropdown}</h3>
                <p className="text-sm text-slate-500 mb-8">Latest updates, insights, and offerings.</p>
                <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                  {activeContent.featured.map((item: any, idx: number) => (
                    <div key={idx}>
                      <a href="#" className="font-bold text-blue-600 hover:underline mb-1 block">{item.title}</a>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 bg-slate-50 p-6 flex flex-col justify-center border-l border-slate-100">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 group cursor-pointer hover:shadow-md transition-shadow">
                  <div className={`h-36 relative overflow-hidden bg-gradient-to-br ${activeDropdown === 'About' ? 'from-orange-400 to-pink-500' : activeDropdown === 'Careers' ? 'from-green-400 to-teal-500' : 'from-blue-500 to-indigo-600'}`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{activeContent.promo.title}</h4>
                    <p className="text-xs text-slate-500 mb-4">{activeContent.promo.desc}</p>
                    <div className="flex items-center text-blue-600 text-xs font-bold">{activeContent.promo.cta}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden pt-24 pb-10 px-6 h-screen overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
                {!isLoggedIn && (
                  <div className="flex gap-4 border-b border-slate-100 pb-6">
                    <Link href="/login" className="flex-1 py-3 text-center border border-slate-200 rounded-lg font-semibold text-slate-700">Log In</Link>
                    <Link href="/signup" className="flex-1 py-3 text-center bg-blue-600 text-white rounded-lg font-semibold">Sign Up</Link>
                  </div>
                )}
                {isLoggedIn && (
                   <div className="border-b border-slate-100 pb-6">
                      <Link href="/dashboard" className="block py-3 text-center bg-blue-50 text-blue-700 rounded-lg font-bold">Go to Dashboard</Link>
                      <button onClick={handleLogout} className="block w-full py-3 text-center text-slate-500 font-medium mt-2">Log Out</button>
                   </div>
                )}
                {navLinks.map((item) => (
                    <Link key={item.name} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center">{item.name}</Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}