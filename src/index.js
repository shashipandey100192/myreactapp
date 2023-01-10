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
import { Auth0Provider } from '@auth0/auth0-react';
import Myloginbuttonauth from './components/Myloginbuttonauth';
import MychildComponent from './components/MychildComponent';
import Myblog1 from './components/Myblog1';
import Photo1 from './components/Photo';
// import DataFatch from './components/DataFatch';
const DataFatch = lazy( ()=>import('./components/DataFatch'));
const Myload = lazy( ()=>import('./components/Myloading'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Auth0Provider 
  domain="dev-2lztdozl12hbrfpe.us.auth0.com"
  clientId="tdHHoVrY6wsKzjSKLliTnysk0G4tR2Si"
  redirectUri={window.location.origin}
>


    <BrowserRouter>
    <Mynav />
      <Routes>
          {/* <Route path='' element={<Welcome />}/> */}
          <Route path='' element={<Myloginbuttonauth/>}/>
          <Route path='home' element={<Home/>}/>
          {/* <Route path='routechild' element={<MychildComponent/>}/>
          <Route path='routechild/blog1' element={<Myblog1/>}/>
          <Route path='routechild/photo' element={<Photo1/>}/> */}

          <Route path='routechild' element={<MychildComponent/>}>
              <Route path='blog1' element={<Myblog1/>}/>
              <Route path='photo' element={<Photo1/>}/>
          </Route>

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

    </Auth0Provider>


  </React.StrictMode>
);

