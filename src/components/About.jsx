import Reveal from './Reveal.jsx'
import { STATS } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            Turning ideas into <span className="grad">interactive experiences</span>
          </h2>
          <p className="section-sub">
            
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal variant="left">
            <div className="about-card">
              <div className="stat-grid">
                {STATS.map((stat, i) => (
                  <div className="stat" key={stat.label} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="stat-num">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="about-body">
              <p>
                I&apos;m <strong>Sumanth</strong>, a Computer Science and Engineering 
                student interested in building practical and user-friendly web applications.
                 I work with HTML, CSS, JavaScript, C, Java, MySQL, and MongoDB, 
                 and I'm continuously learning new technologies to strengthen my 
                 development skills.
              </p>
              <p>
                I enjoy turning ideas into working projects, learning through 
                hands-on development, and solving problems with clean and simple solutions. 
                I'm currently focused on improving my full-stack development 
                skills and building projects that solve real-world problems.
              </p>

              <div className="chip-row">
                <span className="chip">🧠 Product thinking</span>
                <span className="chip">♿ Accessibility first</span>
                <span className="chip">⚡ Performance obsessed</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
