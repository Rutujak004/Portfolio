// ─── Types ───────────────────────────────────────────────────────────────────

export interface Focus {
  label: string;
  icon: string; // lucide-react icon name
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  bio: string;
  bio2: string;
  photoUrl: string;
  focuses: Focus[];
}

export interface Skill {
  category: string;
  icon: string; // lucide-react icon name
  items: string[];
}

export interface Experience {
  year: string;
  role: string;
  org: string;
  desc: string;
  tags: string[];
}

export type ProjectStatus = "Live" | "Completed" | "Open Source";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  github: string;
  demo: string | null;
  status: ProjectStatus;
  featured: boolean;
  highlights: string[];
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
}

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Rutuja",
  lastName: "Kadam",
  title: "Full-Stack Engineer",
  tagline: "Building scalable application using Django ,Next.js and postgresql.",
  email: "rutujakadam9881@gmail.com",
  phone: "+91 83809 42069",
  location: "Nashik, Maharashtra, India",
  github: "https://github.com/Rutujak004",
  linkedin: "https://www.linkedin.com/in/rutujamskadam/",
  cvUrl: "/Rutuja_Kadam_CV.pdf",
  bio: "I'm a Rutuja Kadam ,a Computer Science Student (BE, 2022-2026) with dedication in full stack development and AI/ML. ",
  bio2: "During my internship at SPARD Technologies, I got the opportunity to work on real-world projects and develop my skills in full-stack development. Where I implementing authentication, real-time chat with WebSockets, REST APIs.",
  photoUrl: "/photo1.jpg",
  focuses: [
    { label: "Full-Stack Development", icon: "Layers" },
    { label: "NLP & AI Systems", icon: "Cpu" },
    { label: "API Design", icon: "Code2" },
    { label: "UI/UX Engineering", icon: "PenTool" },
  ],
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      "Python",
      "Django",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",

    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "NLP & Data",
    icon: "BrainCircuit",
    items: [
      "spaCy",
      "NLTK",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Named Entity Recognition",
      "Sentiment Analysis",
      "Text Classification",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    items: [
      "Git & GitHub",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Vercel",
      "Railway",
      "Postman",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    year: "Jan 2026 – Apr 2026",
    role: "Full Stack Web Developer Intern",
    org: "SPARD Technologies",
    desc: "Developed and maintained backend-driven web applications using Django, PostgreSQL, and REST APIs during an industry-focused internship at SPARD Technologies. Gained hands-on experience in designing backend services, integrating APIs, implementing secure authentication mechanisms, and ensuring seamless communication between frontend and backend systems. \n\n • Designed and validated RESTful APIs using Django REST Framework and Postman.\n • Implemented user authentication and authorization features.\n • Integrated frontend components with backend services.\n • Participated in collaborative development using Git and GitHub.\n • Contributed to building maintainable and scalable application structures.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "REST API", "Git", "GitHub"]
  },
  {
    year: "2022 – 2026",
    role: "BE Computer Science & Engineering",
    org: "Bachelor Of Engineering - Matoshri Collage Of Engineering Nashik ",
    desc: "",
    tags: ["FE CGPA:9.43", "SE CGPA:9.00", "TE CGPA:9.07", "BE CGPA:9.70"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "text-analyzer",
    title: "Text Analyzer",
    shortDesc:
      "An NLP-powered web app for deep text analysis including sentiment, entities, and readability.",
    fullDesc:
      "Text Analyzer is a full-stack application built with Next.js and a FastAPI backend that performs real-time NLP analysis on user-provided text. It surfaces sentiment scores, named entities, keyword extraction, and readability metrics through a clean, interactive dashboard. The system leverages HuggingFace's multilingual models to support both English and Marathi text.",
    tags: ["Next.js", "FastAPI", "spaCy", "HuggingFace", "Python", "TypeScript"],
    github: "https://github.com/Rutujak004/Text_Analyzer",
    demo: "https://nlp-text-analyzer.vercel.app",
    status: "Live",
    featured: true,
    highlights: [
      "Processes 500+ words per second using batched inference with spaCy and HuggingFace pipelines",
      "Supports English and Marathi text through multilingual transformer models",
      "Interactive entity highlighting with colour-coded NER visualization in the browser",
      "Deployed on Vercel (frontend) + Render (backend) with CI/CD via GitHub Actions",
    ],
  },
  {
    id: "bookflow",
    title: "BookFlow – Full-Stack Book Exchange & Communication Platform",
    shortDesc: "A full-stack web app enabling users to discover, manage, and exchange books with real-time chat.",
    fullDesc: "Developed a full-stack web application that enables users to discover, manage, and exchange books while interacting through real-time communication features. The platform provides secure authentication, book management, image uploads, and live messaging capabilities to enhance user engagement.",
    tags: ["Next.js", "Django", "Django REST Framework", "Django Channels", "PostgreSQL", "WebSockets", "Firebase auth", "JWT"],
    github: "https://github.com/harshalahire07/bookflow",
    demo: "",
    status: "Completed",
    featured: true,
    highlights: [
      "Implemented secure user authentication and authorization",
      "Developed RESTful APIs with Django REST Framework",
      "Integrated real-time chat using WebSockets and Django Channels",
      "Enabled book listing, searching, and management features",
      "Designed relational models with PostgreSQL",
      "Performed extensive API testing with Postman",
      "Utilized Git and GitHub for collaborative development"
    ]
  },
  {
    id: "national-health-records",
    title: "National Digital Health Record System",
    shortDesc: "A centralized healthcare platform that provides citizens with a unique Health ID and securely stores medical history.",
    fullDesc: "The National Digital Health Record System is a centralized healthcare platform that provides every citizen with a unique Health ID. It stores medical records, prescriptions, diagnostic reports, and treatment history in one secure system. Doctors, hospitals, pharmacies, and patients can access healthcare information quickly and securely.",
    tags: ["Django", "Ganache", "QR Generation", "MySQL", "JWT", "REST APIs", "Python"],
    github: "https://github.com/Rutujak004/national-digital-health-record-system-BE-project-",
    demo: "",
    status: "Completed",
    featured: true,
    highlights: [
      "Developed a centralized platform for managing patient health records with a unique Health ID for every citizen",
      "Created secure login and role-based access for Patients, Doctors, Pharmacies, and Admins using JWT authentication",
      "Built REST APIs for medical records, prescriptions, and reports management",
      "Implemented digital prescription verification for pharmacies and dynamic QR generation",
      "Designed a MySQL database to store and organize healthcare data efficiently",
      "Enabled doctors to view patient history and issue digital prescriptions securely"
    ]
  },
  {
    id: "medical-records-saas",
    title: "Multi-Tenant Medical Records Management System",
    shortDesc: "A secure, SaaS-based healthcare platform designed for multi-hospital operations with strict data isolation.",
    fullDesc: "A secure and scalable SaaS healthcare platform designed to enable multiple hospitals to manage patients, appointments, prescriptions, and medical records on a shared infrastructure while ensuring strict tenant-level data isolation. Built using Django REST Framework and PostgreSQL, the system incorporates JWT-based authentication, role-based access control, and secure REST APIs for enterprise-grade healthcare operations.",
    tags: ["Django", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Python", "HTML5", "Bootstrap 5", "JavaScript", "REST APIs"],
    github: "https://github.com/Rutujak004/multi-tenant-medical-system",
    demo: "",
    status: "Completed",
    featured: false,
    highlights: [
      "Designed a multi-tenant architecture using a shared PostgreSQL database with tenant-based data isolation",
      "Implemented JWT Authentication (Access & Refresh Tokens) and Role-Based Access Control (RBAC) for secure access management",
      "Developed RESTful APIs using Django REST Framework for patient, appointment, prescription, and lab report management",
      "Built role-specific dashboards for Super Admins, Hospital Admins, Doctors, Receptionists, Lab Technicians, and Patients",
      "Configured secure environment-based settings and production-ready security practices for scalable deployment"
    ]
  },
];

// ─── Blogs ────────────────────────────────────────────────────────────────────

export const blogs: Blog[] = [
  {
    id: "spard-internship-experience",
    title: "My Internship Experience at SPARD Technologies",
    excerpt: "An overview of my experience working as a Full Stack Web Developer Intern at SPARD Technologies, contributing to the BookFlow project and learning full-stack workflows.",
    date: "April 2026",
    readTime: "5 min read",
    tags: ["Internship", "Django", "React", "PostgreSQL", "WebSockets"],
    featured: true,
    content: `
# My Internship Experience at SPARD Technologies

During my internship at SPARD Technologies, I worked as part of a development team on BookFlow, a web application designed to help users manage and organize books efficiently.

My primary responsibilities included developing and maintaining the Categories module, designing and implementing user interface components, and integrating frontend features with backend APIs. I worked on creating responsive and user-friendly interfaces while ensuring smooth communication between the frontend and backend systems.

I collaborated closely with team members to implement new features, test functionality, and resolve technical issues. I also used Postman for API testing and Git/GitHub for version control and team collaboration.

While working on BookFlow, I encountered several real-world development challenges, including API integration, frontend-backend communication, WebSocket-based real-time features, image upload handling, and deployment-related configurations. Troubleshooting and resolving these issues strengthened my debugging abilities and gave me valuable insight into how full-stack applications are built, integrated, and maintained in a professional environment.

This internship experience enhanced my understanding of software development workflows, teamwork, and the practical application of web technologies in production-oriented projects.

### My Contributions

* Developed and maintained category management functionality.
* Designed and implemented responsive user interface components.
* Integrated frontend pages with backend REST APIs.
* Participated in API testing and validation using Postman.
* Assisted in debugging, feature implementation, and system integration.
* Collaborated with team members using Git and GitHub.

### Technologies Used

* Python
* Django
* Django REST Framework
* PostgreSQL
* HTML
* CSS
* JavaScript
* REST APIs
* WebSockets
* Postman
* Git & GitHub

### Key Learnings

* Frontend UI design and implementation.
* Frontend-backend integration using REST APIs.
* Real-time communication using WebSockets.
* API testing, debugging, and troubleshooting.
* Database management with PostgreSQL.
* Deployment and application configuration.
* Team collaboration using Git-based workflows.
* Real-world software development practices and scalable application architecture.
`
  }
];
