import { Link } from "react-router-dom"
import Button from '../Common/Button'

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className='navigation__list'>
        <li className="navigation__item">
          <Link to="/tracks" > <Button content='Explore' /> </Link>
        </li>
        <li className="navigation__item">
          <Link to='/login' > Logout </Link>
        </li>
        <li className="navigation__item">
          <Link to='/account' > <img src="https://images.unsplash.com/photo-1586022045315-1cdd6493045c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hiker" className='navigation__avatar' /> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav