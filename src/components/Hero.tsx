import { profile } from '../data'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__status" aria-hidden="true" />
            Disponibile per nuovi progetti
          </p>
          <h1 id="hero-title" className="hero__brand">
            {profile.name}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__lead">{profile.lead}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#progetti">
              Vedi Progetti
              <span aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contattami
            </a>
          </div>
        </div>

        <div className="hero__bento" aria-hidden="true">
          <div className="bento-tile bento-tile--code">
            <pre>
              <code>
                <span className="tok-kw">const</span> focus = [
                {'\n'}
                {'  '}
                <span className="tok-str">'React'</span>,
                {'\n'}
                {'  '}
                <span className="tok-str">'MongoDB'</span>,
                {'\n'}
                {'  '}
                <span className="tok-str">'Linux'</span>
                {'\n'}]
              </code>
            </pre>
          </div>
          <div className="bento-tile bento-tile--stack">
            <span>Web UI</span>
            <span>NoSQL</span>
            <span>IT Systems</span>
          </div>
          <div className="bento-tile bento-tile--pulse">
            <span className="pulse-dot" />
            <span>Web + Infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  )
}
