/**
 * Etiqueta numerada que se repite al comienzo de cada sección.
 * @param {{ number: string, children: import('react').ReactNode, light?: boolean }} props
 */
// JSDoc documenta las props; esta versión de ESLint sólo reconoce PropTypes.
export default function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? 'light' : ''}`}>
      <span>{number}</span>
      {children}
    </div>
  )
}
