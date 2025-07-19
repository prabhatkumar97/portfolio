import { 
  Project, 
  Certificate, 
  Skill, 
  Achievement, 
  EducationItem, 
  NavItem,
  SocialLink
} from '../types';

import mercerMettal from '../assets/mercerMettal.png'
import wevdev from "../assets/webdevCertificate.png"
import resume from "../assets/resume.pdf"
import dineserve from "../assets/dineserve.png"
import rentUp from "../assets/rentUp.png"

export const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Education', href: 'education' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rent UP',
    description: 'A full-stack rental PG platform with secure booking system and advanced filters for location, budget, and amenities. Built real-time search and filtering for personalized rental PG bookings.',
    technologies: ['Full Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Responsive Web Design'],
    image: rentUp,
    githubLink: 'https://github.com/prabhatkumar97/trendyToes-WebApplication',
    period: 'Sep 2024 – Nov 2024'
  },
  {
    id: 2,
    title: 'Online car project',
    description: 'Restaurant Reservation System with real-time menu browsing, pricing, and ordering for customers. Designed an admin dashboard for efficient reservation and order management.',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js'],
    image: dineserve,
    githubLink: 'https://github.com/prabhatkumar97/online-car-project',
    period: 'Feb 2024 - May 2024'
  },
];


export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Certificate of Achievement',
    issuer: 'Mercer Mettl',
    date: 'October 2024',
    link: '#'
  },
  {
    id: 2,
    title: 'Full-Stack Web Developer',
    issuer: 'LinkedIn',
    date: 'January 2023',
    link: 'https://www.linkedin.com/learning/certificates/49cc2e3c877d7b5ae4477e1fda0d105c16b3cee2fdda4b1204d6aaef02111bf1'
  },
  {
    id: 3,
    title: 'Software Engineer Intern Certificate',
    issuer: 'HackerRank',
    date: '2023',
    link: 'https://www.hackerrank.com/certificates/738a85a7b3a0'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C++', 'Java', 'JavaScript', 'C', 'PHP']
  },
  {
    category: 'Technologies/Frameworks',
    items: ['HTML', 'CSS', 'React JS', 'Node JS', 'Git', 'GitHub']
  },
  {
    category: 'Core Skills',
    items: ['Data Structures and Algorithms', 'Problem-Solving', 'Project Management', 'Adaptability']
  }
];

export const achievements: Achievement[] = [

  {
    id: 4,
    title: 'Top 50 Teams',
    description: 'Secured Top 50 Teams in the VISIONARY Hackathon',
    image: mercerMettal
  },
  {
    id: 5,
    title: 'Certified by Linkedin',
    description: 'Completed LinkedIn’s Full Stack Development certification, showcasing expertise in building dynamic web applications.',
    image:wevdev,
    link:"https://www.linkedin.com/learning/certificates/49cc2e3c877d7b5ae4477e1fda0d105c16b3cee2fdda4b1204d6aaef02111bf1",
  },
];

export const education: EducationItem[] = [
  {
    institution: 'DAV Institute of Engineering and Technology',
    degree: 'Electronic and Communication Engineering',
    grade: '8.1 CGPA',
    period: '2021 – 2025',
    location: 'Jalandhar, Punjab'
  },
  {
    institution: 'SRK DAV Public School Suriya Jharkhand',
    degree: '12th with Science',
    grade: '84.00%',
    period: '2017 – 2019',
    location: 'Suriya, Jharkhand'
  },
  {
    institution: 'SRK DAV Public School Suriya Jharkhand',
    degree: '10th',
    grade: '84.00%',
    period: '2016 – 2017',
    location: 'Suriya, Jharkhand'
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:prabhatkrm8@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prabhatkumar97',
    icon: 'Linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/prabhatkumar97/',
    icon: 'Github'
  },
  {
    name: 'Phone',
    url: 'tel:+91-9771726891',
    icon: 'Phone'
  }
];

export const personalInfo = {
  name: 'Prabhat Kumar',
  title: 'Software Developer',
  location: 'Ranchi, Jharkhand 815317',
  collegeLocation : 'Jalandhar Punjab India 144008',
  email: 'prabhatkrm8@gmail.com',
  phone: '+91-9771726891',
  about: `I'm a Electronics and Communication Engineering student at DAV Institute of Engineering and Technology Jalandhar, with a passion for full-stack Python development and problem-solving. My journey in tech has been driven by a curiosity to build innovative solutions and contribute to the developer community.
I have expertise in Full stack development, along with a strong foundation in data structures and algorithms. With hands-on experience in building full-stack applications and active participation in hackathons, I've developed skills in creating efficient, user-centered solutions.
I'm constantly improving my skills through competitive programming platforms like LeetCode, CodeChef, and GeeksforGeeks while exploring new technologies and frameworks.`,
  resumeLink: resume
};