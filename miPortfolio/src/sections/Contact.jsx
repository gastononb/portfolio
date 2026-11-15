import {
  ArrowDownTrayIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <p className="eyebrow">¿Hacemos algo juntos?</p>
      <h2>Estoy buscando mi próxima oportunidad.</h2>
      <p>
        Si tenés un proyecto, una propuesta o simplemente querés charlar sobre
        desarrollo, escribime.
      </p>

      <div className="contact-actions">
        <a className="button primary" href="mailto:gastonbenitez97.gb@gmail.com">
          <EnvelopeIcon /> Enviarme un email
        </a>
        <a
          className="button secondary"
          href="/CV_Gaston_Benitez_Frontend_Junior.pdf"
          download
        >
          <ArrowDownTrayIcon /> Descargar CV
        </a>
      </div>

      <div className="social-links">
        <a href="https://github.com/gastononb" target="_blank" rel="noreferrer">
          <CodeBracketIcon /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gaston-benitez-424063268/"
          target="_blank"
          rel="noreferrer"
        >
          in LinkedIn
        </a>
      </div>
    </section>
  )
}
