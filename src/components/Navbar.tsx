"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// --- Configuration for Mega Menus ---
const MEGA_MENU_CONTENT: any = {
  About: {
    sidebarLinks: [
      { name: "Company Overview", href: "/about/company-overview" },
      { name: "Leadership Team", href: "/about/leadership-team" },
      { name: "History", href: "/about/history" },
      { name: "Awards & Recognition", href: "/about/awards-recognition" },
      { name: "Sustainability", href: "/about/sustainability" },
      { name: "Diversity & Inclusion", href: "/about/diversity-inclusion" }
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
      { name: "AI & Analytics", href: "/services/ai-analytics" },
      { name: "Cloud Transformation", href: "/services/cloud-transformation" },
      { name: "Application Modernization", href: "/services/application-modernization" },
      { name: "Digital Strategy", href: "/services/digital-strategy" },
      { name: "Enterprise Security", href: "/services/enterprise-security" },
      { name: "IoT & Edge Computing", href: "/services/iot-edge-computing" },
      { name: "Quality Engineering", href: "/services/quality-engineering" },
      { name: "Software Product Engineering", href: "/services/software-product-engineering" }
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
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Banking", href: "/industries/banking" },
      { name: "Capital Markets", href: "/industries/capital-markets" },
      { name: "Communications", href: "/industries/communications" },
      { name: "Consumer Goods", href: "/industries/consumer-goods" },
      { name: "Education", href: "/industries/education" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Insurance", href: "/industries/insurance" },
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Transportation", href: "/industries/transportation" }
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
      { name: "Whitepapers", href: "/insights/whitepapers" },
      { name: "Case Studies", href: "/insights/case-studies" },
      { name: "Podcasts", href: "/insights/podcasts" },
      { name: "Webinars", href: "/insights/webinars" },
      { name: "Engineering Blog", href: "/insights/engineering-blog" }
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
      { name: "Students & Grads", href: "/careers/students-grads" },
      { name: "Experienced Professionals", href: "/careers/experienced-professionals" },
      { name: "Executives", href: "/careers/executives" },
      { name: "Alumni Network", href: "/careers/alumni-network" },
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
      { name: "Contact Sales", href: "/contact/contact-sales" },
      { name: "Client Support", href: "/contact/client-support" },
      { name: "Media Relations", href: "/contact/media-relations" },
      { name: "Investor Relations", href: "/investors" },
      { name: "Analyst Relations", href: "/contact/analyst-relations" },
      { name: "Office Locations", href: "/contact/office-locations" }
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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
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
    document.cookie = "auth_token=; path=/; max-age=0";
    router.push('/login');
    router.refresh();
  };

  const activeContent = activeDropdown ? MEGA_MENU_CONTENT[activeDropdown] : null;

  // On the homepage hero the navbar sits over a dark surface, so it renders
  // light-on-dark until scrolled or a menu opens.
  const solid = scrolled || !!activeDropdown || !isHomePage;
  const navbarBgClass = solid
    ? 'bg-white/95 backdrop-blur-md border-b border-[#E6E9EF] shadow-[0_1px_0_rgba(11,18,32,0.04)]'
    : 'bg-transparent border-b border-white/10';
  const navTextClass = solid ? 'text-[#3D4654]' : 'text-slate-200';
  const logoTextClass = solid ? 'text-[#0B1220]' : 'text-white';

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${navbarBgClass}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >

      {/* 1. Top Utility Bar - Hidden if Logged In */}
      {!isLoggedIn && (
        <div className={`hidden md:block border-b transition-colors duration-300 ${solid ? 'border-[#EDF0F4]' : 'border-white/10'}`}>
          <div className={`max-w-7xl mx-auto px-6 h-9 flex items-center justify-end space-x-6 text-[0.6875rem] font-medium tracking-wide ${solid ? 'text-[#5B6472]' : 'text-slate-300'}`}>
            {topLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`transition-colors ${solid ? 'hover:text-[#1D4ED8]' : 'hover:text-white'}`}>
                {link.name}
              </Link>
            ))}
            <div className={`flex items-center cursor-pointer transition-colors ${solid ? 'hover:text-[#1D4ED8]' : 'hover:text-white'}`}>
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="max-w-7xl mx-auto px-6 h-[4.25rem] flex items-center justify-between relative z-50">

        {/* Logo */}
        <Link
          href={isLoggedIn ? "/dashboard" : "/"}
          className={`flex items-baseline gap-1.5 cursor-pointer flex-shrink-0 mr-10 transition-colors duration-300 ${logoTextClass}`}
        >
          <span className="text-xl font-bold tracking-tight">TUENX</span>
          <span className={`text-xl font-light tracking-tight ${solid ? 'text-[#5B6472]' : 'text-slate-300'}`}>Technologies</span>
        </Link>

        {/* Center: Main Navigation */}
        <div className="hidden lg:flex items-center space-x-1 h-full">
          {navLinks.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setActiveDropdown(item.name)}
              className="relative h-full flex items-center"
            >
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeDropdown === item.name
                    ? 'text-[#1D4ED8]'
                    : `${navTextClass} ${solid ? 'hover:text-[#0B1220]' : 'hover:text-white'}`
                }`}
              >
                {item.name}
                <span className={`absolute left-4 right-4 -bottom-[1.35rem] h-[2px] bg-[#1D4ED8] transition-opacity ${activeDropdown === item.name ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            </div>
          ))}
        </div>

        {/* Right Section: Switches based on Login State */}
        <div className="hidden lg:flex items-center ml-auto pl-8 space-x-5">

          {isLoggedIn ? (
            // --- LOGGED IN STATE ---
            <div className="flex items-center gap-4">
               <Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold text-[#3D4654] hover:text-[#1D4ED8]">
                  <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center font-bold text-xs">JD</div>
                  <span>My Dashboard</span>
               </Link>
               <button onClick={handleLogout} className="px-4 py-2 text-xs font-semibold text-[#5B6472] hover:text-red-600 transition-colors">
                  Log Out
               </button>
            </div>
          ) : (
            // --- LOGGED OUT STATE ---
            <>
              <div className="relative group hidden xl:block">
                <input
                  type="text"
                  placeholder="Search"
                  className={`w-40 py-2 pl-4 pr-9 text-sm rounded-md focus:outline-none transition-all border ${
                    solid
                      ? 'bg-[#F5F7FA] border-[#E6E9EF] text-[#0B1220] placeholder:text-[#9AA4B4] focus:border-[#1D4ED8] focus:bg-white'
                      : 'bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-white/50 focus:bg-white/15'
                  }`}
                />
                <button className={`absolute right-0 top-0 h-full px-2.5 ${solid ? 'text-[#9AA4B4] group-focus-within:text-[#1D4ED8]' : 'text-slate-400 group-focus-within:text-white'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <div className={`h-5 w-px hidden xl:block ${solid ? 'bg-[#E6E9EF]' : 'bg-white/20'}`}></div>

              <Link href="/login" className={`text-sm font-medium transition-colors whitespace-nowrap ${solid ? 'text-[#3D4654] hover:text-[#1D4ED8]' : 'text-slate-200 hover:text-white'}`}>
                Log In
              </Link>
              <Link
                href="/signup"
                className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                  solid
                    ? 'text-white bg-[#0B1220] hover:bg-[#1D4ED8]'
                    : 'text-[#0B1220] bg-white hover:bg-slate-200'
                }`}
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 relative focus:outline-none ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`w-6 h-0.5 block transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#0B1220]' : solid ? 'bg-[#0B1220]' : 'bg-white'}`} />
            <span className={`w-4 h-0.5 block transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''} ${solid ? 'bg-[#0B1220]' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 block transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#0B1220]' : solid ? 'bg-[#0B1220]' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mega Menu & Mobile Menu */}
      <AnimatePresence>
        {activeDropdown && activeContent && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden lg:block absolute top-full left-0 w-full bg-white border-t border-[#E6E9EF] shadow-[0_32px_64px_-24px_rgba(11,18,32,0.25)] z-40"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             <div className="max-w-7xl mx-auto flex h-[440px]">
              <div className="w-1/4 bg-[#F5F7FA] border-r border-[#E6E9EF] py-8 overflow-y-auto custom-scrollbar">
                <div className="px-8 pb-4 text-[0.6875rem] font-semibold text-[#9AA4B4] uppercase tracking-[0.18em]">{activeDropdown}</div>
                {activeContent.sidebarLinks.map((link: any, idx: number) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-8 py-2.5 text-sm text-[#3D4654] hover:bg-white hover:text-[#1D4ED8] transition-colors border-l-2 border-transparent hover:border-[#1D4ED8]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="w-2/4 p-10 bg-white">
                <h3 className="text-lg font-semibold text-[#0B1220] mb-1 tracking-tight">Featured in {activeDropdown}</h3>
                <p className="text-sm text-[#5B6472] mb-8">Latest updates, insights, and offerings.</p>
                <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                  {activeContent.featured.map((item: any, idx: number) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="font-semibold text-[#0B1220] group-hover:text-[#1D4ED8] transition-colors mb-1.5 text-sm flex items-center gap-1.5">
                        {item.title}
                        <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                      <p className="text-xs text-[#5B6472] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 bg-[#F5F7FA] p-6 flex flex-col justify-center border-l border-[#E6E9EF]">
                <div className="bg-[#0B1220] rounded-lg overflow-hidden group cursor-pointer">
                  <div className="h-32 relative overflow-hidden bg-grid-dark">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-white mb-1.5 text-sm">{activeContent.promo.title}</h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">{activeContent.promo.desc}</p>
                    <div className="flex items-center gap-1.5 text-white text-xs font-semibold group-hover:gap-2.5 transition-all">
                      {activeContent.promo.cta}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
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
            className="absolute top-0 left-0 w-full bg-white border-b border-[#E6E9EF] shadow-xl lg:hidden pt-24 pb-10 px-6 h-screen overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
                {!isLoggedIn && (
                  <div className="flex gap-4 border-b border-[#EDF0F4] pb-6">
                    <Link href="/login" className="flex-1 py-3 text-center border border-[#E6E9EF] rounded-md font-semibold text-[#3D4654]">Log In</Link>
                    <Link href="/signup" className="flex-1 py-3 text-center bg-[#0B1220] text-white rounded-md font-semibold">Get Started</Link>
                  </div>
                )}
                {isLoggedIn && (
                   <div className="border-b border-[#EDF0F4] pb-6">
                      <Link href="/dashboard" className="block py-3 text-center bg-[#1D4ED8]/8 text-[#1D4ED8] rounded-md font-bold">Go to Dashboard</Link>
                      <button onClick={handleLogout} className="block w-full py-3 text-center text-[#5B6472] font-medium mt-2">Log Out</button>
                   </div>
                )}
                {navLinks.map((item) => (
                    <Link key={item.name} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-xl font-semibold text-[#0B1220] border-b border-[#EDF0F4] pb-4 flex justify-between items-center">
                      {item.name}
                      <svg className="w-5 h-5 text-[#9AA4B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
