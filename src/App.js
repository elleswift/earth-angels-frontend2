import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/styles.css'

import Main from './pages/Main'
import MakeWish from './pages/MakeWish'
import WishList from './pages/WishList'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminWishes from './components/AdminWishes'
import GrantWish from './pages/GrantWish'
import AdminWish from './components/AdminWish'
import About from './components/About'

function App() {

  return (

    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/make-wish' element={<MakeWish />} />
        <Route path='/wish-list' element={<WishList />} />
        <Route path='/grant-wish' element={<GrantWish />} />
        <Route path='/admin-wishes' element={<AdminWishes />} />
        <Route path='/admin-wish' element={<AdminWish />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<h2>Oops....page not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
