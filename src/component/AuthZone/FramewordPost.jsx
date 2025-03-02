import '../../assets/AuthZone/framewordPost.css'
const FramewordPost = () => {
  return (
    <div className="Frame-post">
      <div className='Top-Post'>
        <div className='frame-avatar'>
          <img src='../../../public/Wheather/bg-sun.png.png'/>
        </div>
        <div className='frame-input'>
          <input type='text' placeholder='Bạn Đang Nghĩ gì thế?'/>
        </div>
      </div>
      <div className='Down-Post'>
        <div className='part'><i className="fa-solid fa-video"></i> <p>  Video Trực Tuyến</p></div>
        <div className='part'><i className="fa-solid fa-images"></i> <p>  Ảnh/Video</p></div>
        <div className='part'><i className="fa-solid fa-face-smile"><p>Cảm Xúc</p></i></div>
      </div>
    </div>
  )
}

export default FramewordPost
