import { useState } from 'react'

import LocomotiveScroll from 'locomotive-scroll'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Blogs from './Components/Blogs';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
