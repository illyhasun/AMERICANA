import {Link} from 'react-router-dom'
export function Footer() {
    return (
            <footer>
                    <ul>
                        <div>
                            <li><Link to=''>УМОВИ ВИКОРИСТАННЯ</Link></li>
                            <li><Link to='/delivery'>ДОСТАВКА</Link></li>
                        </div>
                        <div>
                            <li><Link to=''>ОБМІН ТА ПОВЕРНЕННЯ</Link></li>
                            <li><Link to=''>ЯК ЗАМОВИТИ?</Link></li>
                        </div>
                    </ul>
            </footer>
    );
  }