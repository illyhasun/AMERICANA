import React from 'react'

function ItemInfo({item}) {
  return (
      <>
          <div className='itemInfo-desc'>
              <h1>{item.title}</h1>
              <h1>{item.price} CZK</h1>
              <p>Для замовлення пишіть в інстаграм</p>
          </div>
          <div className='itemInfo-list'>  
            <div className='itemInfo-pic'>
              <img src = {process.env.PUBLIC_URL + `/img/${item.img.main}`} alt = 'Chyba'></img>
            </div>
            <div className='itemInfo-pic'>
              <img src = {process.env.PUBLIC_URL + `/img/${item.img.pic1}`} alt = 'Chyba'></img>
            </div>
            <div className='itemInfo-pic'>
              <img src = {process.env.PUBLIC_URL + `/img/${item.img.pic2}`} alt = 'Chyba'></img>
            </div>
            <div className='itemInfo-pic'>
              <img src = {process.env.PUBLIC_URL + `/img/${item.img.pic3}`} alt = 'Chyba'></img>
            </div>
          </div>
        </>
  )
}

export default ItemInfo