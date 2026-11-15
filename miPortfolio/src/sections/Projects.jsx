import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="section-heading">
        <SectionLabel number="03">Proyectos</SectionLabel>
        <div>
          <p className="eyebrow">Una selección de mi trabajo</p>
          <h2>Proyectos que convierten aprendizaje en experiencia.</h2>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
