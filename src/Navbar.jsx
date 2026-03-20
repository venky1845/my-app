import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/',         label: 'Home'     },
  { path: '/about',    label: 'About'    },
  { path: '/skills',   label: 'Skills'   },
  { path: '/projects', label: 'Projects' },
  { path: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-logo">SV</div>

      <ul className={`nav-menu ${menuOpen ? 'nav-open' : ''}`}>
        {navItems.map((item, i) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-num"></span> {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="hbar"></span>
        <span className="hbar"></span>
        <span className="hbar"></span>
      </button>
    </nav>
  )
}