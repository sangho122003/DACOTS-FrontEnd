/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* eslint-enable no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './page/GuestZone/Introduction';

import Login from './page/Login'
import NotFound from './page/NotFound'
import Home from './page/Home';
import Document from './page/GuestZone/Document';
import Friend from './page/AuthZone/Friend';
// import Shopping from './page/Shopping';
import Start from './component/GuestZone/Document/start';
import Maindoc from './component/GuestZone/Document/Maindoc';
import Signindoc from './component/GuestZone/Document/Signindoc';
import Regiserdoc from './component/GuestZone/Document/Regiserdoc';
import Aboutus from './page/GuestZone/Aboutus';
import Admin1 from './component/GuestZone/Abouts/Admin1';
import { AuthProvider } from './context/authContext';
// import End from './component/Document/End'

function App() {

  return (
    <>
<AuthProvider>
<Router>
        <Routes>
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home /> } />
          <Route path="/friends" element={<Friend />} />
          <Route path="/about" element={<Aboutus />} >
            <Route path="Admin1" element={<Admin1/>} />
            <Route path="Admin2" element={<Start />} />
            <Route path="Admin3" element={<Start />} />
            <Route path="Admin4" element={<Start />} />
            <Route path="Admin5" element={<Start />} />
          </Route>
          <Route path="/shopping" element={<Friend />} />
          <Route path="/newsfeed" element={<Friend />} />
          <Route path="/booking" element={<Friend />} />
          <Route path="/videoshot" element={<Friend />} />
          <Route path="/music" element={<Friend />} />
          <Route path="/video" element={<Friend />} />
          <Route path="/document" element={<Document />} >
            <Route path="start" element={<Start />} />
            <Route path="register" element={<Regiserdoc />} />
            <Route path="signin" element={<Signindoc />} />
            <Route path="main" element={<Maindoc />} />
          </Route>
          <Route path="/" element={<Introduction />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Router> 
</AuthProvider>
   </>
   
   
  )
}

export default App
