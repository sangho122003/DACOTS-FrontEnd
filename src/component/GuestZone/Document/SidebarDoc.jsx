import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarDoc = () => {
     // Trạng thái để quản lý ẩn/hiện menu con của từng mục lớn
  const [expandedSections, setExpandedSections] = useState({
    start: false,
    home: false,
    friends: false,
    shop: false,
    booking: false,
  });

  // Hàm xử lý khi bấm vào từng mục lớn
  const handleToggle = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div>
       <div className="sidebar-documentpage">
          <p>Hỗ Trợ <b>AVADA</b></p>
          <ul>
            {/* Bắt Đầu */}
            <li className="start-section" onClick={() => handleToggle('start')}>
              Bắt Đầu
            </li>
            <ul className={`submenu ${expandedSections.start ? 'expanded' : ''}`}>
              <li><Link to="/document/register">Đăng Kí Tài Khoản</Link></li>
              <li>Đăng Nhập</li>
              <li>Cập Nhật Thông Tin Thành Viên</li>
              <li>Đăng Xuất</li>
            </ul>

            {/* Trang Chủ */}
            <li className="home-section" onClick={() => handleToggle('home')}>
              Trang Chủ
            </li>
            <ul className={`submenu ${expandedSections.home ? 'expanded' : ''}`}>
              <li>Hiển Thị Bài Đăng</li>
              <li>Thích Bài Đăng</li>
              <li>Bình Luận Bài Đăng</li>
              <li>Chia Sẻ Bài Đăng</li>
              <li>Xóa Bài Đăng</li>
            </ul>

            {/* Bạn Bè */}
            <li className="friends-section" onClick={() => handleToggle('friends')}>
              Bạn Bè
            </li>
            <ul className={`submenu ${expandedSections.friends ? 'expanded' : ''}`}>
              <li>Tìm Kiếm Bạn Bè</li>
              <li>Xem Trang Bạn Bè</li>
              <li>Kết Bạn</li>
              <li>Huỷ Kết Bạn</li>
              <li>Nhắn Tin</li>
            </ul>

            {/* Avada Shop */}
            <li className="shop-section" onClick={() => handleToggle('shop')}>
              Avada Shop
            </li>
            <ul className={`submenu ${expandedSections.shop ? 'expanded' : ''}`}>
              <li>Xem Sản Phẩm</li>
              <li>Tìm Kiếm Sản Phẩm</li>
              <li>Quản Lý Giỏ Hàng</li>
              <li>Thanh Toán</li>
              <li>Xem Lịch Sử Giao Dịch</li>
            </ul>

            {/* Booking */}
            <li className="booking-section" onClick={() => handleToggle('booking')}>
              Booking
            </li>
            <ul className={`submenu ${expandedSections.booking ? 'expanded' : ''}`}>
              <li>Tìm Kiếm Sản Phẩm</li>
              <li>Quản Lý Giỏ Hàng</li>
              <li>Thanh Toán</li>
              <li>Xem Lịch Sử Giao Dịch</li>
            </ul>

            {/* Các mục khác */}
            <li>Video Shot</li>
            <li>Avada Music</li>
            <li>Video</li>
            <li>Nhắn Tin</li>
          </ul>
        </div>
    </div>
  )
}

export default SidebarDoc
