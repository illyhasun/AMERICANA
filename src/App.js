import './index.css'
import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contacts} from './pages/Contacts'
import {Katalog} from './pages/Katalog'
import {Item} from './pages/Item'

import {Footer} from './components/Footer'
import {Header} from './components/Header'

function App() {
  const [loading, setLoading] = useState(true)
  const preloader = document.getElementById('prelouder-container')
  if(preloader){
    setTimeout(()=> {
      preloader.style.display = 'none'
      setLoading(false)
    }, 1000)
  }
  return (
  !loading && <>
    <Header />
      <Routes>
        <Route path='/AMERICANA/' element={<Home />} />
        <Route path='/AMERICANA/about' element={<About />} />
        <Route path='/AMERICANA/contacts' element={<Contacts />} />
        <Route path='/AMERICANA/catalog' element={<Katalog />} />
        <Route path='/AMERICANA/item/:id' element={<Item />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
