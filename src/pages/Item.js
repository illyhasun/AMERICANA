import {useParams} from "react-router"
import ItemInfo from '../components/ItemInfo'
import {Link} from 'react-router-dom'
import {items} from '../data/products'


export function Item() {
    const params = useParams().id
    const found = items.find(el => {
        return el.id === Number(params)
      })
    console.log(found.img)
    return(found && (
        <main>
        <div className="itemInfo">
            <div className='itemInfo-desc'>
                <h1>{found.title}</h1>
                <h1>{found.price} CZK</h1>
                <p>Для замовлення пишіть в інстаграм</p>
            </div>
            <div className='itemInfo-list'>
            {found.img.map(obj => {
                return (
                    <div className='itemInfo-pic' key={obj.id}>
                        <img src = {process.env.PUBLIC_URL + `/img/${obj.pic}`} alt = 'Chyba'></img>
                    </div>
                    ) 
            })}
            </div>
        </div>
        </main>
    ))
        
}
