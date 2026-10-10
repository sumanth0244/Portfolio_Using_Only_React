import { HERO_ROLES } from '../data.js'
import { useTypewriter } from '../hooks/useReveal.js'

export default function Hero() {
  const typed = useTypewriter(HERO_ROLES)

  return (
    <section id="home" className="hero">
      {/* animated background layers */}
      <div className="grid-bg" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          

          <h1>
            Hi, I&apos;m <span className="grad">Sumanth</span>
            <br />
            
          </h1>

          <p className="hero-role">
            <span className="typed">{typed}</span>
            <span className="cursor" aria-hidden="true" />
          </p>

          <p className="hero-text">
            I craft fast, accessible and delightfully animated interfaces with
            React. From pixel-perfect UI to smooth micro-interactions, I turn
            ideas into products people love to use.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring" aria-hidden="true" />
            <img
              className="avatar-img"
              src="/public/Sumanth_Professional2.jpeg"
              alt="Portrait of Sumanth"
              loading="eager"
            />
            <span className="orbit-badge orbit-1" aria-hidden="true">⚛️</span>
            <span className="orbit-badge orbit-2" aria-hidden="true">🎨</span>
            <span className="orbit-badge orbit-3" aria-hidden="true">⚡</span>
            <span className="orbit-badge orbit-4" aria-hidden="true">🚀</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span className="mouse" />
        Scroll
      </a>
    </section>
  )
}
