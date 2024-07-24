import './Header.css'
// import avatar from '../../assets/avatar.svg'
import { useSelector } from 'react-redux'
import image from './admin.jpg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userCred } = userLogin
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <p>School Management System</p>
      {/* <div className='navbar__left'>
        <a href='#'>Subscribers</a>
        <a href='#'>Video Management</a>
        <a className='active_link' href='#'>
          Admin
        </a>
      </div>
       */}
      <div className='navbar__right'>
        <span className='loggedinas'>
          {/* <img src={userCred && userCred.image} alt='no image' /> */}
          <img src={image} alt='no admin image' />
          {/* <p>{userCred && userCred.name}</p> */}
        </span>
      </div>
    </nav>
  )
}

export default Navbar
