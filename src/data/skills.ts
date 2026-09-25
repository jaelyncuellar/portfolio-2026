/** Skill groups matching the Full-Stack résumé (default site view) */
export const skillGroupsFullStack: Record<string, string[]> = {
  Frontend: [
    "TypeScript",
    "React",
    "Next.js (App Router)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express",
    "RESTful APIs",
    "Next.js API Routes",
    "JWT Authentication",
    "bcrypt",
    "ASP.NET Core",
  ],
  "Databases": ["PostgreSQL", "Redis", "Supabase", "SQLite", "SQL"],
  "DevOps & Cloud": [
    "AWS",
    "CI/CD",
    "Git/GitHub",
    "Vercel",
    "Cloudflare",
    "VPS Hosting",
    "Linux/Unix",
  ],
  Fundamentals: [
    "Data Structures & Algorithms",
    "OOP",
    "Design Patterns",
    "Testing",
  ],
};

/** Skill groups matching the Backend résumé variant (used on the /cv page) */
export const skillGroupsBackend: Record<string, string[]> = {
  "Backend & APIs": [
    "Node.js",
    "Express",
    "ASP.NET Core",
    "RESTful APIs",
    "Next.js API Routes",
    "JWT Authentication",
    "bcrypt",
  ],
  "Databases & Caching": [
    "PostgreSQL",
    "Redis",
    "Supabase",
    "SQLite",
    "SQL (indexing, query optimization)",
  ],
  Languages: ["TypeScript", "Python", "C#", "JavaScript", "Java", "C"],
  "DevOps & Cloud": [
    "AWS",
    "IAM",
    "CI/CD",
    "Git/GitHub",
    "Cloudflare",
    "Vercel",
    "VPS Hosting",
    "Linux/Unix",
  ],
  "CS Fundamentals": [
    "Data Structures & Algorithms",
    "OOP",
    "Design Patterns",
    "Testing",
  ],
};

/** Default groups used across the site */
export const skillGroups = skillGroupsFullStack;

/** Flat marquee list for the skills ticker */
export const skillTicker = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "ASP.NET Core",
  "Python",
  "AWS",
  "JWT",
  "Tailwind CSS",
  "CI/CD",
];
