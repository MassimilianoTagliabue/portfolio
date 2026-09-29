import { skillCategories } from '../data'
import { Reveal } from './Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-label">Skills</p>
          <h2 className="section-title" id="skills-title">
            Tech stack
          </h2>
          <p className="section-lead">
            Competenze organizzate per Frontend, Backend & Database e Tools &
            DevOps.
          </p>
        </Reveal>

        <div className="skills-bento">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              className={`skills-panel skills-panel--${index + 1}`}
              delay={(index + 1) as 1 | 2 | 3}
            >
              <h3 className="skills-panel__title">{category.title}</h3>
              <ul className="skills-panel__list">
                {category.items.map((item) => (
                  <li key={item} className="skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
