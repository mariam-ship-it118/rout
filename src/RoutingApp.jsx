import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About-us';

import zeroo from './pages/Error';



import Zeroo from './pages/Error';
import Subnews from './pages/Subnews';
import News from './pages/News';






const Routees = () => {
    return ( 

<BrowserRouter>
  <Routes>


  <Route path="/" element={<Home/>} />
<Route path='/aboutus' element={<About />} />
<Route path='/news' element={<News/>} />
<Route path='/news/:id' element={<Subnews/>} />





<Route path='*' element={<Zeroo />} />


  </Routes>


</BrowserRouter>

     );
}
 
export default Routees;