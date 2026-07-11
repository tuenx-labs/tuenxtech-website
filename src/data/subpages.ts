export interface SubpageContent {
  title: string;
  subtitle: string;
  heroImageLabel: string;
  features: {
    title: string;
    description: string;
  }[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
}

export const subpagesData: Record<string, SubpageContent> = {
  // ABOUT
  "company-overview": {
    title: "Company Overview",
    subtitle: "Learn about our mission to engineer the future of enterprise technology on a global scale.",
    heroImageLabel: "Global Enterprise Strategy",
    features: [
      { title: "Our Mission", description: "To build digital infrastructure that powers the world's leading organizations." },
      { title: "Our Vision", description: "A seamless, secure, and hyper-connected global economy driven by AI." },
      { title: "Our Scale", description: "Operating across 12 countries with over 120 successful enterprise deployments." }
    ],
    ctaTitle: "Ready to partner?",
    ctaText: "Discover how we can transform your organization.",
    ctaButtonText: "Contact Us"
  },
  "leadership-team": {
    title: "Leadership Team",
    subtitle: "Meet the experts steering our global vision and technical strategy.",
    heroImageLabel: "Executive Leadership",
    features: [
      { title: "Experience", description: "Decades of combined experience scaling technology for Fortune 500 companies." },
      { title: "Vision", description: "Forward-thinking leaders pushing the boundaries of what is possible in tech." },
      { title: "Execution", description: "A track record of delivering massive, complex projects on time and under budget." }
    ],
    ctaTitle: "Join our ranks",
    ctaText: "We are always looking for exceptional leaders to join our mission.",
    ctaButtonText: "View Careers"
  },
  "history": {
    title: "Our History",
    subtitle: "From a small engineering collective to a global technology partner.",
    heroImageLabel: "Company Timeline",
    features: [
      { title: "2024: The Founding", description: "Established with a focus on solving complex architectural problems." },
      { title: "2025: Rapid Expansion", description: "Opened offices in London and Bangalore, expanding our global footprint." },
      { title: "2026: AI Integration", description: "Launched our proprietary enterprise AI deployment framework." }
    ],
    ctaTitle: "Be part of our future",
    ctaText: "Partner with us as we write the next chapter.",
    ctaButtonText: "Get in Touch"
  },
  "awards-recognition": {
    title: "Awards & Recognition",
    subtitle: "Recognized globally for engineering excellence and innovation.",
    heroImageLabel: "Industry Awards",
    features: [
      { title: "Tech Innovator 2025", description: "Awarded for our groundbreaking work in Cloud Infrastructure." },
      { title: "Best Workplace", description: "Voted top 10 engineering cultures for two years running." },
      { title: "Security Excellence", description: "Recognized by industry watchdogs for our zero-trust architecture implementations." }
    ],
    ctaTitle: "Work with the best",
    ctaText: "Experience award-winning engineering for yourself.",
    ctaButtonText: "View Services"
  },
  "sustainability": {
    title: "Sustainability",
    subtitle: "Building the future shouldn't cost the Earth. Our commitment to green tech.",
    heroImageLabel: "Green Computing",
    features: [
      { title: "Carbon Neutral", description: "Committed to carbon-neutral operations by 2030." },
      { title: "Green Cloud", description: "Optimizing cloud workloads to reduce energy consumption by up to 40%." },
      { title: "E-Waste Reduction", description: "Strict lifecycle management for all hardware and data centers." }
    ],
    ctaTitle: "Build sustainably",
    ctaText: "Learn how we can reduce the carbon footprint of your IT infrastructure.",
    ctaButtonText: "Contact Us"
  },
  "diversity-inclusion": {
    title: "Diversity & Inclusion",
    subtitle: "Innovation requires diverse perspectives. We are committed to an inclusive culture.",
    heroImageLabel: "Global Team",
    features: [
      { title: "Global Talent", description: "Hiring the best minds regardless of background, across 12 countries." },
      { title: "Inclusive Engineering", description: "Building products that serve everyone, designed by a diverse team." },
      { title: "Mentorship Programs", description: "Internal programs dedicated to uplifting underrepresented voices in tech." }
    ],
    ctaTitle: "Join our inclusive team",
    ctaText: "We're hiring worldwide.",
    ctaButtonText: "View Openings"
  },

  // SERVICES
  "ai-analytics": {
    title: "AI & Analytics",
    subtitle: "Custom LLMs, predictive analytics, and intelligent automation for the modern enterprise.",
    heroImageLabel: "Artificial Intelligence",
    features: [
      { title: "Generative AI", description: "Deploy secure, private LLMs tailored to your proprietary data." },
      { title: "Predictive Analytics", description: "Turn historical data into accurate forecasts for supply chain and finance." },
      { title: "Computer Vision", description: "Automate quality control and security with advanced image recognition." }
    ],
    ctaTitle: "Scale your AI strategy",
    ctaText: "Speak with our AI architects today.",
    ctaButtonText: "Schedule Consultation"
  },
  "cloud-transformation": {
    title: "Cloud Transformation",
    subtitle: "Scalable cloud architecture on AWS and Azure. Secure, fast, and reliable by design.",
    heroImageLabel: "Cloud Architecture",
    features: [
      { title: "Cloud Migration", description: "Seamless transition of legacy monolithic systems to the cloud." },
      { title: "Multi-Cloud Strategy", description: "Architectures spanning AWS, Azure, and GCP for ultimate redundancy." },
      { title: "Cost Optimization", description: "FinOps practices that reduce monthly cloud spend by an average of 30%." }
    ],
    ctaTitle: "Modernize your infrastructure",
    ctaText: "Let's plan your cloud journey.",
    ctaButtonText: "Get Started"
  },
  "application-modernization": {
    title: "Application Modernization",
    subtitle: "Transforming legacy software into agile, cloud-native microservices.",
    heroImageLabel: "Software Modernization",
    features: [
      { title: "Microservices", description: "Breaking down monoliths into scalable, independent services." },
      { title: "Containerization", description: "Docker and Kubernetes implementation for rapid deployment." },
      { title: "API-First Design", description: "Building robust, secure APIs that connect your entire ecosystem." }
    ],
    ctaTitle: "Update your legacy systems",
    ctaText: "Future-proof your software stack.",
    ctaButtonText: "Learn More"
  },
  "digital-strategy": {
    title: "Digital Strategy",
    subtitle: "Aligning technology investments with core business objectives.",
    heroImageLabel: "Strategic Planning",
    features: [
      { title: "Technology Audits", description: "Comprehensive review of your current stack to identify bottlenecks." },
      { title: "Roadmap Creation", description: "Multi-year digital transformation roadmaps tailored to your industry." },
      { title: "Vendor Selection", description: "Unbiased guidance on selecting the right enterprise software platforms." }
    ],
    ctaTitle: "Define your digital future",
    ctaText: "Partner with our strategic consultants.",
    ctaButtonText: "Contact Us"
  },
  "enterprise-security": {
    title: "Enterprise Security",
    subtitle: "Zero-trust architecture and robust protection against modern cyber threats.",
    heroImageLabel: "Cybersecurity",
    features: [
      { title: "Zero-Trust Architecture", description: "Implementing strict access controls across your entire network." },
      { title: "Threat Detection", description: "AI-powered monitoring to detect anomalies before they become breaches." },
      { title: "Compliance", description: "Ensuring your systems meet GDPR, HIPAA, and SOC2 standards." }
    ],
    ctaTitle: "Secure your enterprise",
    ctaText: "Get a comprehensive security audit.",
    ctaButtonText: "Request Audit"
  },
  "iot-edge-computing": {
    title: "IoT & Edge Computing",
    subtitle: "Connecting physical assets to the digital world for real-time insights.",
    heroImageLabel: "Internet of Things",
    features: [
      { title: "Edge Processing", description: "Process data closer to the source to reduce latency and bandwidth." },
      { title: "Sensor Integration", description: "Connecting manufacturing hardware and logistics fleets." },
      { title: "Digital Twins", description: "Creating virtual replicas of physical assets for simulation." }
    ],
    ctaTitle: "Connect your assets",
    ctaText: "Explore our IoT solutions.",
    ctaButtonText: "Learn More"
  },
  "quality-engineering": {
    title: "Quality Engineering",
    subtitle: "Automated testing and QA pipelines that ensure flawless deployments.",
    heroImageLabel: "Quality Assurance",
    features: [
      { title: "Test Automation", description: "End-to-end automated testing suites integrated into your CI/CD." },
      { title: "Performance Testing", description: "Load testing to ensure your systems can handle massive scale." },
      { title: "Security Testing", description: "Automated vulnerability scanning with every code commit." }
    ],
    ctaTitle: "Deploy with confidence",
    ctaText: "Implement enterprise-grade quality engineering.",
    ctaButtonText: "Contact Us"
  },
  "software-product-engineering": {
    title: "Software Product Engineering",
    subtitle: "Full-cycle development from idea to enterprise-scale product.",
    heroImageLabel: "Product Development",
    features: [
      { title: "Agile Development", description: "Iterative sprints delivering continuous value." },
      { title: "UX/UI Design", description: "User-centric design that drives adoption and efficiency." },
      { title: "Full-Stack Expertise", description: "From responsive frontends to complex, high-throughput backends." }
    ],
    ctaTitle: "Build your next product",
    ctaText: "Hire a dedicated engineering pod.",
    ctaButtonText: "Let's Talk"
  },

  // INDUSTRIES (Sample a few, use generic fallback for the rest)
  "automotive": {
    title: "Automotive Technology",
    subtitle: "Driving the future of connected vehicles and smart manufacturing.",
    heroImageLabel: "Automotive Industry",
    features: [
      { title: "Connected Vehicles", description: "Secure IoT pipelines for real-time telemetry." },
      { title: "Smart Factories", description: "Industry 4.0 implementations for automated assembly." },
      { title: "Supply Chain", description: "Blockchain and AI solutions for transparent parts tracking." }
    ],
    ctaTitle: "Accelerate innovation",
    ctaText: "Discover our automotive capabilities.",
    ctaButtonText: "Learn More"
  },
  "banking": {
    title: "Banking & Financial Services",
    subtitle: "Modernizing banking infrastructure with secure, high-frequency systems.",
    heroImageLabel: "Fintech",
    features: [
      { title: "Core Banking", description: "Migrating legacy mainframes to scalable cloud architectures." },
      { title: "Fraud Detection", description: "Real-time AI systems that identify anomalous transactions instantly." },
      { title: "Open Banking", description: "Secure API gateways compliant with PSD2 regulations." }
    ],
    ctaTitle: "Transform your financial tech",
    ctaText: "Partner with our fintech experts.",
    ctaButtonText: "Contact Sales"
  }
};

// Helper function to return fallback data if a slug isn't explicitly defined above
export function getSubpageData(slug: string): SubpageContent {
  if (subpagesData[slug]) {
    return subpagesData[slug];
  }
  
  // Format slug to Title Case
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: title,
    subtitle: `Explore our specialized solutions and insights for ${title}.`,
    heroImageLabel: title,
    features: [
      { title: "Enterprise Scale", description: "Solutions designed to handle millions of transactions and global traffic." },
      { title: "Security First", description: "Zero-trust architectures protecting your most valuable data assets." },
      { title: "Agile Delivery", description: "Rapid time-to-market driven by our experienced engineering pods." }
    ],
    ctaTitle: `Interested in ${title}?`,
    ctaText: "Get in touch with our experts to learn more about how we can help.",
    ctaButtonText: "Contact Us"
  };
}
