import React from 'react'
import NavbarFirst from '../../components/NavbarFirst/NavbarFirst'
import NavbarSeconde from '../../components/NavbarSeconde/NavbarSeconde'
import ContentHome from '../../components/ContentHome/ContentHome'

function Home() {
  return (
    <div>
        <NavbarFirst />
        <NavbarSeconde /><br />
        <ContentHome />
    </div>
  )
}

export default Home