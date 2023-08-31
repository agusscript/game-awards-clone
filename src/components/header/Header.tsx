import "./Header.scss";
import AwardsLogo from "../common/IconAwards";
import signInImage from "../../assets/login-icon.svg";
import { useContext } from "react";
import { AwardsContext } from "../../provider/Provider";

function Header() {
  const { header } = useContext(AwardsContext);

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <AwardsLogo className="header-logo" width={45} height={45} color="whitesmoke" />

          <nav className="header-nav">
            <ul className="header-ul">
              {header.nav.map((item) => (
                <li className="header-li" key={item.id}>
                  <a className="header-a" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="header-sign-btn">
            <img src={signInImage} alt="login icon" />
            {header.button.title}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
