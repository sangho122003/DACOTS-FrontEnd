/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
const Footerintro = () => {
  return (
    <div>
          
          <div className="container-footer">
            <div className="title-footer">
              <h1>AVADA</h1>
              <button>Visit Help Center</button>
            </div>
            <div className="main-footer">
              <div>
                <h1>Công Ty</h1>
                <p><Link to='/About'>Về chúng tôi</Link></p>
                <p>Dịch Vụ Của Chúng Tôi</p>
                <p>Tin Tức</p>
                <p>Nhà Đầu Tư</p>
                <p>Blog</p>
                <p>Nghề Nghiệp</p>
                <p>avada AI</p>
              </div>
              <div>
                <h1>Sản Phẩm</h1>
                <p>Mạng Xã Hội</p>
                <p>Chia Sẻ Video</p>
                <p>Thương Mại Điện Tử</p>
                <p>Đặt Xe Công Nghệ</p>
                <p>Đặt Phòng Khách Sạn</p>

              </div>
              <div>
                <h1>Chính Sách</h1>
                <p>An Toàn</p>
                <p>Đa Dạng</p>
                <p>Bền Vững</p>

              </div>
              <div>
                <h1>Du Lịch</h1>
                <p>Kết Nối</p>
                <p>Đặt Xe</p>
                <p>Nhà Hàng Khách Sạn</p>
                <p>Sẻ Chia</p>


              </div>
            </div>
            <div className="Contact-footer">
              <div className="right-contact">
                <div className="icon-contact"><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
                <div className="icon-contact"><i className="fa fa-facebook-official" aria-hidden="true"></i></div>
                <div className="icon-contact"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                <div className="icon-contact"></div>
                <div className="icon-contact"></div>
              </div>
              <div className="left-contact">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="">
              <div>

              </div>
              <div></div>
            </div>
            <div className="end-footer">
              <h8>© 2024 AVADA Technologies Inc.</h8>
            </div>
          </div>
    </div>
  )
}

export default Footerintro
