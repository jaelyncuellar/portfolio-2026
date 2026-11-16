# Jaelyn Cuellar - Portfolio

**Live site: [jaelyncuellar.com](https://jaelyncuellar.com)**

Personal portfolio and interactive CV of Jaelyn Cuellar, Software Engineer - Backend & Robotics Perception (Duke CS, AI & ML). The site presents her backend systems, healthcare platforms, booking systems, and robotics perception work as case studies with screenshots and walkthrough videos.

> From scalable systems to intelligent machines, I build what's next.

## What is on the site

- **Hero and About** - introduction, portrait, and background
- **Skills** - production tools grouped by discipline
- **Experience** - roles with scope, outcomes, and stack
- **Selected Work** - project case studies (below), each with its own page at `/projects/<slug>`
- **CV** - a full curriculum vitae page at `/cv`
- **Contact** - email and social links

## Projects featured

| Project | Case study | Code |
| --- | --- | --- |
| Detection + Tracking Pipeline | [jaelyncuellar.com/projects/detection-tracking-pipeline](https://jaelyncuellar.com/projects/detection-tracking-pipeline) | [GitHub](https://github.com/jaelyncuellar/detection-tracking-pipeline) |
| EKF Sensor Fusion - IMU + GPS | [jaelyncuellar.com/projects/ekf-sensor-fusion](https://jaelyncuellar.com/projects/ekf-sensor-fusion) | [GitHub](https://github.com/jaelyncuellar/ekf-sensor-fusion) |
| ROS 2 Mini Perception Stack | [jaelyncuellar.com/projects/ros2-perception-stack](https://jaelyncuellar.com/projects/ros2-perception-stack) | [GitHub](https://github.com/jaelyncuellar/ros2-mini-perception-stack) |
| Scalable URL Shortener (Snip) | [jaelyncuellar.com/projects/url-shortener](https://jaelyncuellar.com/projects/url-shortener) | [GitHub](https://github.com/jaelyncuellar/url-shortener) |
| Dream Theme Analyzer | [jaelyncuellar.com/projects/dream-theme-analyzer](https://jaelyncuellar.com/projects/dream-theme-analyzer) | Case study only |
| CareConnect - Healthcare Management Platform | [jaelyncuellar.com/projects/careconnect](https://jaelyncuellar.com/projects/careconnect) | [GitHub](https://github.com/jaelyncuellar/careConnect-web) |
| Vera Rose Studio | [jaelyncuellar.com/projects/vera-rose-studio](https://jaelyncuellar.com/projects/vera-rose-studio) | [GitHub](https://github.com/jaelyncuellar/vera-rose-studio) |
| Sun Tanning Salon - Salon Booking & Analytics | [jaelyncuellar.com/projects/salon-booking](https://jaelyncuellar.com/projects/salon-booking) | [GitHub](https://github.com/jaelyncuellar/salon-booking-analytics) |
| Cloud Cost Intelligence | [jaelyncuellar.com/projects/cloud-cost-intelligence](https://jaelyncuellar.com/projects/cloud-cost-intelligence) | Case study only |
| Perception Project - ORB / RGB-D Feature Tracking | [jaelyncuellar.com/projects/perception-project](https://jaelyncuellar.com/projects/perception-project) | [GitHub](https://github.com/jaelyncuellar/perception-project) |

Project data lives in one place: [`src/data/projects.ts`](src/data/projects.ts). The project images and videos shown on the case study pages are kept in step with the matching GitHub repos - each repo carries the same media files under its `docs/portfolio/` folder.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- Tailwind CSS 4, shadcn/ui and Radix primitives
- Framer Motion for animation, Lucide for icons
- Fraunces, self-hosted from `public/fonts/` - its small optical size is also the source of the squiggly J used in the hero and the favicon
- Static case study pages generated from the project data with `generateStaticParams`

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Repository structure

```text
public/
  images/          project screenshots, covers, and walkthrough videos
  files/           downloadable documents (project flyer PDF)
  fonts/           self-hosted Fraunces variable fonts
src/
  app/             routes - home, /cv, and /projects/[slug] case studies
  components/      hero, about, skills, experience, projects, contact, navbar, footer
  data/            profile, projects, experience, education, and skills content
  lib/             shared utilities
```

## Deployment

The site is deployed on Vercel from the `main` branch of this repository and served at [jaelyncuellar.com](https://jaelyncuellar.com).

## Contact

- Email: jluvcuellar@gmail.com
- GitHub: [github.com/jaelyncuellar](https://github.com/jaelyncuellar)
- LinkedIn: [linkedin.com/in/jaelyncuellar](https://linkedin.com/in/jaelyncuellar)
