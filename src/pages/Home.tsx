import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, LockKeyhole, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import profile from '../assets/derajkumar-profile.jpeg'
import { focusAreas, projects } from '../data/content'
import { ProjectCard, Reveal } from '../components/UI'

const strengths = [
  { icon: Code2, title: 'Software Development', body: 'Thoughtful products, clean logic, and systems that are built to last.' },
  { icon: Sparkles, title: 'Full-Stack Development', body: 'React, TypeScript, and Python from first sketch to a working release.' },
  { icon: BrainCircuit, title: 'AI & Machine Learning', body: 'Computer vision, LSTM forecasting, and satellite data made useful.' },
  { icon: LockKeyhole, title: 'Cybersecurity', body: 'Network security, vulnerability assessment, CTF, and forensics.' },
]

const roles = ['Cybersecurity Enthusiast', 'AI/ML Developer', 'Software Engineer', 'Full Stack Developer']

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2600)
    return () => window.clearInterval(interval)
  }, [])

  return <>
    <section className="hero container"><div className="hero-copy"><div className="status"><span /> Available for work</div><p className="eyebrow">CSE student · software & web developer</p><h1>Hi, I'm <em>Derajkumar.</em><br /><span className="role-loop" aria-live="polite"><AnimatePresence mode="wait"><motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .35 }}>{roles[roleIndex]}</motion.span></AnimatePresence></span></h1><p className="hero-description">A motivated Computer Science Engineering student driven by software development, full-stack development, cybersecurity research, and AI-powered problem solving, building systems that translate into real-world impact across environment, health, and safety.</p><div className="button-row"><Link className="button button-dark" to="/projects">View my work <ArrowUpRight size={16} /></Link><Link className="button button-light" to="/contact"><Mail size={16} /> Get in touch</Link><a className="button button-light" href="/derajkumar-s-resume.pdf">Resume <ArrowDown size={15} /></a></div></div><div className="hero-side"><div className="hero-photo"><div className="photo-frame"><img src={profile} alt="Portrait of Derajkumar S" /></div></div><div className="focus-strip"><span className="eyebrow">Focus areas I happily work with &lt;3</span><div>{focusAreas.map((area) => <span className="focus-chip" key={area}>{area}</span>)}</div></div><div className="hero-socials"><a href="https://linkedin.com/in/derajkumar-s-569bb8319" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/Derajkumar" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div></div></section>
    <section className="mission section container"><Reveal><p className="eyebrow">01 / The why</p><h2>My mission is building systems with measurable, <em>real-world impact.</em></h2><div className="mission-line"><span>Environment</span><span>Health</span><span>Safety</span></div></Reveal></section>
    <section className="strengths section"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / What I do</p><h2>Curious by default.<br /><em>Useful by design.</em></h2></div><p>Where engineering discipline meets an instinct to ask better questions.</p></div><div className="strength-grid">{strengths.map(({ icon: Icon, title, body }, index) => <Reveal delay={index * .08} key={title}><article className="strength-card"><Icon size={22} /><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></div></section>
    <section className="stats container"><div><strong>7<span>+</span></strong><small>Shipped projects</small></div><div><strong>95<span>%</span></strong><small>Defect detection</small></div><div><strong>5<span>+</span></strong><small>Awards & placements</small></div><div><strong>2</strong><small>Certifications</small></div></section>
    <section className="selected-work section container"><div className="section-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Ideas, shipped.</h2></div><Link className="text-link" to="/projects">View all projects <ArrowUpRight size={15} /></Link></div><div className="projects-grid featured-grid">{projects.filter((project) => project.featured).map((project, index) => <Reveal delay={index * .1} key={project.name}><ProjectCard project={project} /></Reveal>)}</div></section>
    <section className="cta container"><div><p className="eyebrow">Let's make something matter</p><h2>Have a project, internship<br />or research idea?</h2></div><Link className="button button-dark" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></section>
  </>
}
