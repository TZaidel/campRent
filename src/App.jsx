import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import CampPage from './pages/CampPage/CampPage.jsx'
import FavoritePage from './pages/FavoritePage/FavoritePage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/catalog' element={<CampPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='*' element={<NotFoundPage/> } />
      </Routes>      
    </div>
  )
}

export default App
