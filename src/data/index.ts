import { 
  Project, 
  Certificate, 
  Skill, 
  Achievement, 
  EducationItem, 
  NavItem,
  SocialLink
} from '../types';

import chatQna from "../assets/image.png";
import resume from "../assets/resume.pdf"
import onlineCarProject from "../assets/Online-car.png";
import trendyToes from "../assets/trendy-toes.png";


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
    title: 'TrendyToes - web application',
    description: 'A web application for booking trendy footwear.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'MySQL'],
    image: trendyToes,
    githubLink: 'https://github.com/prabhatkumar97/trendyToes-WebApplication',
    period: 'january 2025 – june 2025'
  },
  {
    id: 2,
    title: 'Online-car selling',
    description: 'A platform for buying and selling cars online.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'MySQL'],
    image: onlineCarProject,
    githubLink: 'https://github.com/prabhatkumar97/online-car-project',
    period: 'july 2023 - august 2023'
  },
  {
    id: 2,
    title: 'ChatQnA - web application',
    description: 'A platform for asking and answering questions .',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Gemini API'],
    image: chatQna,
    githubLink: 'https://github.com/prabhatkumar97/chatQna',
    period: 'Oct 2024 - Dec 2024'
  },
];


export const certificates: Certificate[] = [

      
   
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
    grade: '76.04%',
    period: '2017 – 2019',
    location: 'Suriya, Jharkhand'
  },
  {
    institution: 'SRK DAV Public School Suriya Jharkhand',
    degree: '10th',
    grade: '76.06%',
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