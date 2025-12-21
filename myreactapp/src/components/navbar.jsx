import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <Link to="/">Frijal</Link>
      </div>

      <div className="right">
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <span>Github</span>
        </a>

        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <span>Linkedin</span>
        </a>

        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  )
}
