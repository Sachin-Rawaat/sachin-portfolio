export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  gridClass: string;
  status?: string;
  tags?: string[];
  overview?: string;
}

export interface CareerEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  badge: string;
  badgeColor: string;
  iconName: string;
  badgeIconName: string;
  details: string[];
}

export interface TechnicalSkill {
  name: string;
  level: number;
  iconName: string;
  color: string;
}

export interface ProfessionalTrait {
  name: string;
  iconName: string;
  color: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TechIcon {
  name: string;
  icon: string;
}

export const portfolioContent = {
  personal: {
    initials: "SR",
    name: "Sachin Rawat",
    title: "Portfolio",
    role: "Software Engineer & AI Engineer",
    availability: "Available for work",
    heroGreeting: "Hi, I'm",
    heroDescription:
      "I build high-performance full-stack web applications and intelligent AI solutions. Specialized in end-to-end modern systems with seamless user experiences.",
    heroCtaPrimary: "View Work",
    heroCtaSecondary: "Certificate",
    certificateUrl: "/assets/sachin-certificate.pdf",
    certificateImage: "/assets/sachin-certificate.png",
    badgeDetails: {
      id: "SR-89240-PRO",
      specialty: "Full-Stack Development",
      location: "India",
      experience: "3+ Years",
      status: "Active",
      avatar: "/assets/sachin-rawat.jpg",
      companyTag: "SOFTWARE & AI",
    },
    contact: {
      email: "sksachin8998@gmail.com",
      phone: "+91 7827692500",
      location: "India",
    },
    socials: [
      { platform: "twitter", href: "https://x.com/home", label: "Twitter" },
      { platform: "github", href: "https://github.com/Sachin-Rawaat", label: "GitHub" },
      { platform: "linkedin", href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    ],
  },

  navItems: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ],

  dockItems: [
    { icon: "home", label: "Home", href: "#hero" },
    { icon: "user", label: "About", href: "#about" },
    { icon: "briefcase", label: "Services", href: "#services" },
    { icon: "folder", label: "Projects", href: "#projects" },
    { icon: "graduation", label: "Skills", href: "#skills" },
    { icon: "messageSquare", label: "Testimonials", href: "#testimonials" },
    { icon: "mail", label: "Contact", href: "#contact" },
  ],

  techStack: [
    // Core Programming Languages
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },

    // AI & Machine Learning
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenAI & LLMs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" },

    // Frontend Frameworks
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },

