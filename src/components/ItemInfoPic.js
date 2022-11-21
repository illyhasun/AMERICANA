import React from 'react'

function ItemInfoPic({item}) {
  return (
      <div className='itemInfo-pic'>
        <img src = {`/img/${item}`} alt = 'Chyba'></img>
      </div>
  )
}

export default ItemInfoPic