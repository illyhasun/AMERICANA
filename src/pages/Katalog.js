import icon from '../pictures/icon.svg'
import presentationCatalog from '../pictures/presentation-catalog.png'
import {useState} from 'react'
import Items from '../components/Items'
import {items} from '../data/products'


export function Katalog() {
  const [data, setData] = useState(items)

  const [open, setOpen] = useState(false)

  const [showResults, setShowResults] = useState(false);
  const [activeAll, setActiveAll] = useState(true)
  const onClick = (id) => setShowResults(id);

  const FilterResult = (category) => {
    const result = items.filter((curData) => {
      return curData.category === category
    })
    setData(result)
  }
  const uniqueCategory = [];
  const pushUniqueCategory = items.filter(item => {
    const isDuplicate = uniqueCategory.includes(item.category);
    if (!isDuplicate) {
      uniqueCategory.push(item.category);
      return true;
    }
    return false;
  })

  return(
    <main>
      <div className='presentation'>
        <img className='catalog-pic'src={presentationCatalog} alt='Стагніть нормальний браузер'></img>
        <div className='centered'>
          <h2>WOMEN</h2>
        </div>
      </div>
      <div className='catalog'>
          <div id="flip" onClick={() => (setOpen(!open))}>
            <h2>CATEGORIES</h2>
            <img className={open ? 'icon' : 'rotate-icon'} src={icon} alt='Стагніть нормальний браузер'></img>
          </div>

          <div className={open ? 'slide': 'not-slide'}>
            <ul>
              <li onClick ={() => {setData(items)
                onClick('')
                setActiveAll(false)
              }}
              className={showResults === '' || activeAll ?  'active-link' : 'not-active' }
              >All</li>
              {pushUniqueCategory.map(item => {
                return (
                  <li key={item.category} onClick ={() => {
                    FilterResult(item.category)
                    onClick(item.category)
                    setActiveAll(false)
                  }}
                  className={showResults === item.category ?  'active-link' :'not-active'}
                  >{item.category}</li>
                )})}
            </ul> 
        </div>
        <div className='catalog-items'>
          {data.map((items) => {
              return(<Items key={items.id} item = {items}/>)
            })}
        </div>
      </div> 
    </main>
  )
}