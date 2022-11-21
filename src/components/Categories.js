import {items} from '../data/products'
import Items from '../components/Items'
import icon from '../pictures/icon.svg'
import {useState} from 'react'

export function Categories() {
    const [data, setData] = useState(items)
    const [open, setOpen] = useState(false)
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
    });
  
    return (
        <>
        <div id="flip">
          <div onClick={() => (setOpen(!open))}>
            <h2>КАТЕГОРІЇ</h2><img className='icon'src={icon} alt='Стагніть нормальний браузер'></img>
          </div>
        </div>
        <div className={open ? 'slide': 'not-slide'}>
            <ul>
        {pushUniqueCategory.map(item => {
          return (
            <li key={item.category} onClick ={() => {FilterResult(item.category)}}>{item.category}</li>
          );
        })}
            </ul> 
        </div>
        {data.map((items) => {
            return(<Items key={items.id} item = {items}/>)
          })}
        </>
    );
  };
  
  export default Categories;