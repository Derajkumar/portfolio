export type ProjectCategory = 'AI' | 'Security' | 'Web'

export type Project = {
  name: string
  category: ProjectCategory
  label: string
  description: string
  stack: string[]
  accent: string
  github?: string
  demo?: string
  featured?: boolean
}

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
]

export const focusAreas = ['Languages', 'Web', 'Cybersecurity', 'AI / ML', 'Tools']

export const projects: Project[] = [
  {
    name: 'AEROVISION',
    category: 'AI',
    label: 'AI / Environment',
    description: 'Air quality monitoring that fuses aerosol optical depth with weather data, with 3-day AQI forecasting powered by LSTM models.',
    stack: ['Python', 'LSTM', 'Satellite data'],
    accent: 'mint',
    featured: true,
  },
  {
    name: 'AROGYA AI',
    category: 'AI',
    label: 'Social Impact',
    description: 'A rural health and education platform designed for low-connectivity regions and the realities of last-mile access.',
    stack: ['React', 'Python', 'PWA'],
    accent: 'amber',
    featured: true,
  },
  {
    name: 'StegoChat',
    category: 'Security',
    label: 'Security Engineering',
    description: 'A dark blueberry chat app hiding encrypted messages in CSS files with End-of-Line steganography and SHA-256 hashing.',
    stack: ['React 19', 'Express / TS', 'Python'],
    accent: 'violet',
    featured: true,
  },
  {
    name: 'GreenRoute',
    category: 'Web',
    label: 'Web / Sustainability',
    description: 'A route planning concept that helps teams compare commute options through a carbon-aware lens.',
    stack: ['TypeScript', 'Maps API', 'Vite'],
    accent: 'blue',
  },
  {
    name: 'Packet Lens',
    category: 'Security',
    label: 'Security / Research',
    description: 'A small network visibility toolkit for parsing traffic patterns and turning noisy captures into useful signals.',
    stack: ['Python', 'Wireshark', 'Linux'],
    accent: 'coral',
  },
  {
    name: 'Campus Connect',
    category: 'Web',
    label: 'Web / Community',
    description: 'A lightweight student collaboration space for events, peer learning, and project discovery.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'teal',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'C', 'C++'], level: 88 },
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'Bash Scripting', 'Frontend Development'], level: 84 },
  { group: 'Cybersecurity', items: ['Network Security', 'Risk Analysis', 'Vulnerability Assessment', 'Penetration Testing', 'CTF', 'Cyber Forensics'], level: 78 },
  { group: 'AI / ML', items: ['Computer Vision', 'LSTM Forecasting', 'Satellite Data Analysis', 'AI-powered Automation'], level: 81 },
  { group: 'Tools', items: ['Git', 'Linux', 'Bash', 'VS Code'], level: 86 },
]

export const timeline = {
  education: [
    { period: '2023 — Present', title: 'B.E. Computer Science Engineering', org: 'MNM Jain Engineering College · Anna University', detail: 'Current CGPA: 8.1 / 10. Building across software engineering, intelligent systems, and secure computing.' },
    { period: 'May 2023', title: '12th Grade', org: 'St. Joseph Hr. Sec. School, Chengalpattu', detail: 'Score: 433 / 600.' },
    { period: 'May 2022', title: '11th Grade', org: 'St. Joseph Hr. Sec. School, Chengalpattu', detail: 'Score: 434 / 600.' },
  ],
  experience: [
    { period: 'Jun — Jul 2026', title: 'Project Engineer Intern', org: 'SRF Limited · Chennai · On-site', detail: 'Supported IT infrastructure management across on-site systems and endpoints. Worked hands-on with enterprise networking, switching, addressing, connectivity troubleshooting, access control, monitoring, and hardening reviews.' },
  ],
}

export const achievements = [
  { number: '01', title: 'Best Innovation Idea Award', detail: 'St. Joseph Institute of Technology · Cash prize: Rs. 2,000.' },
  { number: '02', title: '2nd Place · National Conference', detail: 'Sathyabama Institute of Technology.' },
  { number: '03', title: 'Finalist · Ideathon2k25', detail: 'B.S. Abdur Rahman Crescent Institute of Science and Technology.' },
  { number: '04', title: 'National Science Day 2024', detail: '1st place in video editing and 3rd place in idea pitching.' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/derajkumar-s-569bb8319' },
  { label: 'GitHub', href: 'https://github.com/Derajkumar' },
  { label: 'Instagram', href: 'https://instagram.com/deresh.deraj_2005' },
  { label: 'WhatsApp', href: 'https://wa.me/919940721203' },
]
