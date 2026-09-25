export type Project = {
  slug: string;
  title: string;
  role?: string;
  period?: string;
  images?: string[];
  description: string;
  /** résumé-style bullet highlights (engineering projects) */
  bullets?: string[];
  tech: string[];
  /** null hides the GitHub button */
  github: string | null;
  featured: boolean;
  /** true → listed under "From the résumé" */
  resume: boolean;
};

export const projects: Project[] = [
  {
    slug: "url-shortener",
    title: "Scalable URL Shortener",
    role: "Backend Engineer",
    period: "Present",
    images: [],
    description:
      "High-throughput URL shortening service built with ASP.NET Core, engineered for concurrent load with Redis caching and async processing.",
    bullets: [
      "Cut API response latency ~40% under concurrent workloads with Redis caching; optimized database access and async processing for peak-traffic throughput.",
      "Applied design patterns and JWT-based authentication for maintainable, fault-tolerant services.",
    ],
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "Redis", "JWT"],
    github: null,
    featured: true,
    resume: true,
  },
  {
    slug: "dream-theme-analyzer",
    title: "Dream Theme Analyzer",
    role: "ML Developer",
    period: "Spring 2025",
    images: [],
    description:
      "NLP pipeline that automatically extracts themes from tens of thousands of dream journal entries using transformer embeddings and topic modeling.",
    bullets: [
      "Processed 23,000+ text records with transformer embeddings and BERTopic, automating theme extraction and eliminating manual labeling.",
      "Built modular ML pipelines that reduced experimentation time by ~50%.",
    ],
    tech: ["Python", "BERTopic", "Transformers", "NLP"],
    github: null,
    featured: true,
    resume: true,
  },
  {
    slug: "salon-booking",
    title: "Salon Booking & Analytics Platform",
    role: "Full-Stack Developer",
    period: "2026",
    images: [
      "/images/salon-booking/hero.webp",
      "/images/salon-booking/admin.webp",
      "/images/salon-booking/reviews.webp",
      "/images/salon-booking/booking.webp",
    ],
    description:
      "Full-stack tanning salon website with online booking, client management, Instagram content integration, and an analytics dashboard for tracking revenue, appointments, memberships, and service performance.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jaelyncuellar/sun-tan-salon",
    featured: true,
    resume: false,
  },
  {
    slug: "careconnect",
    title: "Healthcare Management Platform",
    role: "Software Engineer",
    period: "2025 – 2026",
    images: [
      "/images/care-connect/care-connect-1.png",
      "/images/care-connect/care-connect-2.png",
      "/images/care-connect/care-connect-3.png",
      "/images/care-connect/care-connect-4.png",
      "/images/care-connect/care-connect-5.png",
      "/images/care-connect/care-connect-6.png",
      "/images/care-connect/care-connect-7.png",
      "/images/care-connect/care-connect-8.png",
      "/images/care-connect/care-connect-9.png",
      "/images/care-connect/care-connect-10.png",
      "/images/care-connect/care-connect-11.png",
      "/images/care-connect/care-connect-12.png",
    ],
    description:
      "Healthcare management platform for group homes, providing secure staff/admin access, client care tracking, behavioral support documentation, medication management, scheduling, reporting, and operational oversight.",
    tech: ["React", "Express", "Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    github: "https://github.com/jaelyncuellar/careConnect-web",
    featured: true,
    resume: false,
  },
  {
    slug: "brand-booking",
    title: "Personal Brand & Booking Platform",
    role: "Full-Stack Developer",
    period: "2026",
    images: [
      "/images/premium-booking-platform/bookings.webp",
      "/images/premium-booking-platform/rsvp.webp",
      "/images/premium-booking-platform/logo.webp",
      "/images/premium-booking-platform/admin.webp",
    ],
    description:
      "Full-stack Next.js application for a premium personal brand. Booking requests, secure inquiry management, automated notifications, SEO optimization, and privacy-focused deployment infrastructure.",
    tech: ["Next.js", "Node.js", "Supabase", "React", "TypeScript", "Cloudflare"],
    github: null,
    featured: true,
    resume: false,
  },
  {
    slug: "cloud-cost-intelligence",
    title: "Cloud Cost Intelligence",
    role: "Software Engineer",
    period: "Summer 2023",
    images: [],
    description:
      "Cloud pricing analytics platform consuming live AWS and Azure spot pricing data for real-time infrastructure cost analysis.",
    tech: ["AWS", "Azure", "Python"],
    github: null,
    featured: false,
    resume: false,
  },
  {
    slug: "event-rsvp",
    title: "Event Website Generator & RSVP",
    role: "Backend Developer",
    period: "2024",
    images: [],
    description: "Event management platform with guest tracking and RSVP workflows.",
    tech: ["Node.js", "Express", "SQLite"],
    github: null,
    featured: false,
    resume: false,
  },
];
