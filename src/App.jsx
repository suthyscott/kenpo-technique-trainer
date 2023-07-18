import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trainer from './pages/Trainer'
import Header from './elements/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route index  element={<Home/>}/>
      <Route path='/trainer'  element={<Trainer/>}/>
    </Routes>
      
    </>
  )
}

export default App
