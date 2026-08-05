import { PERSONAL_INFO } from './profile';

export const SITE_CONFIG = {
  name: PERSONAL_INFO.name,
  role: PERSONAL_INFO.role,
  url: 'https://quangtuantran.dev',
  description:
    'Personal portfolio of Quang Tuan Tran - Senior Backend Engineer specializing in Java, Spring Boot, PostgreSQL, Docker, and scalable microservice architectures.',
  ogImage: '/images/og-image.png',
  links: {
    github: PERSONAL_INFO.github,
    linkedin: PERSONAL_INFO.linkedin,
    email: PERSONAL_INFO.email,
  },
};

export const JSON_LD_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  jobTitle: PERSONAL_INFO.role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thanh Xuan',
    addressRegion: 'Hanoi',
    addressCountry: 'Vietnam',
  },
  email: PERSONAL_INFO.email,
  telephone: PERSONAL_INFO.phone,
  url: SITE_CONFIG.url,
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  knowsAbout: [
    'Java 21',
    'Spring Boot',
    'PostgreSQL',
    'Spring Security',
    'Docker',
    'REST API Architecture',
    'Flyway',
    'RBAC Authorization',
    'Microservices',
    'Agile Software Development',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Hanoi National University of Education',
  },
};
