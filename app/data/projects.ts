import { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "omits-19th",
    title: "OMITS 19th | Web Dev Lead",
    description:
      "Fullstack registration and analytics platform for OMITS 19th, engineered with Next.js and Go (Golang) microservices, supporting 1,900+ registrants.",
    longDescription:
      "Web-based registration and management platform for OMITS 19th. Engineered to deliver top performance under high concurrent traffic. Features include:\n• Dedicated landing page, about page, and competition-specific landing pages introducing OMITS 19th.\n• Multi-tier registration forms for school-level (SD, SMP, SMA) and university-level (Mahasiswa) participants.\n• Admin dashboard for participant verification, attendance (presensi) tracking, shortlink generation, voucher codes, and detailed registrant insights.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Golang", "PostgreSQL"],
    roleTags: ["Web Dev Lead"],
    image: "/projects/omits-19th.png",
    demoUrl: "https://omits-himatika.com",
    featured: true,
    role: "Web Dev Lead",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "gerigi-expo-2026",
    title:
      "GERIGI X UKM EXPO ITS 2026 | Secretary & Treasurer of Web Development",
    description:
      "Official orientation and student expo platform for ITS, handling high-concurrency event workflows for over 7,000 incoming students.",
    longDescription:
      "Served as Secretary & Treasurer of Web Development, collaborating closely with the Division Head to coordinate the Web Development team, monitor project milestones, and manage divisional administration and budget documentation, alongside developing full-stack features for the platform. Features include:\n• Landing page and a simplified LinkHub page for quick access to important links.\n• Real-time Group Placement Checker (Cari Unit), powered by Convex.\n• UKM Finder, an interactive quiz recommending student clubs based on each student's interests.\n• Informational content hub covering Maba 101 recommendations, a Survival Kit, an interactive Campus Map, and merchandise info.\n• Installable PWA enabling smooth access under offline or low-signal conditions.\n• CMS-style admin dashboard for managing all content without redeploying code.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Convex", "PWA"],
    roleTags: ["Secretary", "Treasurer"],
    image: "/projects/gerex.png",
    demoUrl: "https://gerigixukmexpoits.id",
    featured: true,
    role: "Secretary & Treasurer",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "ini-lho-its-2026",
    title: "Ini Lho ITS! 2026 | Frontend",
    description:
      "University exploration platform for INI LHO ITS! 2026, covering tryout and Open Campus registration/ticketing forms and major-matching quizzes, with 6,700+ tryout registrants.",
    longDescription:
      "A web-based platform supporting participant registration, exploration, and information management for the INI LHO ITS! 2026 campus introduction event. It combines multiple informational landing pages covering campus programs, schedules, and event details with an account-based user dashboard where students fill out tryout and Open Campus registration/ticketing forms and take the Ini Lho Jurusanmu major-matching quiz, alongside an admin dashboard for managing participant, payment, and registration data.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/ini-lho-its.png",
    demoUrl: "https://inilho.its.ac.id",
    featured: true,
    role: "Frontend Developer",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "petrolida-2026",
    title: "Petrolida 2026 | Frontend",
    description:
      "Event registration and official merchandise e-commerce portal built for the Petrolida 2026 international exposition, supporting 900+ participants.",
    longDescription:
      "Web platform supporting participant registration and information management for PETROLIDA 2026. Features include:\n• Informative landing page to introduce PETROLIDA 2026 events.\n• Account-based dashboard (sign-up & login) for competition, non-competition, and merchandise registration.\n• Multi-category registration workflow covering competitions and non-competitive activities like talkshows and seminars, plus custom e-commerce checkout for official merchandise.\n• Unified dashboard for user and admin data/transaction management.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/petrolida.png",
    role: "Frontend Developer",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "futurest-2026",
    title: "Futurest 2026 | Frontend",
    description:
      "Competition registration and organizer management hub built for the FUTUREST 2026 energy summit, supporting 150+ participants.",
    longDescription:
      "Web platform supporting participant registration and information management for FUTUREST 2026. Features include:\n• Informative landing page introducing FUTUREST 2026 events.\n• Account-based dashboard (sign-up & login) for competition registration and virtual ticket access.\n• Secure, multi-category competition registration system with abstract and credential uploads.\n• Admin dashboard to manage registration data and review submissions.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/futurest.png",
    role: "Frontend Developer",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "omits-18th",
    title: "OMITS 18th | Frontend",
    description:
      "Web-based registration and information platform for Olimpiade Matematika ITS (OMITS) 18th, servicing over 1,500 students.",
    longDescription:
      "Web-based registration and management platform for Olimpiade Matematika ITS (OMITS) 18th. Designed to streamline the registration pathway for participants and provide administrators with powerful management tools. Features include:\n• Landing page and about page introducing OMITS 18th and its competition categories.\n• Multi-category registration for Junior High, Senior High, and Team-based contestants, including team formation for group entries.\n• Automated payment confirmation via Midtrans integration.\n• Admin dashboard for participant management, shortlink generation, and analytical data tracking.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/omits-18th.png",
    role: "Frontend Developer",
    type: "Web Application",
    year: "2025",
    status: "Completed",
  },
  {
    id: "quiz-math-app",
    title: "Interactive Math Quiz App",
    description:
      "An interactive web-based mathematics quiz platform featuring dynamic API integration, local state persistence, and a countdown timer.",
    longDescription:
      "An interactive and modern mathematics quiz platform designed to test users' mathematical knowledge. Built with a fast, client-side gameplay flow and robust state-preservation mechanisms. Key features include:\n• Local Authentication: Simple username-based login stored in localStorage.\n• OpenTDB API Integration: Dynamic question retrieval from the Open Trivia Database (OpenTDB).\n• Customizable Sessions: Interactive configuration screen to select quiz difficulty before starting.\n• Countdown Timer: Interactive countdown timer that automatically completes the quiz upon expiration.\n• Auto-Resume: Automatic state saving to localStorage so users can resume their quiz session if the browser refreshes or closes.\n• Detailed Results Dashboard: Clear post-quiz statistics indicating correct/incorrect answers and completion rates.\n• Quiz History: A dashboard tracking past quiz attempts and performance statistics over time.",
    tags: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Quiz App"],
    image: "/projects/quiz-math.png",
    demoUrl: "https://quiz-math-app.vercel.app/",
    githubUrl: "https://github.com/Fikri982/quiz-app",
    role: "Solo Developer",
    type: "Web Application",
    year: "2026",
    status: "Completed",
  },
  {
    id: "realtime-pos",
    title: "Realtime Point of Sales",
    description:
      "A dynamic retail point-of-sale system with instant transaction sync, responsive interfaces, and CRUD management.",
    longDescription:
      "A web-based retail point-of-sale system featuring real-time data synchronization. Facilitates daily store operations with a clean cashier and admin interface. Features include:\n• Real-time transaction updates powered by Supabase.\n• Full CRUD management for menus, orders, user data, and table layouts.\n• Responsive sales dashboard for cashiers, admins, and kitchen staff.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    image: "/projects/project-2.png",
    githubUrl: "https://github.com/Fikri982/realtime-point-of-sales",
    role: "Fullstack Developer",
    type: "Web Application",
    year: "2025",
    status: "Completed",
    hidden: true,
  },
  {
    id: "sre-its",
    title: "SRE ITS Official Website | Director of Web Development",
    description:
      "Official website for SRE ITS, evolved from frontend feature work into leading the division's entire web development roadmap.",
    longDescription:
      "Ongoing official web platform for SRE ITS (Society of Renewable Energy ITS). Started as a Web Development Staff member enhancing and maintaining the site, then promoted to Director of Web Development overseeing the division's technical roadmap. Features include:\n• Responsive, reusable frontend components integrated with RESTful APIs for dynamic content.\n• Structured development roadmap, sprint timelines, and project milestones.\n• Cross-team coordination across UI/UX, Frontend, and Backend throughout the development lifecycle.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "REST API"],
    roleTags: ["Director of Web Development"],
    image: "/projects/project-3.png",
    role: "Director of Web Development",
    type: "Organization Website",
    year: "2025 — Present",
    status: "Ongoing",
    hidden: true,
  },
];
