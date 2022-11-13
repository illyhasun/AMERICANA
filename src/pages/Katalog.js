import icon from '../pictures/icon.svg'
import {useState} from 'react'
import Items from '../components/Items'
import {items} from '../data/products'


export function Katalog() {
    const [data, setData] = useState(items)
    const FilterResult = (catItem) => {
      const result = items.filter((curData) => {
        return curData.category === catItem
      })
      setData(result)
    }

    return(
      <main className='catalog'>
        <div id="flip">
          <div>
            <h2>КАТЕГОРІЇ</h2><img className='icon'src={icon} alt='Стагніть нормальний браузер'></img>
          </div>
        </div>
        <div className="filter">
            <ul>
                <li onClick ={() => setData(items)}>ВСЕ</li>
                <li onClick ={() => FilterResult('bundy')}>КУРТКИ</li>
                <li onClick ={() => FilterResult('mikiny')}>КОФТИ</li>
            </ul>   
          </div>
        
          {data.map((items) => {
            return(<Items key={items.id} item = {items}/>)
          })}  
        </main> 
    )
  }
  