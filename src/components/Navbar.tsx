import { useEffect, useState } from 'react'
import { profile } from '../data'
import './Navbar.css'

const links = [
  { href: '#progetti', label: 'Progetti' },
  { href: '#systems', label: 'Systems' },
  { href: '#skills', label: 'Skills' },
  { href: '#contatti', label: 'Contatti' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            M
          </span>
          <span className="nav__name">{profile.shortName}</span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Principale">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Contattami
          </a>
        </nav>

        <button
          className={`nav__toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
