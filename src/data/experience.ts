export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  /** bullets used on the site timeline */
  bullets: string[];
  /** backend-résumé variant bullets (used on the /cv page when "Backend" is selected) */
  bulletsBackend?: string[];
  /** slug of the project case-study page showcasing this role */
  caseStudySlug?: string;
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "CareConnect",
    period: "May 2025 – Nov 2025",
    location: "Idaho",
    tags: ["PostgreSQL", "Express", "React", "JWT", "REST APIs"],
    caseStudySlug: "careconnect",
    bullets: [
      "Owned full-stack development of a healthcare data platform: designed the PostgreSQL schema, built the Express REST API with JWT/bcrypt authentication, and shipped the React frontend consuming it.",
      "Improved reliability across the stack with centralized error handling, request schema validation, and secure authentication flows.",
      "Translated business requirements into technical solutions through iterative Agile delivery.",
    ],
    bulletsBackend: [
      "Designed and built the REST API layer (Express + PostgreSQL) serving healthcare user data to client applications.",
      "Implemented JWT authentication with bcrypt password hashing, centralized error handling, and request schema validation to harden API reliability.",
      "Modeled the PostgreSQL schema and data-access patterns for maintainable, extensible backend services.",
      "Delivered backend features through iterative Agile development, translating business requirements into API contracts.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "V Studio",
    period: "Mar 2026 – May 2026",
    location: "Idaho",
    tags: ["Next.js", "TypeScript", "API Routes", "Cloudflare", "CI/CD"],
    caseStudySlug: "brand-booking",
    bullets: [
      "Built and deployed a cloud-hosted Next.js + TypeScript application, owning features end-to-end from API routes and database to UI.",
      "Designed backend workflows for booking and notification systems and the frontend surfaces that drive them, emphasizing maintainable architecture.",
      "Set up secure routing, automated backups, Git/GitHub CI workflows, and production monitoring; gathered requirements directly from stakeholders.",
    ],
    bulletsBackend: [
      "Designed backend workflows for booking and notification systems using TypeScript and Next.js API routes.",
      "Implemented secure routing, automated backups, and production monitoring for a cloud-hosted application.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Code Plus",
    period: "Summer 2023",
    location: "North Carolina",
    tags: ["AWS", "Azure", "Python", "APIs", "IAM"],
    bullets: [
      "Developed cloud-based analytics solutions on live AWS and Azure pricing data; built data ingestion pipelines and backend services for real-time cost analysis.",
      "Implemented secure IAM policies and API integrations; delivered features through Agile sprints with design discussions and code reviews.",
    ],
  },
  {
    title: "Teaching Assistant, Intro to Computer Science",
    company: "Duke University",
    period: "Spring 2023",
    location: "Durham, NC",
    tags: ["Python", "Mentorship", "Code Review"],
    bullets: [
      "Supported 100+ students weekly across lab sessions through hands-on code review and debugging.",
    ],
  },
  {
    title: "Technical Project Manager",
    company: "Code Plus",
    period: "Summer 2024",
    location: "North Carolina",
    tags: ["Agile", "Leadership", "Delivery"],
    bullets: [
      "Drove 6 concurrent Agile engineering teams to delivery of production web and data applications with zero missed sprint milestones.",
    ],
  },
];

/** Order of experience entries on the backend-résumé variant of the /cv page */
export const backendExperienceOrder = [
  "Software Engineer|CareConnect",
  "Software Engineer|Code Plus",
  "Full-Stack Web Developer|V Studio",
  "Teaching Assistant, Intro to Computer Science|Duke University",
  "Technical Project Manager|Code Plus",
];
