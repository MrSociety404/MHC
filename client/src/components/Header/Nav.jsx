import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = ({ handleLogout, user }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/tracks"> Explore </Link>
        </li>
        <li className="navigation__item">
          <Link to="/login" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/account">
            <img
              src={user.data.image}
              alt={user.data.nickname}
              className="navigation__avatar"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
