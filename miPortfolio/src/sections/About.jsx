import { MapPinIcon } from '@heroicons/react/24/outline'
import SectionLabel from '../components/SectionLabel'

export default function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <SectionLabel number="01">Sobre mí</SectionLabel>

      <div className="about-grid">
        <div>
          <p className="eyebrow">Perfil profesional</p>
          <h2>Construyo interfaces claras, útiles y con intención.</h2>
        </div>

        <div className="about-copy">
          <p>
            Soy desarrollador Front-End Junior con experiencia práctica creando
            interfaces web con React y JavaScript. Me interesa transformar ideas
            en productos simples de usar, visualmente cuidados y preparados para crecer.
          </p>
          <p>
            Actualmente estudio la Licenciatura en Sistemas en la UNLP. Busco
            sumarme a un equipo donde pueda aportar, aprender y seguir
            desarrollándome profesionalmente.
          </p>
          <div className="location">
            <MapPinIcon /> Berazategui, Buenos Aires
          </div>
        </div>
      </div>
    </section>
  )
}
