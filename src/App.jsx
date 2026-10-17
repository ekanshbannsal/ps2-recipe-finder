import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Meals from './components/Meals'
import MealDetail from './components/MealDetail'
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main className="container">
    <Routes>
        {/* //kaun se path pe kaun sa element render hoga */}
          <Route path='/' element={<Home/>} />
          <Route path='/meals' element={<Meals/>} />
          <Route path='/meal/:id' element={<MealDetail/>} />
          <Route path="*" element={<NotFound/>} />
       </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
