import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../public/logo.png'

function Header() {
  return (
    <header>

        <Link to="/" className='logo'>
            <img src={logo} alt="Logo" />
        </Link>

        <nav>
          <NavLink to="">Home</NavLink>
        </nav>

    </header>
  )
}

export default Header