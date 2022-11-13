import React from 'react'

function ItemInfoPic({item}) {
  return (
      <div className='itemInfo-pic'>
        <img src = {`/img/${item.img}`} alt = 'Chyba'></img>
      </div>
  )
}

export default ItemInfoPic