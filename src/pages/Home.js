import logoPic from '../pictures/logo-pic.svg'
import {About} from './About'
import {Link} from 'react-router-dom'

export function Home() {
    return (
    <main>
      <div className='presentation' id='one'>
          <div>
            <img src={logoPic} alt='Стагніть нормальний браузер'></img>
            <h2>ПОДИВИСЬ ЩО<br></br>МИ МАЄМО</h2>
            <Link to='/catalog'><button>В КАТАЛОГ</button></Link>
          </div>
        </div>
      <About />
      <div className='presentation' id='two'>
          <div>
            <Link to='/catalog'><button>В КАТАЛОГ</button></Link>
          </div>
        </div>
    </main>
    
    );
  }