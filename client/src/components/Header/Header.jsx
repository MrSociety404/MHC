import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as LogoText } from "../../assets/svg/LogoText.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";

//Compo
import MobileNavMenu from "./MobileNavMenu";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [state, setState] = useContext(UserContext);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
  };

  if(state.data !== null) {
    return (
      <header className="header">
        <Link to="/">
          <LogoText className="header__log" />
        </Link>
        <MenuIcon
          className="header__mobileMenu header__mobile"
          onClick={handleMobileMenu}
        />
        {mobileMenu ? (
          <MobileNavMenu
            className="header__mobile"
            closeNav={handleMobileMenu}
            handleLogout={handleLogout}
            user={state}
          />
        ) : (
          <></>
        )}
        <Nav handleLogout={handleLogout} user={state} />
      </header>
    );
  } 

  return (
    <header className="header">
      <LogoText className="header__log" />
    </header>
  )

};

export default Header;
