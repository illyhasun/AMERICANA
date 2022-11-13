import {Link} from 'react-router-dom'
export function Footer() {
    return (
        <footer>
            <ul>
                <li><Link to='/delivery'>ДОСТАВКА</Link></li>
                <li><Link to=''>УМОВИ ВИКОРИСТАННЯ САЙТУ</Link></li>
                <li><Link to=''>ОБМІН ТА ПОВЕРНЕННЯ</Link></li>
                <li><Link to=''>ЯК ЗАМОВИТИ?</Link></li>
            </ul>
        </footer>
    );
  }