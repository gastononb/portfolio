import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

/**
 * @param {{ project: {
 *   number: string,
 *   title: string,
 *   type: string,
 *   description: string,
 *   tags: string[],
 *   href: string,
 *   accent: string
 * } }} props
 */
// JSDoc documenta las props; esta versión de ESLint sólo reconoce PropTypes.
// eslint-disable-next-line react/prop-types
export default function ProjectCard({ project }) {
  // eslint-disable-next-line react/prop-types
  const { number, title, type, description, tags, href, accent } = project

  return (
    <article className={`project-card ${accent}`}>
      <div className="project-number">{number}</div>

      {/* Mockup decorativo. Se oculta a lectores de pantalla porque no aporta contenido. */}
     {/* <div className="project-visual" aria-hidden="true">
        <div className="mock-window">
          <span />
          <span />
          <span />
          <div className="mock-content">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div> 
*/}
      <div className="project-content">
        <p className="project-type">{type}</p>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tag-list">
          {/* eslint-disable-next-line react/prop-types */}
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <a href={href} target="_blank" rel="noreferrer">
          Ver en GitHub <ArrowTopRightOnSquareIcon />
        </a>
      </div>
    </article>
  )
}
