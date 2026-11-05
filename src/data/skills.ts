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
    "Python",
  ],
  "Robotics & Perception": [
    "Python",
    "ROS 2",
    "Computer Vision / OpenCV",
    "YOLO / ONNX",
    "Kalman Filtering / Sensor Fusion",
    "NumPy",
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
    "Docker",
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
    "Python",
  ],
  "Robotics & Perception": [
    "Python",
    "ROS 2",
    "Computer Vision / OpenCV",
    "YOLO / ONNX",
    "Kalman Filtering / Sensor Fusion",
    "NumPy",
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
    "Docker",
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
