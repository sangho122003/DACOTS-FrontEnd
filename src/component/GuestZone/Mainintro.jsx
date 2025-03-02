/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom';

const Mainintro = () => {
  return (
    <div>
      <div className="banner">
        <div className='banner-center'>
          <div className='right-banner'>

            <h1>AVADA</h1>
            <h3>Chào Mừng Đến với AVADA</h3>
            <h5>Mạng Xã Hội Đa Năng tiện dụng với nhiều chức năng</h5>
            <div>
              <div className='ham-download'>
                <Link className='button' to='/document/start' >Document</Link >
                <Link className='button' to='/about' >ABOUT US</Link >
              </div>
              <br />
              <div className='ham-download'>
                <Link className='button'  > <i className="fa-brands fa-android"></i>  CH PLAY</Link>
                <Link className='button' > <i className="fa-brands fa-apple"></i>  APP STORE</Link >
              </div>
            </div>
          </div>
          <div className='left-banner'>
            <Link to="/login" className="link">Start With WEBSITE</Link>

          </div>

        </div>
      </div>
      <div className="Introduction">
        <h1>Giới Thiệu</h1>
        <p>Trong kỷ nguyên số hóa ngày nay, nhu cầu sử dụng các dịch vụ trực tuyến ngày càng trở nên phổ biến và đa dạng. Chúng tôi tự hào giới thiệu một nền tảng Mạng Xã Hội mới, không chỉ giúp kết nối mọi người mà còn tích hợp nhiều tính năng nổi bật, mang lại trải nghiệm tiện ích và phong phú cho người dùng.</p>

        <strong>1. Mạng Xã Hội</strong>
        <p>Đây là nơi mọi người có thể kết nối, chia sẻ hình ảnh, cảm nghĩ và tương tác với bạn bè, người thân hoặc cộng đồng trực tuyến. Với giao diện thân thiện và dễ sử dụng, chúng tôi giúp bạn nhanh chóng cập nhật những thông tin mới nhất từ mạng lưới của mình.</p>

        <strong>2. Video Ngắn</strong>
        <p>Nền tảng của chúng tôi không chỉ dừng lại ở việc kết nối xã hội, mà còn cho phép người dùng đăng tải và xem các video ngắn. Đây là cách tuyệt vời để bạn thể hiện bản thân, chia sẻ khoảnh khắc thú vị hoặc khám phá nội dung sáng tạo từ người dùng trên khắp thế giới.</p>

        <strong>3. Thương Mại Điện Tử</strong>
        <p>Với tính năng thương mại điện tử được tích hợp, người dùng có thể mua sắm các sản phẩm yêu thích từ nhiều lĩnh vực khác nhau ngay trên nền tảng của chúng tôi. Chúng tôi cung cấp một không gian mua sắm an toàn, tiện lợi và đáng tin cậy.</p>

        <strong>4. Đặt Xe Công Nghệ</strong>
        <p>Chúng tôi hỗ trợ người dùng đặt xe công nghệ một cách dễ dàng và nhanh chóng. Bạn có thể tìm kiếm và đặt chuyến đi với chỉ vài thao tác đơn giản, đồng thời theo dõi lịch trình và thông tin của tài xế theo thời gian thực.</p>

        <strong>5. Đặt Phòng Khách Sạn</strong>
        <p>Không chỉ hỗ trợ kết nối và thương mại, nền tảng của chúng tôi còn cho phép người dùng tìm kiếm và đặt phòng khách sạn tiện lợi. Với hệ thống đánh giá minh bạch và nhiều lựa chọn phòng phong phú, bạn sẽ dễ dàng tìm được nơi lưu trú ưng ý cho các chuyến du lịch hoặc công tác.</p>
      </div>

      <div className="provide">
        <h1>Tiện Ích</h1>
        <div className="provide-banner-one">
          <div className="icon">
            <i className="fa-solid fa-globe"></i>
            <h1>Mạng Xã Hội</h1>
          </div>
          <div className="icon">
            <i className="fa fa-video-camera" aria-hidden="true"></i>

            <h1>Video Ngắn</h1>
          </div>
          <div className="icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <h1>Thương Mại Điện Tử</h1>
          </div>
        </div>
        <div className="provide-banner-two">
          <div className="icon">
            <i className="fa fa-car" aria-hidden="true"></i>
            <h1>Đặt Xe Công Nghệ</h1>
          </div>
          <div className="icon">
            <i className="fa fa-building" aria-hidden="true"></i>
            <h1>Đặt Phòng Khách Sạn</h1>
          </div>
        </div>

      </div>
      <h1>Tải Xuống</h1>
      <div className='Download'>
        <div className='right-Download'>
          <div className='tagdow tagwindown'>
            <button className='btn-downlaod btn-down-win'>
              <p className='text-download'><i className="fa-solid fa-download"></i> Windows</p>
            </button>
            <div className='iondown'><i className="fa-brands fa-windows"></i></div>


          </div>
          <div className='tagdow taglinux'>
            <button className='btn-downlaod btn-down-linux'>
              <p className='text-download'><i className="fa-solid fa-download"></i> Linux</p>
            </button>
            <div className='iondown'><i className="fa-brands fa-linux"></i></div>
          </div>
          <div className='tagdow tagmac'>
            <button className='btn-downlaod btn-down-Mac'>
              <p className='text-download'><i className="fa-solid fa-download"></i> MacOS</p>
            </button>
            <div className='iondown'>
              <img src='../../public/icons8-mac-500.png'/>
            </div>

          </div>
        </div>
        <div className='left-Download'>
          <div className='tagdow tagios'>
            <button className='btn-downlaod btn-down-and'>
              <p className='text-download'><i className="fa-solid fa-download"></i> Android</p>
            </button>
            <div className='iondown'><i className="fa-brands fa-android"></i></div>

          </div>
          <div className='tagdow tagandroid'>  <button className='btn-downlaod'>
            <p className='text-download'><i className="fa-solid fa-download"></i> IOS</p>
          </button>
            <div className='iondown'><i className="fa-brands fa-apple"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainintro
