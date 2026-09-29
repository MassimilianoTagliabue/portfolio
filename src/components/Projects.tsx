import { projects } from '../data'
import { Reveal } from './Reveal'
import './Projects.css'

export function Projects() {
  return (
    <section className="section" id="progetti" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-label">Progetti</p>
          <h2 className="section-title" id="projects-title">
            Lavori selezionati
          </h2>
          <p className="section-lead">
            Web app, redesign e tool business costruiti con React, Next.js e
            un focus su usabilità e deploy.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              className={`project-card${project.featured ? ' project-card--featured' : ''}`}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
            >
              <div className="project-card__meta">
                <span className="project-card__category">{project.category}</span>
              </div>
              <div className="project-card__top">
                <h3 className="project-card__title">{project.title}</h3>
              </div>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.github && (
                <a
                  className="project-card__github"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
