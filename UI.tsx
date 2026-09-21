import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Mail } from 'lucide-react'
import type { Project } from '../data/content'

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15, margin: '-40px' }} transition={{ duration: 0.55, delay }}>{children}</motion.div>
}

export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro-copy">{body}</p></section>
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card accent-${project.accent}`}><div className="project-art"><span>{project.name.slice(0, 2)}</span><ArrowUpRight size={22} /></div><div className="project-card-body"><div className="project-meta"><span>{project.label}</span><span>0{project.name === 'AEROVISION' ? 1 : project.name === 'AROGYA AI' ? 2 : 3}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.github ?? 'https://github.com/Derajkumar'} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> GitHub</a><a href={project.demo ?? '#'} target={project.demo ? '_blank' : undefined} rel="noreferrer">View project <ArrowUpRight size={15} /></a></div></div></article>
}

export function ContactForm() {
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); window.location.href = 'mailto:deraj.srinivasan@outlook.com?subject=Portfolio enquiry' }}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={5} placeholder="Tell me a little about the idea..." /></label><button className="button button-dark" type="submit"><Mail size={16} /> Send message</button></form>
}

export function BulletList({ items }: { items: string[] }) { return <ul className="bullet-list">{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul> }
