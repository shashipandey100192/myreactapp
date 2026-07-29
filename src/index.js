import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Welcomepage from './modules/Welcomepage';
import Applogin from './modules/apps/appauth/Applogin';
import Userlogin from './modules/users/auth/Userlogin';
import Landingpage from './modules/dashboard/Landingpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Applogin/>}></Route>
        <Route path='applist' element={<Welcomepage/>}></Route>
        <Route path='users' element={<Userlogin/>}></Route>
        <Route path='dashboard' element={<Landingpage/>}></Route>

      </Routes>
    
    
    </BrowserRouter>



  </React.StrictMode>
);
