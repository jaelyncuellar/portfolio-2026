export type Project = {
    slug: string;
    title: string;
    images?: string[];
    description: string;
    tech: string[];
    github: string;
    featured: boolean;
}

export const projects = [

    {
        slug: "salon-booking",
        title: "Salon Booking & Analytics Platform",
        images: [
            "/images/salon-booking/hero.webp",
            "/images/salon-booking/admin.webp",
            "/images/salon-booking/reviews.webp",
            "/images/salon-booking/booking.webp",
        ],

        description:
            "Full-stack tanning salon website with online booking, client management, Instagram content integration, and an analytics dashboard for tracking revenue, appointments, memberships, and service performance.",

        tech: [
            "React",
            "TypeScript",
            "Vite",
            "Node.js",
            "Tailwind CSS",
            "Framer Motion",
        ],

        github: "https://github.com/jaelyncuellar/sun-tan-salon",
        featured: true,
    },

    {
        slug: "careconnect",
        title: "Healthcare Management Platform",
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
            "/images/care-connect/care-connect-12.png"
        ],

        description:
            "Healthcare management platform for group homes, providing secure staff/admin access, client care tracking, behavioral support documentation, medication management, scheduling, reporting, and operational oversight.",
        tech: ["React", "Express", "Node.js", "PostgreSQL", "RestAPIs", "Typescript"],
        github: "https://github.com/jaelyncuellar/careConnect-web",

        featured: true,
    },

    {
        slug: "brand-booking",
        title: "Personal Brand & Booking Platform",
        images: [
            "/images/premium-booking-platform/bookings.webp",
            "/images/premium-booking-platform/rsvp.webp",
            "/images/premium-booking-platform/logo.webp",
            "/images/premium-booking-platform/admin.webp",
        ],

        description: "Full-stack Next.js application for a premium personal brand. Booking requests, secure inquiry management, automated notifications, SEO optimization, and privacy-focused deployment infrastructure.",
        tech: ["Next.js", "Node.js", "Supabase", "React", "Typescript", "Cloudflare"],
        github: "google.com",
        featured: true,
    },

    {
        slug: "cloud-cost-intelligence",
        title: "Cloud Cost Intelligence",
        images: [],

        description:
            "Cloud pricing analytics platform consuming AWS and Azure spot pricing data.",
        tech: ["AWS", "Azure", "Python"],
        github: "google.com",

        featured: false,
    },
    {
        slug: "event-website-generator-rsvp",
        title: "Event Website Generator RSVP",
        description:
            "Event management platform with guest tracking.",
        tech: ["Node.js", "Express", "SQLite"],
        images: [],
        github: "google.com",
        featured: false,
    }
];