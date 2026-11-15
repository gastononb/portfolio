/**
 * Contenido fácil de actualizar.
 * Mantener los datos fuera de los componentes evita mezclar contenido con presentación.
 */
export const navigationLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Skills', href: '#skills' },
]

export const projects = [
  {
    number: '01',
    title: 'Tienda Padel',
    type: 'E-commerce',
    description: 'Catálogo de productos, carrito de compras y generación de órdenes en una experiencia ágil y responsive.',
    tags: ['React', 'React Router', 'Firebase', 'Vite'],
    href: 'https://github.com/gastononb',
    accent: 'lime',
  },
  {
    number: '02',
    title: 'DentPlanner',
    type: 'Producto colaborativo',
    description: 'Aplicación de gestión para consultorios odontológicos con formularios, autenticación y acceso según roles.',
    tags: ['React', 'Formularios', 'Auth', 'Trabajo en equipo'],
    href: 'https://github.com/gastononb',
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Moldes',
    type: 'Sitio institucional',
    description: 'Landing page para un consultorio odontológico, con servicios claros y una interfaz adaptable a cualquier pantalla.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    href: 'https://github.com/gastononb',
    accent: 'violet',
  },
]

export const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'React Router',
  'Firebase',
  'Git',
  'GitHub',
  'Vite',
  'React Hook Form',
  'Zod',
]
