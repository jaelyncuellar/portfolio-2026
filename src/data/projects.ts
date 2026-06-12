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
        slug: "premium-booking-platform",
        title: "Premium Booking Platform",
        images: [
            "/images/premium-booking-platform/bookings.webp",
            "/images/premium-booking-platform/admin.webp",
            "/images/premium-booking-platform/logo.webp",
            "/images/premium-booking-platform/rsvp.webp",
        ],

        description: "Full-stack Next.js application for a premium personal brand. Booking requests, secure inquiry management, automated notifications, SEO optimization, and privacy-focused deployment infrastructure.",
        tech: ["Next.js", "Node.js", "Supabase", "React", "Typescript", "Cloudflare"],
        github: "google.com",
        featured: true,
    },

    {
        slug: "careconnect",
        title: "CareConnect",
        images: [],

        description:
            "Healthcare-focused content management platform",
        tech: ["React", "Express", "PostgreSQL", "RestAPIs"],
        github: "https://github.com/jaelyncuellar/careConnect-web",

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

        featured: true,
    },
    {
        slug: "event-website-generator-rsvp",
        title: "Event Website Generator RSVP",
        description:
            "Event management platform with guest tracking.",
        tech: ["Node.js", "Express", "SQLite"],
        images: [],
        github: "google.com",
        featured: true,
    }
];