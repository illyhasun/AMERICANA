import {Link} from 'react-router-dom'
export function Footer() {
    return (
            <footer>
                    <ul>
                        <div>
                            <li><Link to='/terms'>TERMS OF USE</Link></li>
                            <li><Link to='/order'>HOW TO ORDER</Link></li>
                        </div>
                        <div>
                            <li><Link to='/return'>EXCHANGE AND RETURN</Link></li>
                            <li><Link to='/delivery'>DELIVERY</Link></li>
                        </div>
                    </ul>
            </footer>
    );
  }