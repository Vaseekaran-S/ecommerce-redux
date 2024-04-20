import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../container/Home';
import Admin from '../pages/admin';
export default function Router() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path='/admin'  element={<Admin />} />
         <Route path='*'  element={<Home />} />
       </Routes>
    </BrowserRouter>
  )
}
