/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

import {
  Code,
  Layout,
  Briefcase,
  FileText,
  Github,
  Globe,
  Home,
  Instagram,
  LinkedinIcon,
  Mail,
  MessageCircle,
  Rocket,
  Settings,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Testimonials',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/',
  },
  {
    icon: LinkedinIcon,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/rudragaur3601/',
  },
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/rudragaur-01',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/project7.png',
    title: 'Event Management Platform',
    tags: ['Frontend', 'Backend', 'Database'],
    projectLink: 'https://github.com/rudragaur-01/event-platform',
    ownership: 'freelance',
  },
  {
    imgSrc: '/project4.png',
    title: 'Dashboard',
    tags: ['Frontend'],
    projectLink: 'https://github.com/rudragaur-01',
    ownership: 'personal',
  },
  {
    imgSrc: '/project2.png',
    title: 'Budget Manager API',
    tags: ['Backend', 'Database'],
    projectLink: 'https://github.com/rudragaur-01',
    ownership: 'personal',
  },
  {
    imgSrc: '/project1.png',
    title: 'CultureNOW – Digital Museum',
    tags: ['Frontend', 'Backend', 'Database'],
    projectLink: 'https://culturenow.org/',
    ownership: 'company',
  },

  {
    imgSrc: '/project5.png',
    title: 'Digitas',
    tags: ['Frontend', 'CMS'],
    projectLink: 'https://www.diriyah.sa/en',
    ownership: 'company',
  },

  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Kokoro Financial Platform',
    tags: ['Frontend'],
    projectLink: '',
    ownership: 'company',
  },
  {
    imgSrc: '/project6.png',
    title: 'Gathergram',
    tags: ['Frontend'],
    projectLink: 'https://www.gathergram.app/about',
    ownership: 'company',
  },
  {
    imgSrc: '/project3.png',
    title: 'Sidecup GSAP',
    tags: ['Frontend', 'GSAP'],
    projectLink: 'https://github.com/rudragaur-01',
    ownership: 'personal',
  },
  {
    imgSrc: '/project8.png',
    title: 'NewTrendz',
    tags: ['Frontend', 'Design'],
    projectLink: 'https://github.com/rudragaur-01',
    ownership: 'personal',
  },
];

const education: ExperienceType[] = [
  {
    year: '2019 - 2023',
    title: 'Bachelor of Technology',
    institute: 'Delhi Technical Campus',
    desc: 'Secured a CGPA of 8.26 / 10',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'Nov 2024 – Present',
    title: 'Full Stack Developer',
    institute: 'Frisson Devhub, Noida, India',
    desc: 'Optimized full-stack web apps, improving load times and scalability, boosting user engagement. Integrated Stripe payments for 50K+ users, ensuring secure and seamless transactions. Built RESTful APIs and connected Strapi CMS with PostgreSQL, cutting content management time by 30%. Collaborated in Agile sprints, delivering new features 20% faster using modular, reusable UI components. Mentored junior developers on clean code, debugging, and project handovers for smooth transitions.',
  },
  {
    year: 'Aug 2024 – Oct 2024',
    title: 'Full Stack Developer Intern',
    institute: 'Frisson Devhub, Noida, India',
    desc: 'Worked with senior developers on frontend fixes and UI improvements using React and Chakra UI. Gained practical experience in Agile workflows, Git version control, and cross-functional collaboration. Contributed to building and testing core modules for client projects, improving understanding of scalable app architecture. Participated in daily stand-ups, code reviews, and sprint planning, strengthening collaboration and debugging skills.',
  },
];

const tools: ToolsType[] = [
  { label: 'JavaScript (ES6+)' },
  { label: 'TypeScript (Basic)' },
  { label: 'HTML5' },
  { label: 'CSS3' },
  { label: 'React.js' },
  { label: 'Next.js' },
  { label: 'Redux' },
  { label: 'Tailwind CSS' },
  { label: 'Chakra UI' },
  { label: 'Material UI (MUI)' },
  { label: 'Node.js' },
  { label: 'Express.js' },
  { label: 'Strapi (Headless CMS)' },
  { label: 'JWT Authentication' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB (Basic)' },
  { label: 'Git & GitHub' },
  { label: 'Agile Methodologies' },
  { label: 'Stripe Payment Integration' },
  { label: 'Component-Driven Development' },
];

const services: ServiceType[] = [
  {
    title: 'Full Stack Development',
    desc: 'I develop scalable, high-performance web applications using modern technologies like Next.js, React, Node.js, and MongoDB.',
    highlight: 'End-to-End Solutions',
    icon: <Code className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Frontend Engineering',
    desc: 'Creating responsive, accessible, and visually engaging user interfaces with a focus on performance and seamless user experience.',
    highlight: 'Modern Frontend Stack',
    icon: <Layout className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Backend Development',
    desc: 'Building secure and efficient APIs, integrating databases, and architecting reliable backend systems using Node.js and Express.',
    highlight: 'Robust API Architecture',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch & Deployment',
    desc: 'Handling deployment pipelines, cloud configuration, and CI/CD setups to ensure smooth launches and maintainable infrastructure.',
    highlight: 'Cloud & DevOps Ready',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];
const statsData: StatsType[] = [
  {
    number: '10+',
    label: 'Completed Projects',
  },
  {
    number: '1+',
    label: 'Years of Experience',
  },
  {
    number: '5+',
    label: 'Happy Clients',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Rudra’s attention to detail and ability to turn complex ideas into polished solutions is exceptional. He consistently exceeded expectations and delivered high-quality work.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Working with Rudra was seamless. He is professional, responsive, and highly skilled, bringing my brand vision to life with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Rudra handled every detail flawlessly, from UI/UX design to front-end implementation. His problem-solving skills and dedication made the project smooth and enjoyable.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
