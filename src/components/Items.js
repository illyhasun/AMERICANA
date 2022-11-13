import React from 'react'
import {Link} from 'react-router-dom'

function Items({item}) {
  return (
    <div className='items'>
        <div className='item-pic'>
          <Link to = {`/AMERICANA/item${item.id}`}><img src = {process.env.PUBLIC_URL + `/img${item.img.main}`} alt = 'Chyba'></img></Link>
        </div>
        <div>
            <h3>{item.title}</h3>
            <b>{item.price} UAH</b>
        </div>
    </div>
  )
}

export default Items