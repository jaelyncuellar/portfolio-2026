// export type Project = {
//     title: string;
//     description: string;
//     tech: string[];
//     featured: boolean;
// }

export const projects = [
    // {
    //     slug: "url-shortener",
    //     title: "Scalable URL Shortener",
    //     description:
    //         "High-performance URL shortening platform with Redis caching and JWT authentication.",
    //     tech: ["ASP.NET Core", "PostgreSQL", "Redis", "JWT"],
    //     image: "/projects/url-shortener.png",
    //     github: "google.com",
    //     overview: "hola hola",
    //     featured: true,
    // },


    {
        slug: "premium-booking-platform",
        title: "Premium Booking Platform",
        images: [
            "/images/premium-booking-platform/bookings.JPEG",
            "/images/premium-booking-platform/admin.JPEG",
            "/images/premium-booking-platform/logo.webp",
            "/images/premium-booking-platform/rsvp.png",
        ],
        description: "Full-stack Next.js application for a premium personal brand. Booking requests, secure inquiry management, automated notifications, SEO optimization, and privacy-focused deployment infrastructure.",
        tech: ["Next.js", "Node.js", "Supabase", "React", "Typescript", "Cloudflare"],
        featured: true,
    },

    {
        slug: "careconnect",
        title: "CareConnect",
        description:
            "Healthcare-focused content management platform",
        tech: ["React", "Express", "PostgreSQL", "RestAPIs"],
        images: ["/projects/careconnect.png"],
        github: "google.com",
        overview: "hola hola",
        featured: true,
    },

    {
        slug: "cloud-cost-intelligence",
        title: "Cloud Cost Intelligence",
        description:
            "Cloud pricing analytics platform consuming AWS and Azure spot pricing data.",
        tech: ["AWS", "Azure", "Python"],
        images: ["/projects/cloud-cost-intelligence.png"],
        github: "google.com",
        overview: "hola hola",
        featured: true,
    },

    // {
    //     slug: "emotion-detection",
    //     title: "Emotion Detection",
    //     description:
    //         "CNN-powered emotion recognition using FER2013.",
    //     tech: ["Python", "TensorFlow", "OpenCV"],
    //     image: "/projects/emotion-detection.png",
    //     github: "google.com",
    //     overview: "hola hola",
    //     featured: false,
    // },

    {
        slug: "event-website-generator-rsvp",
        title: "Event Website Generator RSVP",
        description:
            "Event management platform with guest tracking.",
        tech: ["Node.js", "Express", "SQLite"],
        images: ["/projects/event-website-generator-rsvp.png"],
        github: "google.com",
        overview: "hola hola",
        featured: true,
    }
];