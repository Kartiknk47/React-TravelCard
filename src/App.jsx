import React from 'react'
import CardList from './Components/CardList'
import data from './data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CityDetails from './Components/CityDetails'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<CardList data={data}/>}></Route>
    <Route path='/city-details/:ID/*' element={<CityDetails/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
