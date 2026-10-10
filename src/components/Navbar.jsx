import { useState } from 'react'
import { NAV_LINKS } from '../data.js'
import { useActiveSection, useScrolled } from '../hooks/useReveal.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(30)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  const handleClick = () => setOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={handleClick}>
            <span className="logo-mark">S</span>
            <span>Sumanth</span>
          </a>

          <nav>
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={active === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s talk
          </a>

          <button
            className={`burger ${open ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={handleClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
