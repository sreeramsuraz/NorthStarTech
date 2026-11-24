import { useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { courseCategories } from '../data/courses'
import { services } from '../data/services'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  function closeMenu() {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  function handleServicesClick() {
    setOpenDropdown(openDropdown === 'services' ? null : 'services')

    if (location.pathname === '/') {
      document.getElementById('what-we-serve')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      return
    }

    navigate('/#what-we-serve')
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">N</span>
        <span>Northstar Tech</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="main-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>

        <div className={`nav-dropdown ${openDropdown === 'courses' ? 'open' : ''}`}>
          <button
            type="button"
            className="dropdown-toggle"
            aria-expanded={openDropdown === 'courses'}
            aria-controls="courses-dropdown"
            onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
          >
            Courses
          </button>
          <div id="courses-dropdown" className="dropdown-menu">
            <NavLink to="/courses" onClick={closeMenu}><strong>All Courses</strong></NavLink>
            {courseCategories.map((category) => (
              <Link
                key={category}
                to={`/courses?category=${encodeURIComponent(category)}`}
                onClick={closeMenu}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <NavLink to="/batches" onClick={closeMenu}>Upcoming Batches</NavLink>

        <div className={`nav-dropdown ${openDropdown === 'services' ? 'open' : ''}`}>
          <button
            type="button"
            className="dropdown-toggle"
            aria-expanded={openDropdown === 'services'}
            aria-controls="services-dropdown"
            onClick={handleServicesClick}
          >
            Services
          </button>
          <div id="services-dropdown" className="dropdown-menu">
            <NavLink to="/services" onClick={closeMenu}><strong>All Services</strong></NavLink>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} onClick={closeMenu}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
      </nav>
    </header>
  )
}

export default Header
