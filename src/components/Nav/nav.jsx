import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { IoIosContact } from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, SetActiveNav] = useState('#')

  return (
    /*<div>Nav</div>*/
    <nav>
      <a href="#" onClick={() => SetActiveNav('#') } className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => SetActiveNav('#about')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#experience" onClick={() => SetActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => SetActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => SetActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact /></a>
    </nav >
  )
}

export default Nav