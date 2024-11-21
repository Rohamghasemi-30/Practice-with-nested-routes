import React from 'react'
import NavbarFirst from '../../components/NavbarFirst/NavbarFirst'
import NavbarSeconde from '../../components/NavbarSeconde/NavbarSeconde'
import Educations from '../../components/Educations/Educations'
import { Outlet } from 'react-router-dom'

function Education() {
  return (
    <div>
        <NavbarFirst />
        <NavbarSeconde /><br />
        <Outlet />
        <Educations />
    </div>
  )
}

export default Education