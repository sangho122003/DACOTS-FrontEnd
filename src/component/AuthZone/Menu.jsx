    /* eslint-disable no-unused-vars */
    import React, { useState,navigate } from 'react'
    import axios from 'axios'
    import '../../assets/AuthZone/menu.css'
    const Menu = (user,login,logout) => {
        const [openMenuicon, setOpenMenuicon] = useState('none');
        const [openMessicon, setOpenMessicon] = useState('none');
        const [openNotiuicon, setOpenNotiicon] = useState('none');
        const [openUser, setOpenUser] = useState('none');
        const [auth, setAuth] = useState(false)

        const handlelogout = ()=>{
            alert("hello")
            logout()
        }

        const handleopenMenuicon = () => {
            setOpenMenuicon(openMenuicon === 'none' ? 'flex' : 'none');
            setOpenMessicon('none');
            setOpenNotiicon('none');
            setOpenUser('none');
        }

        const handleopenMessicon = () => {
            setOpenMessicon(openMessicon === 'none' ? 'flex' : 'none');
            setOpenMenuicon('none');
            setOpenNotiicon('none');
            setOpenUser('none');
        }

        const handleopenNotiicon = () => {
            setOpenNotiicon(openNotiuicon === 'none' ? 'flex' : 'none');
            setOpenMenuicon('none');
            setOpenMessicon('none');
            setOpenUser('none');
        }

        const handleopenUser = () => {
            setOpenUser(openUser === 'none' ? 'flex' : 'none');
            setOpenMenuicon('none');
            setOpenMessicon('none');
            setOpenNotiicon('none');
        }
    
        
        return (
            <>
                <div className='Menu-container'>
                    <div className='Menu'>
                        <div className='left-menu menu'>AVADA <input type='text' placeholder='search' /></div>
                        <div className='center-menu menu'>
                            <div><button className='icon-menu-flash'><i className="fa-solid fa-house"></i> <p className='tirtle-flash'>Trang Chủ</p></button></div>
                            <div><button className='icon-menu-flash'><i className="fa-solid fa-cubes-stacked"></i> <p className='tirtle-flash'>Cho Bạn</p></button></div>
                            <div><button className='icon-menu-flash'><i className="fa-solid fa-cart-shopping"></i> <p className='tirtle-flash'>Giỏ Hàng</p></button></div>
                            <div><button className='icon-menu-flash'><i className="fa-solid fa-circle-dollar-to-slot"> <p className='tirtle-flash'>chuyển tiền</p></i></button></div>

                        </div>
                        <div className='right-menu '>
                            <div className='ulti' onClick={handleopenMenuicon}>
                                <button>
                                    <i className="fa-solid fa-bars"></i>
                                
                                </button>
                            </div>
                            <div className='ulti' onClick={handleopenMessicon}>
                                <button><i className="fa-solid fa-comment"></i></button>
                            </div>
                            <div className='ulti' onClick={handleopenNotiicon}>
                                <button><i className="fa-solid fa-bell"></i></button>
                            </div>
                            <div className='ulti' onClick={handleopenUser}>
                                <button><i className="fa-solid fa-user"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='menu-ultis'>
                        <div className='ultis-menu' style={{ display: openMenuicon }}>
                            <h1>Menu:</h1>
                            <div className='Main-menu-clone'>
                                <div>
                                    <button>Trang Chủ</button>
                                    <button>Bạn Bè</button>
                                    <button>Shopping</button>
                                    <button>Bảng Tin</button>
                                    <button>Booking</button>
                                    <button>AvadaShot</button>
                                    <button>AvadaMusic</button>
                                    <button>AvadaVideoc</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
            
                        <div className='ultis-mess' style={{ display: openMessicon }}>
                            <h1>Nhắn Tin:</h1>
                        </div>
                        <div className='ultis-Notification' style={{ display: openNotiuicon }}>
                            <h1>Thông Báo:</h1>
                        

                        </div>
                        <div className='ultis-Usericon' style={{ display: openUser }}>
                            <ul>
                                <li></li>
                                <li><i className="fa-solid fa-money-bill"></i> 200.000Đ</li>
                                <li>Xem Tất cả Trang Cá Nhân</li>
                                <li><i className="fa-solid fa-gear"></i> Cài Đặt Quyền Riêng Tư</li>
                                <li><i className="fa-solid fa-comments"></i> Trợ Giúp & Hỗ Trợ </li>
                                <li><i className="fa-solid fa-moon"></i> Màn Hình và Trợ Năng </li>
                                <li><button onClick={handlelogout}> <i className="fa-solid fa-right-from-bracket "></i>Đăng Xuất</button></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </>
        )
    }

    export default Menu
