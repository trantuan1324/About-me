import {
  ContactInfo,
  CSFPrinciple,
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
} from '@/types/portfolio';

export const PERSONAL_INFO: ContactInfo = {
  name: 'Quang Tuan Tran',
  role: 'Backend Developer',
  location: 'Thanh Xuan, Hanoi, Vietnam',
  email: 'tranqt.work@gmail.com',
  phone: '+84 355608896',
  github: 'https://github.com/trantuan1324',
  linkedin: 'https://www.linkedin.com/in/trantuan224/',
  bio: 'Backend Engineer passionate about architecting scalable systems, robust RESTful APIs, and enterprise-grade software solutions. I focus on clean code, domain-driven package design, and fault-tolerant backend architectures.',
  typedSkills: [
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Spring Security',
    'Docker',
    'REST API',
  ],
};

export const CSF_PHILOSOPHY: CSFPrinciple[] = [
  {
    letter: 'C',
    title: 'Cooperative',
    subtitle: 'Cross-functional Collaboration & Contract-Driven Design',
    description:
      'I believe great software is built through clear communication. I design transparent API contracts, partner closely with frontend engineers, and participate actively in peer code reviews.',
    icon: 'Users',
    traits: [
      'Frontend & Backend Sync',
      'Clear OpenAPI/Swagger Specs',
      'Peer Code Review Culture',
      'Constructive Mentorship',
    ],
  },
  {
    letter: 'S',
    title: 'Steady',
    subtitle: 'Reliable Codebases & Fault-Tolerant Systems',
    description:
      'Consistency and stability over chaotic velocity. I focus on comprehensive unit testing, robust database migrations, RBAC security, and resilient system boundaries that withstand production load.',
    icon: 'ShieldCheck',
    traits: [
      'Defensive Error Handling',
      'High Unit Test Coverage',
      'Database Migration (Flyway)',
      'Production Stability',
    ],
  },
  {
    letter: 'F',
    title: 'Flexible',
    subtitle: 'Agile Mindset & Rapid Tech Adaptation',
    description:
      'Technology evolves constantly. From iOS mobile engineering with Swift to high-throughput Spring Boot microservices, I quickly adapt tools and patterns to solve real-world problems.',
    icon: 'Zap',
    traits: [
      'Agile / Scrum Adaptability',
      'Continuous Skill Expansion',
      'Refactoring Without Fear',
      'Polyglot Problem Solver',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'it-center-hnue',
    role: 'Backend Developer',
    company: 'IT Center - Hanoi National University of Education',
    location: 'Hanoi, Vietnam',
    period: 'Jan 2026 - Jun 2026',
    isCurrent: false,
    type: 'Full-time',
    responsibilities: [
      'Architected and implemented core RESTful APIs for next-gen scalable E-learning platforms serving university-wide users.',
      'Established automated Unit Testing suites to guarantee API contract stability and regression protection.',
      'Enforced rigorous peer Code Reviews to elevate code maintainability, security compliance, and clean architecture standards.',
      'Diagnosed, profiled, and debugged high-concurrency backend performance bottlenecks.',
      'Active participant in Agile sprint ceremonies, driving feature delivery from technical spec to production deployment.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'PostgreSQL',
      'REST API',
      'JUnit 5',
      'Mockito',
      'Agile/Scrum',
    ],
    highlights: [
      'Scaled E-learning service architecture for peak university exam periods.',
      'Reduced API latency through query optimization and clean payload design.',
    ],
  },
  {
    id: 'vti-academy',
    role: 'Backend Developer',
    company: 'VTI Academy',
    location: 'Hanoi, Vietnam',
    period: 'May 2025 - Jan 2026',
    isCurrent: false,
    type: 'Full-time',
    responsibilities: [
      'Engineered backend REST APIs for Enterprise Human Resource Management (HRM) systems using Spring Boot.',
      'Collaborated closely with React/Next.js frontend engineers to establish seamless JSON payloads and authentication flows.',
      'Implemented robust unit test suites ensuring comprehensive business logic validation.',
      'Participated in daily Agile standups, backlog refinement, and sprint retrospective iterations.',
      'Refactored legacy modules into clean, maintainable, package-by-feature structures.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'MySQL',
      'Postman',
      'Git',
      'HRM Systems',
    ],
    highlights: [
      'Delivered HRM attendance & payroll API modules on schedule with zero critical bugs.',
      'Standardized API error response format across the engineering department.',
    ],
  },
  {
    id: 'ghtk',
    role: 'Mobile Developer',
    company: 'GHTK (Giao Hang Tiet Kiem)',
    location: 'Hanoi, Vietnam',
    period: 'Jun 2024 - Sep 2024',
    isCurrent: false,
    type: 'Internship',
    responsibilities: [
      'Developed native iOS application modules using Swift tailored for Warehouse Management Systems (WMS).',
      'Crafted highly responsive mobile UI screens adhering strictly to modern iOS design guidelines and Human Interface Guidelines.',
      'Optimized real-time warehouse barcode scanning & inventory tracking logic.',
      'Applied software engineering best practices including MVC/MVVM patterns and memory-safe mobile coding.',
    ],
    technologies: ['Swift', 'iOS', 'WMS', 'REST API', 'Git', 'UIKit'],
    highlights: [
      'Streamlined warehouse operator scanning workflow, reducing package check-in steps by 25%.',
      'Gained deep appreciation for client-side API requirements that now informs backend API design.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages for server-side logic and enterprise systems.',
    icon: 'Code2',
    skills: [
      {
        name: 'Java',
        level: 92,
        iconName: 'Coffee',
        description: 'Java 17/21, OOP, Functional Interfaces, Streams, Concurrency',
        isFeatured: true,
      },
      {
        name: 'Spring Boot',
        level: 90,
        iconName: 'Server',
        description: 'Spring Data JPA, Spring MVC, Spring Security, Dependency Injection',
        isFeatured: true,
      },
      {
        name: 'Swift',
        level: 75,
        iconName: 'Smartphone',
        description: 'Native iOS, UIKit, Foundation, MVVM',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Relational data modeling, indexing, and migration pipelines.',
    icon: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        level: 88,
        iconName: 'Database',
        description: 'Complex Queries, Indexing, JSONB, Performance Tuning',
        isFeatured: true,
      },
      {
        name: 'MySQL',
        level: 84,
        iconName: 'Database',
        description: 'Schema Design, Relational Normalization, Transactions',
      },
      {
        name: 'Flyway',
        level: 82,
        iconName: 'Layers',
        description: 'Versioned Database Migrations, Reproducible Environments',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Auth',
    description: 'Enterprise authentication, token rotation, and authorization rules.',
    icon: 'Lock',
    skills: [
      {
        name: 'JWT & Refresh Tokens',
        level: 90,
        iconName: 'KeyRound',
        description: 'Stateless Auth, Dual-Token Mechanism, Cookie Security',
        isFeatured: true,
      },
      {
        name: 'Spring Security',
        level: 88,
        iconName: 'ShieldAlert',
        description: 'Filter Chains, RBAC, @PreAuthorize, Security Context',
        isFeatured: true,
      },
      {
        name: 'Ownership Authorization',
        level: 85,
        iconName: 'UserCheck',
        description: 'Custom Expression Evaluators, Resource Ownership Verification',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    description: 'DevOps containers, API debugging, and version control.',
    icon: 'Wrench',
    skills: [
      {
        name: 'Docker',
        level: 82,
        iconName: 'Box',
        description: 'Containerization, Multi-stage Builds, Docker Compose',
        isFeatured: true,
      },
      {
        name: 'Git',
        level: 90,
        iconName: 'GitBranch',
        description: 'Branching Strategies, Gitflow, Rebase, PR Workflows',
      },
      {
        name: 'Postman',
        level: 90,
        iconName: 'Send',
        description: 'API Test Suites, Environment Variables, Automated Collections',
      },
    ],
  },
  {
    id: 'development',
    title: 'Architecture & Process',
    description: 'Software design patterns, modular architecture, and agile team delivery.',
    icon: 'Workflow',
    skills: [
      {
        name: 'REST API Design',
        level: 94,
        iconName: 'Globe',
        description: 'RESTful Principles, HATEOAS, DTO Mapping, Error Standards',
        isFeatured: true,
      },
      {
        name: 'Package-by-feature Architecture',
        level: 88,
        iconName: 'FolderTree',
        description: 'Domain Isolation, High Cohesion, Low Coupling',
      },
      {
        name: 'Agile / Scrum',
        level: 86,
        iconName: 'Repeat',
        description: 'Sprint Planning, Standups, Backlog Refinement, Retrospectives',
      },
      {
        name: 'MapStruct',
        level: 85,
        iconName: 'FileCode2',
        description: 'Compile-time Object Mapping, Performance DTO conversions',
      },
    ],
  },
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'e-flow-learning',
  title: 'E-Flow Learning',
  tagline: 'Modern Enterprise Online Learning Platform with Spring Boot & Granular Security',
  description:
    'A high-performance backend platform designed to power modern online education platforms with strict role-based authorization, automated schema migration, and package-by-feature architecture.',
  longDescription:
    'E-Flow Learning was engineered to solve common bottlenecks in online education systems: slow database migration, tight architectural coupling, and complex permission checks. Built using Java 21 and Spring Boot, the platform enforces stateless dual-token authentication (JWT + Refresh Tokens), fine-grained Role-Based Access Control (RBAC) via @PreAuthorize, and custom resource ownership authorization to ensure users only manage their own course materials.',
  version: 'v1.0.0',
  githubUrl: 'https://github.com/trantuan1324/e-flow-learning',
  featured: true,
  technologies: [
    'Spring Boot 4',
    'Java 21',
    'PostgreSQL',
    'Flyway',
    'JWT Auth',
    'Refresh Tokens',
    'RBAC',
    '@PreAuthorize',
    'Ownership Auth',
    'Package-by-feature',
    'Docker',
    'MapStruct',
  ],
  highlights: [
    'Package-by-feature architecture for maximum domain isolation and maintainability.',
    'Dual-token JWT mechanism with secure refresh token rotation & revocation.',
    'Granular @PreAuthorize method security combined with custom Ownership Evaluators.',
    'Flyway database migrations for zero-downtime schema evolution.',
    'MapStruct compile-time DTO mapper for zero-reflection performance.',
    'Dockerized multi-stage build setup ready for container orchestration.',
  ],
  techChoices: [
    {
      tech: 'Java 21 & Spring Boot',
      reason:
        'Leverages Virtual Threads (Loom) readiness, Pattern Matching, Record classes, and Spring Boot ecosystem maturity for enterprise backend scalability.',
    },
    {
      tech: 'Package-by-feature Structure',
      reason:
        'Replaces layered package structures with feature domains (e.g., /course, /auth, /user), ensuring high cohesion and easier microservice extraction in the future.',
    },
    {
      tech: 'Flyway Migration',
      reason:
        'Ensures schema version control is tracked in Git alongside code, eliminating manual database synchronization errors across dev/prod environments.',
    },
    {
      tech: 'JWT + Refresh Token Rotation',
      reason:
        'Provides stateless scale with short-lived access tokens, while storing hashed refresh tokens for security revocation and seamless user sessions.',
    },
    {
      tech: 'MapStruct',
      reason:
        'Generates type-safe Java bean mappers at compile time, eliminating runtime reflection overhead typical of ModelMapper or BeanUtils.',
    },
  ],
  architectureHighlights: [
    {
      title: 'Package-By-Feature Domain Isolation',
      description:
        'Each feature (Auth, Course, User, Enrollment) encapsulates its own Controller, Service, Repository, and DTOs, preventing monolithic cross-boundary leaks.',
      icon: 'FolderTree',
    },
    {
      title: 'Dual Security Layer (RBAC + Ownership)',
      description:
        'Combines role checks (@PreAuthorize("hasRole(\'INSTRUCTOR\')")) with dynamic ownership verification (@PreAuthorize("@courseSecurity.isOwner(#courseId, authentication)")).',
      icon: 'ShieldCheck',
    },
    {
      title: 'Automated Migration & Containerization',
      description:
        'Includes versioned Flyway scripts (`V1__init.sql`) and a multi-stage Dockerfile optimizing container image size under 150MB.',
      icon: 'Box',
    },
  ],
};

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology',
    institution: 'Hanoi National University of Education (HNUE)',
    location: 'Hanoi, Vietnam',
    period: '2020 - 2025',
    details: [
      'Specialization: Software Engineering & Enterprise System Architecture.',
      'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Software Architecture, Network Security.',
      'Active participant in university IT center software projects.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Aptis ESOL International Certificate',
    issuer: 'British Council',
    date: '2024',
    scores: [
      { skill: 'Listening', level: 'C1' },
      { skill: 'Reading', level: 'B2' },
      { skill: 'Writing', level: 'B2' },
      { skill: 'Speaking', level: 'B1' },
    ],
    badge: 'CEFR C1 / B2',
  },
  {
    title: 'MasterDev Program',
    issuer: 'High-Level Software Engineering Program',
    date: 'Summer 2024',
    badge: 'Honors',
    credentialUrl: 'https://github.com/trantuan1324',
  },
];
