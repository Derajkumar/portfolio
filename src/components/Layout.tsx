import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, socials } from '../data/content'

const socialIcon = () => {
  return ArrowUpRight
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(true)

  return (
    <div className={lightMode ? 'site light-mode' : 'site'}>
      <header className="navbar">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}><span>D</span> Derajkumar S</Link>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
        </nav>
        <button className="icon-button theme-toggle" type="button" aria-label="Toggle colour theme" onClick={() => setLightMode((value) => !value)}>{lightMode ? <Moon size={18} /> : <Sun size={18} />}</button>
        <a className="resume-button" href="/portfolio/derajkumar-s-resume.pdf">Resume <ArrowUpRight size={15} /></a>
        <button className="icon-button menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-top"><div><Link className="brand" to="/"><span>D</span> Derajkumar S</Link><p className="footer-note">Software, web, AI & security.<br />Made with intent in Chennai.</p></div><div className="footer-links"><p className="eyebrow">Sitemap</p>{navItems.slice(0, 6).map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div><div className="footer-contact"><p className="eyebrow">Reach me</p><a href="mailto:deraj.srinivasan@outlook.com">deraj.srinivasan@outlook.com</a><a href="tel:+919940721203">+91 99407 21203</a><span>Chennai, Tamil Nadu, India</span></div></div>
        <div className="footer-bottom"><span>© 2026 Derajkumar S · Designed & built in Chennai</span><div className="socials">{socials.map((social) => { const Icon = socialIcon(); return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><Icon size={16} /></a> })}</div></div>
      </footer>
    </div>
  )
}
