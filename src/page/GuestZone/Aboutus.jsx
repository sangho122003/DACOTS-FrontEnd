/* eslint-disable no-unused-vars */
import React from 'react'
import '../../assets/intro.css'
import SidebarDoc from '../../component/GuestZone/Document/SidebarDoc'
import { Outlet } from 'react-router-dom'
import Footerintro from '../../component/GuestZone/Footerintro'
import SidebarAbo from '../../component/GuestZone/Abouts/SidebarAbo'
import Menuintro from '../../component/GuestZone/Menuintro'

const Aboutus = () => {
  return (
    <div>
       <div className="container">
      <div className="menu">
        <Menuintro />
      </div>
      <div className="main-document">
        <SidebarAbo/>
        <div className="Main-documentpage">
         

        </div>
      </div>
      <footer>
        <Footerintro />
      </footer>
    </div>
    </div>
  )
}

export default Aboutus
