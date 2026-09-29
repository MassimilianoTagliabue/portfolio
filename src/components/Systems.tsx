import { systemsHighlights } from '../data'
import { Reveal } from './Reveal'
import './Systems.css'

export function Systems() {
  return (
    <section
      className="section systems"
      id="systems"
      aria-labelledby="systems-title"
    >
      <div className="container">
        <Reveal className="systems-card">
          <div className="systems-card__head">
            <p className="section-label">Specializzazione</p>
            <h2 className="section-title" id="systems-title">
              Database Administration & Systems
            </h2>
            <p className="section-lead">
              Infrastruttura IT e database NoSQL a supporto di applicazioni
              affidabili e ambienti di produzione.
            </p>
          </div>
          <ul className="systems-card__list">
            {systemsHighlights.map((item) => (
              <li key={item}>
                <span className="systems-card__marker" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