    // Backend & APIs
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },

    // Databases
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },

    // Cloud & DevOps Tools
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  ],

  about: {
    heading: "Passionate about",
    headingHighlight: "Digital Excellence",
    bio: "I am a passionate Full-Stack Developer and AI Engineer with over 3+ years of experience delivering high-quality software solutions and intelligent systems. My expertise focuses on designing and deploying scalable web architectures and seamless AI integrations.",
    stats: [
      { value: "3+", label: "Years Experience", iconName: "award" },
      { value: "15+", label: "Projects Completed", iconName: "check" },
      { value: "50+", label: "Happy Clients", iconName: "users" },
      { value: "2", label: "Global Brands", iconName: "globe" },
    ],
  },

  services: {
    heading: "What I Do",
    subtitle: "Specialized engineering domains delivering production-ready, intelligent, and scalable digital solutions.",
    items: [
      {
        id: "fullstack",
        title: "Full-Stack Development",
        description: "Crafting end-to-end web applications with modern frontend architectures, robust APIs, and high-performance databases.",
        iconName: "fullstack",
        badge: "Web & Mobile",
      },
      {
        id: "software-eng",
        title: "Software Engineering",
        description: "Writing clean, maintainable, and type-safe code using robust design patterns, automated testing, and CI/CD pipelines.",
        iconName: "software",
        badge: "Core Systems",
      },
      {
        id: "ai-eng",
        title: "AI & Machine Learning",
        description: "Building intelligent AI agents, fine-tuning LLMs, neural networks, and integrating generative AI into production products.",
        iconName: "ai",
        badge: "GenAI & LLMs",
      },
      {
        id: "cloud-devops",
        title: "Cloud & DevOps Architecture",
        description: "Deploying resilient containerized microservices, serverless workflows, automated scaling, and cloud infra on AWS & Docker.",
        iconName: "cloud",
        badge: "Infrastructure",
      },
    ],
  },

  projects: {
    heading: "Selected",
    headingHighlight: "Works",
    subtitle: "A showcase of complex systems, intelligent tools, and scalable applications currently in active development.",
    items: [
      {
        id: 1,
        title: "AI-Powered Design Platform",
        subtitle: "Generative assets and automated scaling for e-commerce platforms",
        link: "#",
        status: "In Progress",
        tags: ["Next.js", "Python", "Generative AI", "Tailwind CSS"],
        overview: "Building an automated generative platform for high-converting marketing creative assets and instant image synthesis.",
        image: "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg?auto=compress&cs=tinysrgb&w=1200",
        gridClass: "md:col-span-7 h-[420px]",
      },
      {
        id: 2,
        title: "Global E-Learning",
        subtitle: "Serving 1.2M+ active students worldwide",
        link: "#",
        status: "In Progress",
        tags: ["React", "Node.js", "PostgreSQL", "WebRTC"],
        overview: "Architecting a high-throughput video learning and interactive classroom management engine with low-latency streaming.",
        image: "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&w=1200",
        gridClass: "md:col-span-5 h-[420px]",
      },
      {
        id: 3,
        title: "Modular ERP System",
        subtitle: "Enterprise logistics & supply chain manufacturing engine",
        link: "#",
        status: "In Progress",
        tags: ["TypeScript", "Docker", "FastAPI", "MongoDB"],
        overview: "Designing a modular inventory, supply chain logistics, and real-time resource tracking backend system.",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",
        gridClass: "md:col-span-5 h-[360px]",
      },
      {
        id: 4,
        title: "Fintech Predictive Dashboard",
        subtitle: "Real-time analytics, algorithmic trading & risk modeling",
        link: "#",
        status: "In Progress",
        tags: ["PyTorch", "React", "Redis", "Financial APIs"],
        overview: "Developing machine learning risk forecasting dashboards with real-time streaming tickers and predictive market sentiment analysis.",
        image: "https://images.pexels.com/photos/6169673/pexels-photo-6169673.jpeg?auto=compress&cs=tinysrgb&w=1200",
        gridClass: "md:col-span-7 h-[360px]",
      },
    ],
  },

  career: {
    title: "Career Journey",
    subtitle: "An evolving path of leadership, innovation, and impact",
    events: [
      {
        year: "2024 – Present",
        title: "Director of Product Engineering",
        subtitle: "TechNova Global Solutions",
        description:
          "Leading a 200+ engineering team across 5 continents, overseeing full product lifecycle from ideation to global deployment. Introduced AI-driven development pipelines, reducing time-to-market by 38%. Established enterprise-wide accessibility and sustainability design standards.",
        iconName: "rocket",
      },
      {
        year: "2020 – 2024",
        title: "Senior Principal Engineer & Design Strategist",
        subtitle: "Innova Digital Labs",
        description:
          "Architected scalable microservices for financial and healthcare industries, serving 20M+ active users. Directed the adoption of a unified design system across 12 product lines, increasing brand consistency and dev speed by 50%. Mentored 40+ senior engineers into leadership positions.",
        iconName: "cpu",
      },
      {
        year: "2016 – 2020",
        title: "Lead Full-Stack Developer",
        subtitle: "Skyline Interactive",
        description:
          "Spearheaded the creation of immersive web applications using React, GraphQL, and Node.js for high-profile clients. Reduced application load times by 70% through advanced performance optimization. Introduced component-driven workflows that became the company's standard practice.",
        iconName: "terminal",
      },
      {
        year: "2012 – 2016",
        title: "Senior UI/UX Designer",
        subtitle: "PixelForge Studios",
        description:
          "Designed award-winning digital experiences for global brands, winning multiple Awwwards and Webby Awards. Championed user-centered design by integrating continuous feedback loops into every sprint. Collaborated with cross-functional teams to unify visual and interaction design.",
        iconName: "palette",
      },
      {
        year: "2008 – 2012",
        title: "Frontend Developer & Interaction Designer",
        subtitle: "CreativeSpark Agency",
        description:
          "Built responsive and interactive marketing websites during the rise of mobile-first design. Created high-conversion landing pages for major e-commerce campaigns. Developed custom animations that improved user engagement metrics by over 45%.",
        iconName: "sparkles",
      },
    ],
  },

  education: {
    heading: "Academic",
    headingHighlight: "Background",
    subtitle:
      "Building the theoretical foundation and research methodologies that empower high-performance practical engineering.",
    items: [
      {
        degree: "M.Sc. in Computer Science",
        school: "University of Chennai",
        year: "2016 – 2018",
        badge: "IEEE Published Author",
        badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        iconName: "graduation",
        badgeIconName: "award",
        details: [
          "Specialized in Software Architecture, Distributed Systems, and AI Applications",
          "Thesis on Machine Learning for Predictive Analytics & Neural Optimization",
          "Led enterprise research project on Cloud-Based ERP microservices",
          "Published 2 peer-reviewed research papers in IEEE international conferences",
        ],
      },
      {
        degree: "B.Sc. in Information Technology",
        school: "Anna University",
        year: "2013 – 2016",
        badge: "Top 5% Honors",
        badgeColor: "text-primary bg-primary/10 border-primary/30",
        iconName: "bookOpen",
        badgeIconName: "star",
        details: [
          "Gained rigorous foundation in Systems Programming, Networking & DB Management",
          "Ranked in top 5% across Software Engineering & Algorithms coursework",
          "Architected campus-wide digital library management system",
          "Organized and chaired annual technical symposium for 3 consecutive years",
        ],
      },
    ],
  },

  skills: {
    heading: "Core Technical Skills",
    technical: [
      {
        name: "Python & Machine Learning",
        level: 94,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        colorTheme: "amber",
        barGradient: "from-amber-400 via-yellow-400 to-orange-500",
        glowColor: "rgba(245, 158, 11, 0.4)",
        textColor: "text-amber-400",
      },
      {
        name: "Full-Stack (React & Next.js)",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        colorTheme: "cyan",
        barGradient: "from-cyan-400 via-sky-400 to-blue-500",
        glowColor: "rgba(56, 189, 248, 0.4)",
        textColor: "text-cyan-400",
      },
      {
        name: "AI Engineering & LLMs (PyTorch)",
        level: 91,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        colorTheme: "rose",
        barGradient: "from-rose-500 via-pink-500 to-red-500",
        glowColor: "rgba(244, 63, 94, 0.4)",
        textColor: "text-rose-400",
      },
      {
        name: "Backend Architecture (Node.js & Express)",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        colorTheme: "emerald",
        barGradient: "from-emerald-400 via-green-500 to-teal-500",
        glowColor: "rgba(16, 185, 129, 0.4)",
        textColor: "text-emerald-400",
      },
      {
        name: "TypeScript & Software Engineering",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        colorTheme: "blue",
        barGradient: "from-blue-500 via-indigo-500 to-sky-400",
        glowColor: "rgba(59, 130, 246, 0.4)",
        textColor: "text-blue-400",
      },
      {
        name: "Databases (PostgreSQL & MongoDB)",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        colorTheme: "purple",
        barGradient: "from-purple-500 via-fuchsia-500 to-violet-600",
        glowColor: "rgba(168, 85, 247, 0.4)",
        textColor: "text-purple-400",
      },
      {
        name: "Cloud & DevOps (AWS & Docker)",
        level: 86,
        icon: "/icons/aws.svg",
        colorTheme: "orange",
        barGradient: "from-orange-500 via-amber-500 to-yellow-500",
        glowColor: "rgba(249, 115, 22, 0.4)",
        textColor: "text-orange-400",
      },
    ],
    professional: [
      { name: "Full-Stack Development", iconName: "puzzle", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
      { name: "AI Agent Workflows", iconName: "target", color: "text-rose-400 border-rose-500/30 bg-rose-500/10" },
      { name: "REST & GraphQL APIs", iconName: "refresh", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
      { name: "System Architecture", iconName: "flag", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
      { name: "Clean Code & Testing", iconName: "heart", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
      { name: "Team Leadership", iconName: "users", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    ],
  },

  testimonials: {
    heading: "Client",
    headingHighlight: "Testimonials",
    subtitle: "Endorsements from executives and engineering leaders on software delivery & AI solutions.",
    items: [
      {
        name: "Sarah Jenkins",
        role: "CTO at InnovateX",
        initials: "SJ",
        badge: "Full-Stack Web App",
        content:
          "Sachin delivered a high-performance full-stack web application with React and Node.js. His clean architecture reduced our server response times by 55% and delivered an exceptionally smooth user experience.",
      },
      {
        name: "David Chen",
        role: "Founder, Peak Analytics",
        initials: "DC",
        badge: "AI Agent & LLMs",
        content:
          "Sachin integrated intelligent AI agent workflows and custom LLM pipelines into our platform. His expertise in Python, PyTorch, and vector databases turned complex data into instant predictive insights.",
      },
      {
        name: "Maria Rodriguez",
        role: "Product Lead, Fintech Nexus",
        initials: "MR",
        badge: "Cloud & APIs",
        content:
          "Exceptional engineering execution. Sachin engineered robust microservices and AWS cloud infrastructure with zero downtime. His attention to code quality and database scaling is top-notch.",
      },
    ],
  },

  contact: {
    heading: "Let's",
    headingHighlight: "Connect",
    subtitle:
      "If you want to build a custom website, scalable web application, or need any engineering work related to my skills, feel free to reach out or email me directly. I will get back to you as soon as possible!",
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "",
      phoneLabel: "Mobile / Phone Number",
      phonePlaceholder: "",
      emailLabel: "Your Email Address",
      emailPlaceholder: "",
      subjectLabel: "Subject / Project Scope",
      subjectPlaceholder: "",
      messageLabel: "Your Message",
      messagePlaceholder: "",
      submitButton: "Send Message",
    },
  },

  footer: {
    badge: "Innovate & Build",
    morphingTitles: [
      "Software Engineer",
      "AI Engineer",
      "Full-Stack Developer",
      "System Architect",
      "Sachin Rawat",
    ],
    links: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    copyright: "© 2026 Sachin Rawat. All rights reserved.",
  },
};
