import "./Header.scss";
import AwardsLogo from "../common/IconAwards";
import signInImage from "../../assets/login-icon.svg";
import { useContext, useState } from "react";
import { AwardsContext } from "../../provider/Provider";
import hamburgerIcon from "../../assets/hamburger-menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";

function Header() {
  const { header } = useContext(AwardsContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className={`overlay ${mobileMenu ? "active" : "hidden"}`}></div>

          <AwardsLogo className="header-logo" width={45} height={45} color="whitesmoke" />

          <nav className={`header-nav ${mobileMenu && "active"}`}>
            <ul className="header-nav-ul">
              {header.nav.map((item) => (
                <li className="header-nav-li" key={item.id}>
                  <a
                    className={`header-nav-a ${item.active ? "active" : ""}`}
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-buttons-container">
            <button className="header-buttons-container-sign-btn">
              <img src={signInImage} alt="login icon" />
              {header.button.title}
            </button>

            <button
              className="header-buttons-container-menu-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <img
                className={`${mobileMenu && "hidden"}`}
                src={hamburgerIcon}
                alt="hamburger icon"
              />
              <img
                className={`${!mobileMenu && "hidden"}`}
                src={closeIcon}
                alt="close icon"
              />
            </button>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
