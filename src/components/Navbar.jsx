import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/navbar.css'
import profilePic from "../assets/profile.png"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={profilePic} alt="Sayantan Das" />
        </NavLink>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink to="/experience" onClick={() => setOpen(false)}>Experience</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/certifications" onClick={() => setOpen(false)}>Certifications</NavLink>
        </div>

        <div
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
