import SectionLabel from '../components/SectionLabel'

const responsibilities = [
  'Desarrollo de interfaces y funcionalidades con React.',
  'Integración de formularios y flujos de interacción.',
  'Autenticación y acceso a funciones según el rol del usuario.',
  'Colaboración dentro de un equipo de desarrollo.',
]

export default function Experience() {
  return (
    <section id="experiencia" className="section experience-section">
      <SectionLabel number="02" light>Experiencia</SectionLabel>

      <div className="experience-grid">
        <div className="experience-intro">
          <p className="eyebrow">Trabajo real, aprendizaje real</p>
          <h2>Experiencia colaborativa construyendo producto.</h2>
        </div>

        <article className="experience-card">
          <div className="experience-meta">
            <span>Jun — Ago 2024</span>
            <span>Práctica colaborativa</span>
          </div>
          <h3>Desarrollador Front-End</h3>
          <p className="company">Foo Talent Group · DentPlanner</p>
          <ul>
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
