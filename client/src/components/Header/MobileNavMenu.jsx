import { ReactComponent as LogoText } from '../../assets/svg/LogoText.svg'
import {ReactComponent as CloseIcon} from '../../assets/svg/close.svg'
import "./MobileNavMenu.scss";

import {Link} from 'react-router-dom'

const MobileNavMenu = ({closeNav, handleLogout}) => {
  return (
    <nav className='mobileMenu'>
      <div className='mobileMenu__close' onClick={closeNav}>
        <CloseIcon  />
      </div>
      <ul className='mobileMenu__list'>
        <li>
          <Link to="/" onClick={closeNav} > <LogoText className='mobileMenu__logo' /></Link>
        </li>
        <li>
          <Link to="/tracks" onClick={closeNav} > Explore </Link>
        </li>
        <li>
          <Link to='/login' onClick={() => {handleLogout(); closeNav(); }} > Logout </Link>
        </li>
        <li>
          <Link to='/account' > <img src="https://images.unsplash.com/photo-1586022045315-1cdd6493045c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hiker" className='mobileMenu__avatar' /> </Link>
        </li>
      </ul>

    </nav>
  )
}

export default MobileNavMenu