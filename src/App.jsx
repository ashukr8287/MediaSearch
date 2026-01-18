import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Collections from "./Pages/Collections"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collections' element={<Collections/>}/>
    </Routes>
    </>
  )
}

export default App