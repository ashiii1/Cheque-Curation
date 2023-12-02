import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import LandingPage from './pages/LandingPage';
import Home from './components/Home';
import LoginPage from './pages/LoginPage'; 
import Account from './components/Account'
import Algorithms from './components/Algorithms'
import RegisterPage from './pages/RegisterPage';

library.add(fas);



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
           <Route path='/register' element={<RegisterPage/>}/>
         
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Algorithms/>} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        

      </div>
    </BrowserRouter>
  );
};

export default App;