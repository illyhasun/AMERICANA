import { NavLink } from 'react-router-dom'
import logoText from '../pictures/logo-text.svg'
export function Header() {
  const ClassLink = ({ isActive }) => {return isActive ? 'active-link' : 'not-active'}
  return (
      <header>
        <div className='left'>
          <ul>
            <li><NavLink className={ClassLink} to="/AMERICANA/catalog">КАТАЛОГ</NavLink></li>
            <li><NavLink className={ClassLink} to="/AMERICANA/about">ПРО НАС</NavLink></li>
          </ul>
        </div>

        <div>
          <NavLink to="/AMERICANA/" className={ClassLink}><img id="logo" src={logoText} alt="AMERICANA"></img></NavLink>
        </div>

        <div className='right'>
          <NavLink to="/AMERICANA/contacts" className={ClassLink}>КОНТАКТИ</NavLink>
        </div>
      </header>
    );
  }