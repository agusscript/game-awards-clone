import "./Header.scss";
import AwardsLogo from "../common/AwardsLogo";
import { useContext } from "react";
import { AwardsContext } from "../../provider/Provider";

function Header() {
  const { header } = useContext(AwardsContext);

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <AwardsLogo className="header-logo" width={45} height={45} color="#ffffff" />
          <nav className="header-nav">
            {header.nav.map((item) => (
              <li className="header-li" key={item.id}>
                <a className="header-a" href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
          </nav>
          <button className="header-sign-btn">
            <img src="src\assets\login-icon.svg" alt="login icon" />
            SIGN IN
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
