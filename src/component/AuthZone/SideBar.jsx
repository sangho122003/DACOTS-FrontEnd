/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './../../assets/sidebar.css'

const SideBar = ({ user }) => {
  return (
    <div className='sidebar-page'>
      <ul className='table-sidebar'>
        <li className='select-table'>
          <img className='img-user-sidebar' src={user.pic}></img> {user.name}
          
          </li>
        <li className='select-table'>
          <Link to="/home" className="sidebar-link">
            <i className="fa-solid fa-house"></i> Trang Chủ
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/friends" className="sidebar-link">
            <i className="fa-solid fa-user-group"></i> Bạn Bè
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/shopping" className="sidebar-link">
            <i className="fa-solid fa-shop"></i> Avada Shop
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/newsfeed" className="sidebar-link">
            <i className="fa-solid fa-newspaper"></i> New Feed
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/booking" className="sidebar-link">
            <i className="fa-solid fa-ticket"></i> Booking
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/videoshot" className="sidebar-link">Video Shot</Link>
        </li>
        <li className='select-table'>
          <Link to="/music" className="sidebar-link">
            <i className="fa-solid fa-music"></i> Avada Music
          </Link>
        </li>
        <li className='select-table'>
          <Link to="/video" className="sidebar-link">
            <i className="fa-solid fa-film"></i> Video
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
