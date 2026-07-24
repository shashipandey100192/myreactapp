import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";
import Abc, { About2,About3, Page } from './pages/About';
import Service from './pages/Service';
import "./css/style.css";
import Bootstrappage from './pages/Bootstrappage';
import Myiconpage from './pages/Myiconpage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* 
    <Myiconpage></Myiconpage>
   <Abc></Abc>
    <About2></About2>
    <About3></About3>
    <Page></Page>
    <Service/>
    <Bootstrappage></Bootstrappage> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Page></Page>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='*' element={<h1>404 page</h1>}></Route>
        
      </Routes>
    
    </BrowserRouter>


  </React.StrictMode>
);
