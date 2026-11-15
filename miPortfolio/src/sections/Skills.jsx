import SectionLabel from '../components/SectionLabel'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <SectionLabel number="04" light>Herramientas</SectionLabel>

      <div className="skills-layout">
        <div>
          <p className="eyebrow">Mi stack</p>
          <h2>Tecnologías con las que llevo ideas a la web.</h2>
          <p className="skills-note">
            También cuento con lectura y comprensión de documentación técnica en inglés.
          </p>
        </div>

        <div className="skills-cloud">
          {skills.map((skill, index) => (
            <span
              key={skill}
              // La variable permite escalonar futuras animaciones sin tocar el JSX.
              style={{ '--delay': `${index * 40}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
