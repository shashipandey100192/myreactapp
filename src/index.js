import React, { lazy, Suspense } from 'react';
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
// import DataFatch from './components/DataFatch';
const DataFatch = lazy( ()=>import('./components/DataFatch'));
const Myload = lazy( ()=>import('./components/Myloading'));


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

          {/* <Route path='mydata' element={<DataFatch/>}/> */}
          <Route path='mydata' element={
              <Suspense fallback={<div style={{backgroundColor:'red',fontSize:'50',padding:'50px'}}>loading sdkf hjsdhfjshdf</div>}>
                  <DataFatch />
                </Suspense>
            }/>


            <Route path='lazy' element={
              <Suspense fallback={<div style={{backgroundColor:'red',fontSize:'50',padding:'50px'}}>loading sdkf hjsdhfjshdf</div>}>
                  <Myload />
                </Suspense>
            }/>


        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

