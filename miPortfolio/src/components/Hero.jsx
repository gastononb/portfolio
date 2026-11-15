import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Capa visual de fondo; el contenido principal permanece separado. */}
      <div className="hero-noise" />

      <div className="hero-content">
        <div className="availability">
          <span /> Disponible para oportunidades
        </div>
        <p className="hero-kicker">Front-End Developer · React & JavaScript</p>
        <h1>
          <span>Hola, soy Gastón.</span> Creo experiencias web que se sienten bien.
        </h1>
        <p className="hero-description">
          Desarrollador Front-End Junior enfocado en construir interfaces
          modernas, accesibles y pensadas para personas.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#proyectos">
            Ver proyectos <ArrowRightIcon />
          </a>
          <a className="text-link" href="#contacto">Hablemos</a>
        </div>
      </div>

      {/* Monograma puramente decorativo. */}
      <div className="hero-mark" aria-hidden="true">
        <span className="mark-ring" />
        <span className="mark-code">GB</span>
        <span className="mark-label">
          Frontend<br />Developer
        </span>
      </div>

      <a href="#sobre-mi" className="scroll-cue" aria-label="Ir a Sobre mí">
        <ArrowDownIcon />
      </a>
    </section>
  )
}
