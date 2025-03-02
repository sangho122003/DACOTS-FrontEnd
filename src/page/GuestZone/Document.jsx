/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Menuintro from '../../component/GuestZone/Menuintro';
import Footerintro from '../../component/GuestZone/Footerintro';
import '../../assets/document/document.css';

import SidebarDoc from '../../component/GuestZone/Document/SidebarDoc';

const SupportDocumentPage = () => {
 

  return (
    <div className="container">
      <div className="menu">
        <Menuintro />
      </div>
      <div className="main-document">
        <SidebarDoc/>
        <div className="Main-documentpage">
          <Outlet/>

        </div>
      </div>
      <footer>
        <Footerintro />
      </footer>
    </div>
  );
};

export default SupportDocumentPage;
