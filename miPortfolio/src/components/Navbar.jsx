import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { navigationLinks } from '../data/portfolioData'

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Cambia el fondo del navbar cuando el usuario se aleja del inicio.
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        GB<span>.</span>
      </a>

      <nav className={isMenuOpen ? 'open' : ''} aria-label="Navegación principal">
        {navigationLinks.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <a className="nav-contact" href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>
    </header>
  )
}
