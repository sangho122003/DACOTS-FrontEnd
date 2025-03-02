/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Menu from '../component/AuthZone/Menu';
import SideBar from '../component/AuthZone/SideBar';
import Postlist from '../component/AuthZone/Postlist';
import instance from '../utils/axios';
import Login from './Login';
import '../assets/AuthZone/home.css'
import { AuthContext } from '../context/authContext';
import FramewordPost from '../component/AuthZone/FramewordPost';
const Home = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);
  
  return (
    <div>
 {user.idUser ? (
      <div className='container-home'>
      <div className='modal-post'></div>
      <div className='modal-comment'></div>
      <div className='main-home'>
        <div className='backHome'>
          <div className='frame sidebar'>
            <SideBar user={user}/>
          </div>
          <div className='frame main'>
            <FramewordPost/>
          </div>
          <div className='frame mess'></div>
        </div>
        <div className='frontHome'>
        <Menu user={user} login={login} logout={logout} />
        </div>
      </div>

    </div>
    ) : (
      <button onClick={handleLogin}>Login</button>
    )}
    </div>
   
   
  )
};

export default Home;
