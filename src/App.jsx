import { useState } from 'react'

import LocomotiveScroll from 'locomotive-scroll'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blogs from './Components/Blogs';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TitledBlog from './Components/TitledBlog';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blogs/:id' element={<TitledBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
