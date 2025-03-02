import { Link } from "react-router-dom"
import '../../../assets/document/registerdoc.css'
const Regiserdoc = () => {
    
  return (
    <div className="registration-guide">
    <h1>Hướng Dẫn Đăng Kí:</h1>
    <h2>Bước 1: Vào Trang Đăng Nhập và chuyển sang phần đăng nhập</h2>
    <p> Đăng nhập vào <Link to="/login">Tại Đây</Link> </p>
    <h2>Bước 2: Chuyển Sang phần Đăng Nhập</h2>
    <h2>Bước 3: Hoàn Thành Thông Tin và Bấm Đăng Nhập</h2>
    <div className="navigation-links">
      <div><Link to="/document/start">Trước</Link></div>
      <div><Link to="/document/signin">Tiếp Theo</Link></div>
    </div>
  </div>
  )
}

export default Regiserdoc
