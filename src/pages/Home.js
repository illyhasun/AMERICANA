import logoPic from '../pictures/logo-pic.svg'
import presentation from '../pictures/presentation.png'
import presentation2 from '../pictures/presentation2.png'
import {About} from './About'
import {Link} from 'react-router-dom'

export function Home() {
    return (
    <>
      <div className='presentation'>
        <img class='home-pic'src={presentation} alt='Стагніть нормальний браузер'></img>
        <div className='centered'>
          {/* <div className='test'>
            <img id='logo-pic' src={logoPic} alt='Стагніть нормальний браузер'></img>
          </div>  */}
          <h1>LET'S SEE WHAT<br></br>WE HAVE</h1>
          <Link to='/AMERICANA/catalog'><button>В КАТАЛОГ</button></Link>
        </div>
      </div>
      {/* <div className='about'>
        <About />
      </div>
      <div className='presentation'>
          <img class='home-pic' src={presentation2} alt='Стагніть нормальний браузер'></img>
          <div className='centered'>
            <Link to='/AMERICANA/catalog'><button>В КАТАЛОГ</button></Link>
          </div>
        </div> */}
    </>
    
    );
  }