/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import '../../assets/intro.css'
import Footerintro from '../../component/GuestZone/Footerintro';
import Mainintro from '../../component/GuestZone/Mainintro';
import Menuintro from '../../component/GuestZone/Menuintro';

// import Modal from 'react-modal';
const Introduction = () => {
  return (
    <div>
      {/* <Modal></Modal> */}
      <div className="container">
        <div className="menu">
          <Menuintro />
        </div>
     
        <Mainintro/>
        <footer>
          <Footerintro />
        </footer>
      </div>
    </div>
  )
}

export default Introduction
