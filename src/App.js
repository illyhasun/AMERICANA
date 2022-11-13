import './index.css'

import {Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contacts} from './pages/Contacts'
import {Katalog} from './pages/Katalog'
import {Item} from './pages/Item'

import {Footer} from './components/Footer'
import {Header} from './components/Header'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/catalog' element={<Katalog />} />
        <Route path='/item/:id' element={<Item />} />
        <Route path='/contact' element={null} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
