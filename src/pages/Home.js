import logoPic from '../pictures/logo-pic.svg'
import {About} from './About'
import {Link} from 'react-router-dom'

export function Home() {
    return (
    <>
      <div className='presentation' id='one'>
        <div className='test'>
          <img id='logo-pic' src={logoPic} alt='Стагніть нормальний браузер'></img>
        </div> 
        <h2>ПОДИВИСЬ ЩО<br></br>МИ МАЄМО</h2>
        <Link to='/catalog'><button>В КАТАЛОГ</button></Link>
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='presentation' id='two'>
          <div>
            <Link to='/catalog'><button>В КАТАЛОГ</button></Link>
          </div>
        </div>
    </>
    
    );
  }