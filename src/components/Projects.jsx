
import Reveal from './Reveal.jsx';

const PROJECTS = [
  {
    title: 'Multi-Agent Career Assistant',
    year: 'In Progress-2026',
    desc: 'An AI-powered career assistant designed to help students explore career paths, improve their skills through multiple specialized AI agents.',
    tags: ['Frontend', 'Python', 'MongoDB'],
    linkText: 'Architecture',
    link: '#architecture',
  },
  {
    title: 'Smart AI Interview System',
    year: '2025',
    desc: 'An AI powered interview platform designed to provide an accessible and interactive interview experience for visually impaired users.',
    tags: ['Frontend', 'Python', 'FireBase'],
    linkText: 'Code',
    link: '#code',
  },
  {
    title: 'Travel Website',
    year: '2024',
    desc: 'A responsive travel website designed to help users explore destinations and access useful travel informations through a simple interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    linkText: 'Overview',
    link: '#overview',
  },
  {
    title: 'Hackathons and Competitions',
    year: '',
    desc: 'Participated in technical hackathons, coding competitions, and problem-solving events to gain hands on experience and collaborate on real-world challenges',
    tags: [],
    linkText: 'Highlights',
    link: '#highlights',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
     
      <div className="container">
         <span className="eyebrow">Project</span>
         <br/>
        <div className="projects-grid">
          
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              variant="scale"
              delay={(i % 2) * 100}
              className="project-card"
              as="article"
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                {project.year && (
                  <span className="project-year">
                    {project.year}
                  </span>
                )}
              </div>

              <div className="project-body">
                <p>{project.desc}</p>

                {project.tags.length > 0 && (
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <a className="project-link" href={project.link}>
                  {project.linkText} ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

