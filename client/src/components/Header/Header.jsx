import { useState } from "react";
import { ReactComponent as LogoText } from "../../assets/svg/LogoText.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";

//Compo
import MobileNavMenu from "./MobileNavMenu";
import Nav from "./Nav";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

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
        <MobileNavMenu className="header__mobile" closeNav={handleMobileMenu} />
      ) : (
        <></>
      )}
      <Nav />
    </header>
  );
};

export default Header;
