import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { SkillGroup } from '../models/skill.model';
import { Education } from '../models/education.model';
import { Publication } from '../models/publication.model';
import { Certification } from '../models/certification.model';

export const MOCK_PROFILE: Profile = {
  displayName: 'Jobayer',
  headline: 'Software Engineer & Full Stack Developer',
  shortIntro:
    'Passionate full stack developer specializing in Angular, TypeScript, C#, and scalable backend APIs. Building robust, accessible, and user-centric web applications.',
  biography:
    'I am a software engineer with hands-on experience designing and delivering production-ready web architectures. My expertise spans reactive frontend interfaces in modern Angular, clean architecture in .NET/C#, and database optimization. Dedicated to clean code, testability, and continuous learning.',
  publicEmail: 'contact@jobayer.dev',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com', label: 'GitHub Profile' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { platform: 'Twitter', url: 'https://twitter.com', label: 'Twitter / X' },
  ],
};

export const MOCK_PROJECTS: readonly Project[] = [
  {
    id: '1',
    slug: 'portfolio-web',
    title: 'Developer Portfolio Web',
    shortSummary:
      'Modern, accessible, dark-themed developer portfolio built with Angular v22, SSR prerendering, and Tailwind CSS.',
    fullDescription:
      'A complete public portfolio web application engineered with strict TypeScript, standalone Angular components, responsive layouts, and SSR prerendering for optimal SEO and performance.',
    technologyTags: ['Angular', 'TypeScript', 'Tailwind CSS', 'SSR', 'Node.js'],
    isFeatured: true,
    repositoryUrl: 'https://github.com',
    liveDemoUrl: 'https://jobayer.dev',
  },
  {
    id: '2',
    slug: 'task-management-api',
    title: 'Distributed Task Management API',
    shortSummary:
      'High-throughput RESTful service designed with clean architecture, CQRS, and entity framework core.',
    fullDescription:
      'A distributed task management backend service built using ASP.NET Core, CQRS with MediatR, PostgreSQL, and Redis caching with end-to-end integration testing.',
    technologyTags: ['C#', '.NET Core', 'PostgreSQL', 'Redis', 'Docker'],
    isFeatured: true,
    repositoryUrl: 'https://github.com',
  },
  {
    id: '3',
    slug: 'real-time-chat',
    title: 'Real-time Collaboration Platform',
    shortSummary:
      'Web-socket driven collaborative workspace with live messaging, channels, and role-based permissions.',
    fullDescription:
      'Real-time communication suite leveraging SignalR, Angular reactive state management, and JWT authentication.',
    technologyTags: ['Angular', 'C#', 'SignalR', 'Tailwind CSS'],
    isFeatured: true,
    repositoryUrl: 'https://github.com',
  },
];

export const MOCK_EXPERIENCES: readonly Experience[] = [
  {
    id: '1',
    organization: 'DevSkill',
    role: 'Software Engineer Intern',
    employmentType: 'Internship',
    startDate: '2026-01-01',
    isCurrent: true,
    location: 'Dhaka, Bangladesh',
    summary:
      'Contributing to modern web development initiatives, implementing responsive client components in Angular, and collaborating on backend RESTful APIs using C# and .NET.',
    responsibilities: [
      'Engineered standalone Angular features with signal-based reactivity and accessible UI tokens.',
      'Participated in code reviews, CI/CD pipeline builds, and automated unit testing.',
    ],
    technologyTags: ['C#', 'Angular', 'TypeScript', '.NET Core', 'PostgreSQL'],
  },
];

export const MOCK_SKILLS: readonly SkillGroup[] = [
  {
    category: 'Frontend Development',
    skills: [
      { id: '1', name: 'Angular', category: 'Frontend', description: 'Standalone components, signals, SSR' },
      { id: '2', name: 'TypeScript', category: 'Frontend', description: 'Strict typing, modern ESNext' },
      { id: '3', name: 'HTML5 & CSS3', category: 'Frontend', description: 'Semantic, responsive layouts' },
      { id: '4', name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first tokens and dark theme' },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { id: '5', name: 'C# / .NET', category: 'Backend', description: 'Clean architecture, Web APIs' },
      { id: '6', name: 'ASP.NET Core', category: 'Backend', description: 'RESTful endpoints, middleware' },
      { id: '7', name: 'REST APIs', category: 'Backend', description: 'Contract-first design, OpenAPI' },
      { id: '8', name: 'Entity Framework Core', category: 'Backend', description: 'Code-first migrations, queries' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { id: '9', name: 'PostgreSQL', category: 'Database', description: 'Relational schema, indexing' },
      { id: '10', name: 'SQL Server', category: 'Database', description: 'T-SQL, relational database management' },
      { id: '11', name: 'Git & GitHub', category: 'Tools', description: 'Branching, PRs, version control' },
      { id: '12', name: 'Docker', category: 'DevOps', description: 'Containerization, local dev stacks' },
    ],
  },
];

export const MOCK_EDUCATIONS: readonly Education[] = [
  {
    id: '1',
    institution: 'University / Institute',
    qualification: 'B.Sc. in Computer Science & Engineering',
    department: 'Computer Science & Engineering',
    startDate: '2020-01-01',
    endDate: '2024-12-31',
    description:
      'Focused on algorithms, software architecture, distributed systems, and modern web application development.',
  },
];

export const MOCK_PUBLICATIONS: readonly Publication[] = [
  {
    id: '1',
    title: 'Modern Web Architecture with Angular and ASP.NET Core',
    authors: ['Jobayer'],
    venue: 'Technical Blog / Publications',
    publicationYear: 2026,
    publicationDate: '2026-03-01',
    abstract:
      'An architectural guide on building type-safe, performant single-page applications with server-side rendering and resilient REST APIs.',
    officialUrl: 'https://jobayer.dev',
  },
];

export const MOCK_CERTIFICATIONS: readonly Certification[] = [
  {
    id: '1',
    title: 'Foundational C# Certification',
    issuer: 'freeCodeCamp in partnership with Microsoft',
    issueDate: '2025-06-01',
    credentialUrl: 'https://freecodecamp.org',
    description: 'Foundational certification covering C# fundamentals, OOP, and data structures.',
  },
];
