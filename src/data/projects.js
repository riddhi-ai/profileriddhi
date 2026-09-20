/**
 * PROJECTS DATA STORE
 * 
 * To add a new project, simply append a new object to this array.
 * The portfolio automatically handles card rendering, category filtering,
 * modal case studies, and thumbnail fallbacks!
 */

export const projects = [
  {
    id: "qure-d",
    slug: "qure-d",
    title: "Qure-d",
    tagline: "AI-Powered Health Guidance Platform",
    category: "AI • Health • Product",
    filterCategory: "AI",
    description: "An AI-powered health guidance platform designed to help users better understand, organize, and correlate their personal health data into clear, doctor-ready insights.",
    background: "/images/qure-d-background.png",
    thumbnail: "/images/qure-d-mobile.jpg",
    qrCode: "/images/qure-d-qr.png",
    gallery: [
      {
        title: "Mobile App Interface",
        url: "/images/qure-d-mobile.jpg",
        caption: "Live mobile app view with full symptom checker, medication tracking, and AI health navigation"
      },
      {
        title: "Scan to Open on Mobile",
        url: "/images/qure-d-qr.png",
        caption: "Scan QR code with your phone camera to launch qure-d.base44.app"
      },
      {
        title: "Aavishkar Research Poster",
        url: "/images/qure-d-poster.jpg",
        caption: "Aavishkar 2025–26 research convention presentation — Medicine & Pharmacy category"
      }
    ],
    featured: true,
    year: "2025",
    metrics: "100+ Users",
    achievement: "District/University-Level Winner → State-Level Finalist — Aavishkar 2025–26",
    technologies: ["React.js", "JavaScript", "Python", "Tailwind CSS"],
    liveUrl: "https://qure-d.base44.app",
    githubUrl: "https://github.com/riddhi-ai",
    caseStudy: {
      overview: "Qure-d bridges the communication gap between individuals and healthcare providers. It provides an intuitive, empathetic interface to record ongoing symptoms, correlate them with medications, and generate structured health summaries.",
      problem: "People often experience scattered symptoms over weeks or months, but struggle to articulate timeline specifics, medication dosages, and side-effects during brief doctor consultations.",
      idea: "What if a friendly AI-guided companion could help patients log symptoms in plain language, track trends over time, and format findings into structured, doctor-ready reports?",
      solution: "Built a responsive web dashboard combining AI-assisted symptom intake, an interactive patient health timeline, medication tracking with dosage schedules, and multi-profile support for family caregivers.",
      keyFeatures: [
        "AI-assisted natural language symptom analysis",
        "Visual health timeline tracking over time",
        "Medication & symptom correlation engine",
        "Exportable, structured doctor-ready health summaries",
        "Multi-profile caregiver support for family health management"
      ],
      technologies: [
        "React.js (Frontend component architecture & reactive state)",
        "Tailwind CSS (Accessible, modern responsive styling)",
        "Python (Backend data parsing & correlation algorithms)",
        "JavaScript (Dynamic client-side charting & interactive flows)"
      ],
      challenges: "Designing an interface that feels reassuring and clean rather than clinical or overwhelming, while ensuring patient inputs remain easy to understand for diverse age groups.",
      learnings: "Deepened practical knowledge of full-stack integration, building accessible forms with micro-feedback, and transforming complex healthcare data into clean visual timelines.",
      outcome: "Successfully onboarded 100+ users and won District/University-Level honors, progressing as a State-Level Finalist in Aavishkar 2025–26."
    }
  },
  {
    id: "brightsmile",
    slug: "brightsmile",
    title: "BrightSmile",
    tagline: "Dental Clinic Web Platform",
    category: "Frontend • Healthcare",
    filterCategory: "Frontend",
    description: "A responsive, modern dental clinic web platform crafted to offer patients a frictionless experience for exploring treatments, viewing doctor profiles, and scheduling appointments.",
    thumbnail: "/images/brightsmile.png",
    gallery: [
      {
        title: "Clinic Web Platform",
        url: "/images/brightsmile.png",
        caption: "Live web storefront featuring patient appointment booking, doctor profiles, and emergency dental support"
      },
      {
        title: "Treatment & Services Catalog",
        url: "/images/brightsmile-services.png",
        caption: "Transparent dental treatment guides with procedures and pricing breakdown"
      },
      {
        title: "Specialist Doctors & Reviews",
        url: "/images/brightsmile-doctors.png",
        caption: "Credentials, clinic schedules, and verified patient reviews"
      }
    ],
    featured: false,
    year: "2025",
    metrics: "Responsive Multi-step UI",
    achievement: "",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://brightsmilewb.netlify.app/",
    githubUrl: "https://github.com/riddhi-ai",
    caseStudy: {
      overview: "BrightSmile is a patient-centric dental clinic web application designed to modernize traditional clinic websites with smooth appointment scheduling, clear transparent care information, and intuitive location discovery.",
      problem: "Many local healthcare websites are clunky, lack mobile optimization, and make booking appointments frustrating with complicated multi-page forms.",
      idea: "Create a welcoming, lightning-fast digital storefront that feels soothing, transparent, and effortlessly guides patients from browsing services to booking an appointment in under a minute.",
      solution: "Developed an interactive single-page application with a multi-step booking stepper, interactive treatment galleries, transparent doctor profiles, and integrated Google Maps location discovery.",
      keyFeatures: [
        "Comprehensive dental treatment catalog with visual guides",
        "Specialist doctor profiles with credentials and patient reviews",
        "Interactive multi-step appointment booking calendar",
        "Fully responsive layout optimized for mobile patients",
        "Interactive Google Maps & clinic contact integration",
        "Emergency dental care guidance & preventive dental tips"
      ],
      technologies: [
        "React.js (Component-based architecture & stateful booking stepper)",
        "Vite (Next-generation lightning-fast build tooling)",
        "Tailwind CSS (Mobile-first responsive styling & soothing color palette)",
        "JavaScript (Client-side validation, appointment slot filtering)"
      ],
      challenges: "Balancing an approachable, soothing aesthetic with clear medical service information and ensuring form validation works seamlessly on small mobile screens.",
      learnings: "Mastered component reusability, responsive card grid design patterns, and creating intuitive step-by-step user conversion funnels.",
      outcome: "A fully responsive, production-ready healthcare web application template with smooth mobile ergonomics."
    }
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "AI", label: "AI & Data" },
  { id: "Frontend", label: "Frontend & Web" },
];
