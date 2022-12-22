import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Mynav from './components/Mynav';
import Myerror from './components/Myerror';
import RecHome from './reactbootstrap/RecHome';
import Datalist from './components/Datalist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynav />
      <Routes>
          <Route path='' element={<Welcome />}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About />} />
          <Route path='*' element={<Myerror/>}/>
          <Route path='reactbootstrap' element={<RecHome/>}/>
          <Route path='mymap' element={<Datalist />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

