import React from 'react'
import "../NavbarSeconde/NavbarSeconde.css"
import { NavLink } from 'react-router-dom'

function NavbarSeconde() {
  return (
    <nav className='nav-seconde'>
        <div className="logo">
          <NavLink to="/"><img src="../src/images/logo-type.svg" alt="" /></NavLink>
        </div>
        <ul>
            <li><NavLink to="/education">آموزش ها <img src="../src/images/tutorials.svg" alt="" /></NavLink></li>
            <li><NavLink to="">قالب ها <img src="../src/images/themes.svg" alt="" /></NavLink></li>
            <li><NavLink to="">افزونه ها <img src="../src/images/plugins.svg" alt="" /></NavLink></li>
            <li><NavLink to="">سایت برتر <img src="../src/images/topwebsite.svg" alt="" /></NavLink></li>
            <li><NavLink to="">هوشینا <img src="../src/images/hooshina.svg" alt="" /></NavLink></li>
            <li><NavLink to="">چتینا <img src="../src/images/chatina.svg" alt="" /></NavLink></li>
        </ul>
        <div className="lg">
            <h4>فارسی</h4>
        </div>
    </nav>
  )
}

export default NavbarSeconde