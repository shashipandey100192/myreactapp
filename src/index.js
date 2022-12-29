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
import Myproductdetail from './components/Myproductdetail';
import Mymuibutton from './meterialUI/Methome';
import Mycustompage from './components/Mycustompage';
import Doute from './components/Doute';
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
          <Route path='mymap/:id' element={<Myproductdetail/>}/>
          <Route path='mui' element={<Mymuibutton/>}/>
          <Route path='service' element={<Mycustompage/>}/>
          <Route path='doute' element={<Doute/>}/>
          <Route path='myhomepage' element={<Myproductdetail/>}/>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

