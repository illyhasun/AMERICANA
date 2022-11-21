import { NavLink } from 'react-router-dom'
import logoText from '../pictures/logo-text.svg'
import burger from '../pictures/burger.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import { useState } from 'react'


export function Header() {
  const ClassLink = ({ isActive }) => {return isActive ? 'active-link' : 'not-active'}
  const [nav, setNav] = useState(true)

  return (
      <header>
        <div className='header'>
        <div onClick={()=>setNav(!nav)} className='burger'>
          
          {nav ? <AiOutlineMenu className='burger-pic' size={30}/> : <AiOutlineClose className='burger-pic' size={30}/>}

        </div>
        <div className='left'>
          <ul className={nav ? 'active-menu' : 'not-active-menu'}>
            <li id='home'><NavLink to="/AMERICANA/" className={ClassLink} onClick={()=>setNav(!nav)}>ГОЛОВНА</NavLink></li>
            <li><NavLink to="/AMERICANA/catalog" className={ClassLink} onClick={()=>setNav(!nav)}>КАТАЛОГ</NavLink></li>
            <li><NavLink to="/AMERICANA/about" className={ClassLink} onClick={()=>setNav(!nav)}>ПРО НАС</NavLink></li>
            <li id='contact-left'><NavLink to="/AMERICANA/contacts" className={ClassLink} onClick={()=>setNav(!nav)}>КОНТАКТИ</NavLink></li>
          </ul>
        </div>
        <div className='logo-div'>
          <NavLink to="/AMERICANA/" className={ClassLink} onClick={()=>setNav(true)}><img id="logo" src={logoText} alt="AMERICANA"></img></NavLink>
        </div>

        <div className='right'>
          <NavLink to="/AMERICANA/contacts" className={ClassLink}>КОНТАКТИ</NavLink>
        </div>
        </div>
      </header>
    );
  }