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
import Errorpage from './modules/sharecomponents/Errorpage';
import Usermainpage from './modules/users/components/Usermainpage';
import Userreport from './modules/users/components/Userreport';
import Appdata from './modules/features/Appdata';
import UserDetails from './modules/features/UserDetails';
import Charts from './modules/users/components/Charts';
import Userlist from './modules/users/components/Userlist';
import Addusers from './modules/users/components/Addusers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Applogin/>}></Route>
        <Route path='applist' element={<Welcomepage/>}></Route>
        <Route path='users' element={<Userlogin/>}></Route>
        <Route path='dashboard' element={<Landingpage/>}>
          <Route path='' element={<Usermainpage/>}></Route>
          <Route path='report' element={<Userreport/>}></Route>
          <Route path='users' element={<Appdata/>}/>
          <Route path='users/userdetails/:id' element={<UserDetails/>}/>
          <Route path='mychart' element={<Charts/>}></Route>
          <Route path='userlistpage' element={<Userlist/>}></Route>
          <Route path='userlistpage/adduser' element={<Addusers/>}></Route>

          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>
        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    
    
    </BrowserRouter>



  </React.StrictMode>
);
