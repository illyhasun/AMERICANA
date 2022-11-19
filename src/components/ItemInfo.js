import React from 'react'

function ItemInfo({item}) {
  return (
          <div className='itemInfo-desc'>
              <h1>{item.title}</h1>
              <h1>{item.price} CZK</h1>
              <p>Для замовлення пишіть в інстаграм</p>
          </div>
  )
}

export default ItemInfo