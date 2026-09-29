import { socials } from '../data'
import { Reveal } from './Reveal'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contatti" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-label">Contatti</p>
          <h2 className="section-title" id="contact-title">
            Parliamo del prossimo progetto
          </h2>
          <p className="section-lead">
            Preferisci LinkedIn o GitHub: sono i canali più rapidi per
            collaborazioni, feedback sui progetti e opportunità IT.
          </p>
        </Reveal>

        <div className={`contact-grid contact-grid--${socials.length}`}>
          {socials.map((social, index) => (
            <Reveal
              key={social.label}
              as="article"
              className="contact-card"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
            >
              <a
                className="contact-card__link"
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  social.href.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
              >
                <span className="contact-card__label">{social.label}</span>
                <span className="contact-card__handle">{social.handle}</span>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
