import {useParams} from "react-router"
import ItemInfo from '../components/ItemInfo'
import {Link} from 'react-router-dom'
import {items} from '../data/products'


export function Item() {
    const params = useParams().id
    const found = items.find(el => {
        return el.id === Number(params);
      });
    return(
        <main>
            <div className='itemInfo'>
                {found && (<ItemInfo item = {found}/>)}
                <Link to='/AMERICANA/catalog' className="btn-center"><button>НАЗАД В КАТАЛОГ</button></Link>
            </div>
        </main>
    )
}
