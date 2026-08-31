import { CaseStudy } from "@/app/types/caseStudy";

export const caseStudies: Record<string, CaseStudy> = {
  "omits-19th": {
    overview:
      "OMITS 19th (Olimpiade Matematika ITS) is a prestigious national mathematics competition. Under my leadership as the Web Development Lead, our team was tasked with building a robust, high-performance web registration portal and contestant dashboard to manage registration workflows and payments for 1,900+ school-level (SD, SMP, SMA) and university-level (Mahasiswa) students across Indonesia.",
    challenge:
      "The biggest challenge wasn't purely technical. It was about people, since this was my debut as a Web Dev Lead. I had to learn how to coordinate a cross-functional team of 10 across UI/UX, frontend, and backend, delegate tasks effectively, and keep sprints on track, all while still contributing hands-on to the codebase myself.",
    features: [
      "Informational Pages: Dedicated landing page, about page, and competition-specific landing pages introducing OMITS 19th and its programs.",
      "Multi-Tier Registration: Streamlined registration flow for school-level students (SD, SMP, SMA) and university-level (Mahasiswa) contestants, each with tailored requirements.",
      "Admin Management Tools: Centralized tools for admins to verify participants, generate shortlinks, track attendance (presensi), and issue voucher codes.",
      "Insight & Analytics Dashboard: Detailed reporting on registrant counts and regional demographics for the organizing committee.",
    ],
    roleContribution:
      "As the Web Dev Lead, I led a cross-functional team of 10, made up of three UI/UX designers, three frontend developers, and four backend engineers, through sprint planning and code reviews. I personally scoped out database schemas, managed frontend-backend communication protocols, set up the server repository, and implemented the primary state workflows for registration validation.",
    techDecisions:
      "We selected Next.js for the frontend to leverage static generation for the landing pages, mixed with dynamic client-side rendering for the contestant dashboards. The backend was powered by Go (Golang) for speed, efficiency, and light memory usage, storing analytical assets inside PostgreSQL.",
    outcomeImpact: [
      "Successfully launched the registration platform on schedule, onboarding 1,900+ participants smoothly with zero server downtime throughout the active registration period.",
      "Attracted around 20,000 active site visitors tracked via Google Analytics, reflecting strong reach beyond registered participants.",
      "Automated payment confirmation through Midtrans integration removed the need for manual admin verification, speeding up the registration approval process.",
      "Integrated search and filtering tools gave the organizing committee instant visibility into registrant and voucher usage data.",
    ],
  },
  "realtime-pos": {
    overview:
      "Realtime Point of Sales is a modern retail POS application built to facilitate seamless cash register operations, instant menu changes, and synchronised order sheets across cashier screens, admin portals, and kitchen display terminals.",
    challenge:
      "Maintaining state synchronization is critical for retail POS networks. If a cashier enters an order, the kitchen terminal must receive it instantly without polling delays, and inventory counts must decrease immediately to prevent double-ordering of limited stock items.",
    features: [
      "Real-time Inventory Alerts: Instant dashboard updates when menu ingredients drop below minimum thresholds.",
      "Order Workflow Monitor: Staggered view tracking order status from 'Pending', 'Preparing', to 'Completed' in real-time.",
      "Interactive Table Layouts: Draggable grid maps helping waitstaff bind order lists to physical dining tables.",
    ],
    roleContribution:
      "I built this system as a full-stack showcase project. I designed the schema structures, optimized indices for fast invoice lookups, and implemented client-side state managers to handle instant state feeds.",
    techDecisions:
      "Next.js and Tailwind CSS were chosen to assemble a clean, dashboard UI. I integrated Supabase for storage and PostgreSQL real-time replication channels to handle immediate order syncs without writing complex web-socket wrapper code.",
    outcomeImpact: [
      "Enabled instant order syncing under 100ms across multiple cashier and kitchen devices.",
      "Designed a highly responsive UI that functions optimally on iPads, POS terminals, and smartphones.",
    ],
  },
  "ini-lho-its-2026": {
    overview:
      'Ini Lho ITS! 2026 is the official university exploration and promotional event aimed at introducing the Sepuluh Nopember Institute of Technology to high school graduates. The web platform serves as the central hub for campus exploration, combining informational landing pages with a unified user dashboard where students fill out tryout and Open Campus registration/ticketing forms and take the "Ini Lho Jurusanmu" major-matching quiz.',
    challenge:
      "Scale and scope were the twin challenges. Beyond registering, verifying, and outputting results for over 6,700 tryout students in a highly compressed timeline, the platform also had to unify tryout and Open Campus registration/ticketing forms with quiz-taking inside a single user dashboard without conflicting data or confusing UX, while giving admins a clear view across all three flows.",
    features: [
      "Informational Landing Pages: Multiple public-facing pages covering campus programs, schedules, and event details.",
      'User Dashboard: An account-based hub (sign-up & login) where students fill out tryout and Open Campus registration/ticketing forms and take the "Ini Lho Jurusanmu" major-matching quiz.',
      "Admin Dashboard: Tools for committee members to manage participants, verify payments, and export registration and ticketing data.",
    ],
    roleContribution:
      "As a core Frontend Developer, I translated high-fidelity Figma specifications into clean code across the platform's landing pages, its account-based user dashboard covering tryout and Open Campus registration/ticketing forms and the Ini Lho Jurusanmu quiz, and the admin dashboard, optimizing image loads and designing responsive forms that minimized participant friction at every step.",
    techDecisions:
      "Next.js and TypeScript were selected alongside Tailwind CSS to construct a glowing, premium visual layout with a mobile-first, fully responsive design, ensuring smooth accessibility for students across devices.",
    outcomeImpact: [
      "Successfully registered and managed demographics for more than 6,700 tryout participants, alongside quiz takers and Open Campus registrants.",
      "Unified tryout registration, Open Campus ticketing, and the Ini Lho Jurusanmu quiz into a single, easy-to-navigate user dashboard instead of juggling separate systems.",
    ],
  },
  "omits-18th": {
    overview:
      "OMITS 18th is the predecessor of the 19th edition math olympiad portal. It set the foundational web architecture for national registrations, proving the feasibility of shifting from traditional physical signup sheets to a centralized online framework.",
    challenge:
      "Moving a large-scale traditional math contest with multiple participant categories (Junior High, Senior High, Team-based) online required creating intuitive, flexible form structures that didn't confuse students.",
    features: [
      "Informational Pages: Landing page and about page introducing OMITS 18th and its competition categories.",
      "Multi-Category Registration: Registration flow for Junior High, Senior High, and Team-based contest categories, including team formation and management for group entries.",
      "Automated Payment Confirmation: Integrated Midtrans payment gateway for instant, verified transactions without manual admin review.",
      "Admin Dashboard: Tools for admins to manage participants, generate shortlinks, and track registration analytics.",
    ],
    roleContribution:
      "Serving as a Frontend Developer, I focused on slicing UI/UX designs into code and integrating backend APIs.",
    techDecisions:
      "Built using Next.js, TypeScript, and Tailwind CSS to guarantee a high-speed, modern, type-safe visual environment, using Figma for rapid component prototyping.",
    outcomeImpact: [
      "Pioneered online competition management for over 1,500 participants across Indonesia.",
      "Automated payment confirmation through Midtrans integration removed the need for manual admin verification, saving hours of administrative labor.",
    ],
  },
  "petrolida-2026": {
    overview:
      "Petrolida 2026 is an international energy exposition held annually by the SPE ITS Student Chapter. The website functions as the primary registration portal for multiple engineering competitions and non-competitive activities such as talkshows and seminars, and is integrated with a custom e-commerce shop for official Petrolida merchandise.",
    challenge:
      "The challenge was building a custom checkout system that supported multiple merchandise variations (sizes, shipping carriers, and discount coupon triggers) alongside handling strict competition rules and file verification templates, all behind a single account-based dashboard shared across competition, non-competition, and merchandise flows.",
    features: [
      "Informational Landing Pages: Public-facing pages introducing PETROLIDA 2026's programs, sponsors, and event details.",
      "Account-Based Dashboard: Sign-up & login system giving each participant a personal dashboard for registration and purchase history.",
      "Merchandise Checkout: Customized e-commerce shopping experience with instant invoice generation.",
      "Multi-Category Event Registrar: Separate validation portals for competitive tracks (Paper, Case Study, Oil Rig Design) and non-competitive activities such as talkshows and seminars.",
      "Admin Dashboard: Tools for organizers to manage participants, verify payments, and track merchandise and registration transactions.",
    ],
    roleContribution:
      "As a Frontend Developer on the IT team, I built the merchandise store interfaces, cart drawers, account authentication flows, and registration state systems, collaborating closely with backend engineers.",
    techDecisions:
      "Next.js and TypeScript were selected alongside Tailwind CSS to ensure fast load times, type-safe development, and clean component styling that matched SPE Petrolida's branding guidelines.",
    outcomeImpact: [
      "Supported seamless sign-ups for over 900 participants across international student chapters.",
      "Pioneered direct merchandising sales, yielding automated transaction tracking for the logistics division.",
    ],
  },
  "futurest-2026": {
    overview:
      "Futurest 2026 is a renewable energy summit centered on paper and case competitions for university students. The platform serves as the central hub for competition registration and information, backed by an account-based participant dashboard and an admin dashboard for managing secure participant and submission data.",
    challenge:
      "Ensuring contestant security and preventing data leaks during file uploads (abstract papers, identification scans, and transaction slips) was key, alongside providing administrators with a rapid data reviewer UI.",
    features: [
      "Informational Landing Pages: Public-facing pages introducing FUTUREST 2026's programs and event details.",
      "Account-Based Dashboard: Sign-up & login system giving each participant a personal dashboard with virtual entrance passes.",
      "Multi-Category Competition Registrar: Registration flow letting participants choose between Renewable Energy Innovation Idea (REII), Renewable Energy Paper Idea (REPI), and Business Case Competition (BCC) tracks, each with its own requirements.",
      "Admin Dashboard: Tools for organizers to manage registration data and review submissions.",
    ],
    roleContribution:
      "My contribution centered on slicing Figma designs into responsive frontend layouts and adding interactive animations to enhance the user experience across the platform, with minimal involvement in backend integration.",
    techDecisions:
      "Developed using Next.js, TypeScript, and Tailwind CSS to construct a clean, modern dark-themed web platform.",
    outcomeImpact: [
      "Streamlined registrations for over 150 energy summit contest participants.",
      "Delivered an admin dashboard giving organizers a centralized view to manage and review participant submissions across all three competition tracks.",
    ],
  },
  "gerigi-expo-2026": {
    overview:
      "GERIGI X UKM EXPO 2026 is the official freshmen orientation and university club exposition for the Sepuluh Nopember Institute of Technology. The platform serves as an all-in-one hub for freshman grouping, campus orientation content, and UKM (student club) discovery, all managed through a CMS-style admin dashboard and built as an installable, offline-capable PWA.",
    challenge:
      "The challenge was balancing two very different roles at once: managing divisional administration and budget documentation as Secretary & Treasurer, while also contributing hands-on to full-stack development for a platform supporting the digital experience of over 7,000 incoming ITS students. Resolving development roadblocks along the way required constant technical discussions and cross-functional communication with the Web Development team and other divisions.",
    features: [
      "Landing Page: Official informational homepage introducing GERIGI X UKM EXPO 2026 and its programs.",
      "LinkHub: A simplified link-in-bio style page consolidating important links for quick access.",
      "Group Placement Checker (Cari Unit): Let new students instantly look up their assigned guides and orientation groups in real time, powered by Convex.",
      "UKM Finder: An interactive quiz landing page that recommends suitable student clubs (UKM) based on each student's interests and results.",
      "Informational Content Hub: Maba 101 campus recommendations, a Survival Kit of event materials, an interactive Campus Map with event location pins, and merchandise info pages.",
      "PWA Offline Access: Installable Progressive Web App enabling smooth access under offline or low-signal conditions.",
      "Content Management Admin Dashboard: A CMS-style admin panel letting organizers manage all informational content, event materials, and campus map data without touching code.",
    ],
    roleContribution:
      "Serving as Secretary & Treasurer of Web Development, I collaborated closely with the Division Head to coordinate the Web Development team, monitor project milestones, and manage divisional administration and budget documentation, while also developing full-stack features and facilitating technical discussions to resolve development challenges throughout the project lifecycle.",
    techDecisions:
      "We built the application using React and Vite with Tailwind CSS for the client views, and integrated Convex for real-time reactive data queries, packaging the platform as a PWA (Progressive Web App) to deal with local cellular network congestion.",
    outcomeImpact: [
      "Helped deliver full-stack features (React, Vite, TypeScript, Tailwind CSS, Convex) supporting the digital experience of over 7,000 incoming ITS freshmen.",
      "Kept divisional budget documentation and project milestones on track alongside the Division Head.",
      "Facilitated technical discussions and cross-functional communication that resolved development challenges throughout the project lifecycle.",
    ],
  },
  "quiz-math-app": {
    overview:
      "Quiz App is a modern, interactive web-based quiz platform designed specifically to test users' capabilities and speed in mathematics trivia questions.",
    challenge:
      "The primary product challenge was dealing with interrupted sessions. If a user was in the middle of a 10-question math quiz and accidentally closed their browser or refreshed the page, their score, progress, and timer would be lost. We needed an automatic resume system.",
    features: [
      "Auto-Resume Engine: Seamless localStorage logging that stores remaining seconds and answers, letting users resume quiz sessions upon refresh.",
      "Dynamic Question API: Integrated OpenTDB endpoints to fetch random, categorized mathematics questions on demand.",
      "Interactive Countdown Timer: Staggered game mechanics that complete the session automatically when time runs out.",
      "Quiz History & Statistics: A dashboard tracking past quiz attempts, scores, and performance trends over time.",
    ],
    roleContribution:
      "This is my personal development project which I built entirely from the ground up, writing the code, organizing states, and deploying the application.",
    techDecisions:
      "Built with React 19, Vite, TypeScript, and the latest Tailwind CSS v4. Vite was chosen for lightning-fast HMR, TypeScript for robust types, and Tailwind CSS v4 for utility styling.",
    outcomeImpact: [
      "Successfully launched the project on Vercel, providing users with a frictionless quiz game flow.",
      "Achieved a 100% success rate in preserving game states across sudden browser resets.",
    ],
  },
  "sre-its": {
    overview:
      "SRE ITS (Society of Renewable Energy ITS) is a student organization at Institut Teknologi Sepuluh Nopember focused on renewable energy initiatives. Its official website serves as the primary information and engagement hub for the division's activities and outreach.",
    challenge:
      "The website needed continuous iteration — new features, performance improvements, and API integrations — while transitioning leadership and keeping delivery predictable across shifting contributor teams.",
    features: [
      "Reusable Component Library: Modular, responsive frontend components shared across pages to speed up feature delivery.",
      "RESTful API Integration: Dynamic content sourced from backend services for up-to-date information.",
      "Development Roadmap & Sprint Planning: Structured milestones guiding the Web Development Division's output.",
    ],
    roleContribution:
      "I started as a Web Development Staff member, translating UI/UX designs into responsive frontend components and integrating RESTful APIs. After stepping up as Director of Web Development, I now set the development roadmap, coordinate UI/UX, Frontend, and Backend teams, and mentor developers through code reviews and technical discussions.",
    techDecisions:
      "Built with Next.js and TypeScript for a maintainable, type-safe frontend, styled with Tailwind CSS, and connected to backend services via RESTful APIs for flexibility across features.",
    outcomeImpact: [
      "Delivered consistent feature and performance improvements to the official SRE ITS website.",
      "Established a structured development roadmap and mentoring process that improved delivery predictability across the Web Development Division.",
    ],
  },
};
