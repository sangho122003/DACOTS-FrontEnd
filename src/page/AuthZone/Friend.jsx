import Menu from "../../component/AuthZone/Menu"
import Postlist from "../../component/AuthZone/Postlist"
import SideBar from "../../component/AuthZone/SideBar"

const Friend = () => {
  return (
    <div>
       <Menu />
      <div className='Main'>
        <div className='spacemain'></div>
        <div>
          <div className='SideBar'>
            <SideBar/>
          </div>
          <div className='MainPost'>
            <Postlist/>
          </div>
          <div className='Message-list'>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Friend
