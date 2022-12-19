import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Welcome />}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

