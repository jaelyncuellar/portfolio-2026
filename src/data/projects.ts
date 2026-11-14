export type ProjectCategory = "professional" | "client" | "personal" | "robotics";

export type Project = {
  slug: string;
  title: string;
  role?: string;
  period?: string;
  company?: string;
  category: ProjectCategory;
  images?: string[];
  /** optional walkthrough video (renders before the image grid on the case-study page) */
  video?: string;
  /** optional poster frame for the walkthrough video */
  poster?: string;
  /** optional YouTube watch URL (renders an embed on the case-study page) */
  youtube?: string;
  /** optional document shown after the image grid (e.g. a project flyer PDF) */
  document?: { label: string; href: string; image: string };
  description: string;
  bullets?: string[];
  tech: string[];
  github: string | null;
  site?: string;
  featured: boolean;
  onResume: boolean;
};

export const projects: Project[] = [
  {
    slug: "detection-tracking-pipeline",
    title: "Detection + Tracking Pipeline",
    role: "Perception Engineer",
    period: "Nov 2026",
    category: "robotics",
    images: [
      "/images/projects/detection-tracking.webp",
    ],
    description:
      "Multi-object detection and tracking pipeline that keeps one persistent ID per object through motion and occlusion.",
    bullets: [
      "YOLO11n ONNX detector paired with a SORT-style IoU tracker and a constant-velocity Kalman filter tracker.",
      "Verified over 60 frames with car, pedestrian, and truck each holding 1 track ID, and an occlusion check passed.",
      "Includes a KITTI-style scorer for tracking evaluation.",
    ],
    tech: ["Python", "YOLO11n (ONNX)", "Kalman Filter", "OpenCV"],
    github: "https://github.com/jaelyncuellar/detection-tracking-pipeline",
    featured: true,
    onResume: true,
  },
  {
    slug: "ekf-sensor-fusion",
    title: "EKF Sensor Fusion — IMU + GPS",
    role: "State Estimation",
    period: "Nov 2026",
    category: "robotics",
    images: [
      "/images/projects/ekf-sensor-fusion.webp",
    ],
    description:
      "Extended Kalman Filter fusing high-rate IMU with low-rate GPS to estimate position, velocity, and heading — including through GPS outages.",
    bullets: [
      "EKF state [x, y, vx, vy, heading] fusing 20Hz IMU with 1Hz GPS.",
      "2.06 m RMSE vs 3.45 m raw GPS and 196 m dead reckoning on a 120 s synthetic trip.",
      "Held 1.76 m RMSE through a scripted 15 s GPS outage; 6 unit tests pass.",
    ],
    tech: ["Python", "NumPy", "Extended Kalman Filter", "Matplotlib"],
    github: "https://github.com/jaelyncuellar/ekf-sensor-fusion",
    featured: true,
    onResume: true,
  },
  {
    slug: "ros2-perception-stack",
    title: "ROS 2 Mini Perception Stack",
    role: "Robotics Software Engineer",
    period: "Nov 2026",
    category: "robotics",
    images: [
      "/images/projects/ros2-topdown.webp",
      "/images/projects/ros2-sample.webp",
    ],
    description:
      "A ROS 2 perception stack — simulated camera to detection to TF-based monocular localization — publishing standard vision_msgs throughout.",
    bullets: [
      "camera_sim → detection → TF-based monocular localizer publishing Detection3DArray.",
      "Live map-frame RMSE 0.31 m over 1,384 localized objects; offline full-lap RMSE 0.25 m; 5 unit tests.",
      "Full TF tree: map → odom → base_link → camera_link → camera_optical_frame, with launch file and RViz config.",
    ],
    tech: ["ROS 2 Jazzy", "Python", "vision_msgs", "TF2", "RViz"],
    github: "https://github.com/jaelyncuellar/ros2-mini-perception-stack",
    featured: true,
    onResume: true,
  },
  {
    slug: "url-shortener",
    title: "Scalable URL Shortener",
    role: "Backend Engineer",
    period: "Present",
    category: "personal",
    images: [
      "/images/projects/url-shortener.webp",
    ],
    description:
      "Full URL shortening service built with ASP.NET Core — JWT auth, link CRUD and analytics, and a Redis cache-aside redirect path benchmarked against PostgreSQL-only redirects.",
    bullets: [
      "Redis cache-aside cut redirect latency ~75% (mean ~74 ms → ~18 ms) and delivered ~2.9× throughput at 50 concurrent clients / 1,000 requests per arm (verified Nov 2026 benchmark).",
      "ASP.NET Core + EF Core on PostgreSQL, Redis cache-aside on redirects, batch-written click analytics, and JWT-based authentication.",
      "Real backend wired end-to-end to the frontend: auth, dashboard, server-side search, and analytics from real click events; Docker Compose for PostgreSQL + Redis.",
    ],
    tech: ["ASP.NET Core", "C#", "EF Core", "PostgreSQL", "Redis", "JWT", "Docker"],
    github: "https://github.com/jaelyncuellar/url-shortener",
    featured: true,
    onResume: true,
  },
  {
    slug: "dream-theme-analyzer",
    title: "Dream Theme Analyzer",
    role: "ML Developer",
    period: "Spring 2025",
    category: "personal",
    images: [
      "/images/projects/dream-theme-analyzer.webp",
    ],
    description:
      "NLP pipeline that automatically extracts themes from tens of thousands of dream journal entries using transformer embeddings and topic modeling.",
    bullets: [
      "Processed 23,000+ text records with transformer embeddings and BERTopic, automating theme extraction and eliminating manual labeling.",
      "Built modular ML pipelines that reduced experimentation time by ~50%.",
    ],
    tech: ["Python", "BERTopic", "Transformers", "NLP"],
    github: null,
    featured: true,
    onResume: true,
  },
  {
    slug: "careconnect",
    title: "Healthcare Management Platform",
    role: "Software Engineer",
    period: "May 2025 – Nov 2025",
    company: "CareConnect",
    category: "professional",
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
    onResume: false,
  },
  {
    slug: "vera-rose-studio",
    title: "Vera Rose Studio",
    role: "Designer & Developer",
    period: "Nov 2026",
    company: "Vera Rose Studio",
    category: "professional",
    images: [
      "/images/premium-booking-platform/home.webp",
      "/images/premium-booking-platform/gallery.webp",
      "/images/premium-booking-platform/experience.webp",
      "/images/premium-booking-platform/investment.webp",
      "/images/premium-booking-platform/reserve.webp",
      "/images/premium-booking-platform/mobile.webp",
    ],
    video: "/images/premium-booking-platform/walkthrough.mp4",
    poster: "/images/premium-booking-platform/poster.jpg",
    description:
      "Website for Vera Rose Studio, a New York portrait & brand photography studio. An editorial glassmorphism design — full-screen glass-card heroes, a rose-and-ink palette, and dark mode by default with a light toggle — with pages for the studio experience, investment, and gallery, and a Reserve booking flow with a validated inquiry form.",
    bullets: [
      "Designed the full visual system: Playfair Display headlines, Cormorant body text, and script accents, with a rose primary colour used as an accent over near-black and cream.",
      "Built glassmorphism surfaces (frosted glass navbar and hero cards with hairline borders and inset highlights) in Next.js + Tailwind CSS.",
      "Reserve inquiry flow with the same validation discipline as a production booking form, including a honeypot spam trap.",
      "Dark mode is the default theme (rendered server-side, no flash on load) with a stored-preference light toggle.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jaelyncuellar/vera-rose-studio",
    featured: true,
    onResume: false,
  },
  {
    slug: "salon-booking",
    title: "Sun Tanning Salon",
    role: "Web Developer",
    period: "Jun 2026 – Sep 2026",
    company: "Electric Sun Tanning",
    category: "client",
    images: [
      "/images/salon-booking/home.webp",
      "/images/salon-booking/booking.webp",
      "/images/salon-booking/admin.webp",
      "/images/salon-booking/services.webp",
      "/images/salon-booking/mobile.webp",
    ],
    description:
      "Custom Salon Booking & Analytics platform built for Electric Sun Tanning, a local Caldwell, Idaho tanning salon — a React/TypeScript web app with online booking (a three-step flow: service, date & time, details), service showcases for UV tanning, spray tanning, and the Glow Package savings program, plus a private admin dashboard with revenue analytics, service-mix charts, and booking management.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
    video: "/images/salon-booking/walkthrough.mp4",
    poster: "/images/salon-booking/home.webp",
    github: "https://github.com/jaelyncuellar/salon-booking-analytics",
    site: "https://www.electricsuntanningcaldwell.com",
    featured: true,
    onResume: false,
  },
  {
    slug: "cloud-cost-intelligence",
    title: "Cloud Cost Intelligence",
    role: "Software Engineer",
    period: "Summer 2023",
    category: "personal",
    images: [
      "/images/projects/cloud-cost-intelligence.webp",
    ],
    youtube: "https://www.youtube.com/watch?v=LZ-cErVn6Es",
    document: {
      label: "Cloud Arbitrage — project flyer (PDF)",
      href: "/files/cloud-arbitrage-flyer.pdf",
      image: "/images/cloud-cost-intelligence/flyer.webp",
    },
    description:
      "Cloud pricing analytics platform consuming live AWS and Azure spot pricing data for real-time infrastructure cost analysis.",
    tech: ["AWS", "Azure", "Python"],
    github: null,
    featured: false,
    onResume: false,
  },
  {
    slug: "perception-project",
    title: "Perception Project — ORB / RGB-D Feature Tracking",
    role: "Perception Engineer",
    category: "robotics",
    images: [
      "/images/projects/perception-orb.webp",
    ],
    description:
      "Computer-vision project exploring ORB feature detection and RGB-D feature tracking.",
    tech: ["Python", "OpenCV", "ORB", "RGB-D"],
    github: "https://github.com/jaelyncuellar/perception-project",
    featured: false,
    onResume: false,
  },
];

/** label shown above a project card */
export function projectKicker(p: Project): string | null {
  if (p.category === "robotics") return "Robotics & Perception · Portfolio project";
  if (p.category === "professional" && p.company)
    return `${p.company} · Professional experience`;
  if (p.category === "client" && p.company) return `${p.company} · Client work`;
  if (p.category === "client") return "Client work";
  return null;
}
