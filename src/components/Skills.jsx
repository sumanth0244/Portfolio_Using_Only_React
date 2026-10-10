import Reveal from './Reveal.jsx'
import { SKILLS, TECH } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

function SkillBar({ name, level, delay }) {
  const [ref, visible] = useReveal({ threshold: 0.4 })

  return (
    <div ref={ref}>
      <div className="bar-head">
        <span>{name}</span>
        <span className="pct">{level}%</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            Tools I use to <span className="grad">bring things to life</span>
          </h2>
          <p className="section-sub">
            A focused toolkit refined over years of shipping real products.
          </p>
        </Reveal>

        <div className="skills-grid">
          <Reveal variant="left">
            <div className="bars">
              {SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 120}
                />
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="tech-cloud">
              {TECH.map((tech, i) => (
                <div
                  className="tech-item"
                  key={tech.label}
                  style={{ animation: `popIn 0.5s ${i * 0.06}s both` }}
                >
                  <span className="emoji" aria-hidden="true">{tech.emoji}</span>
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
