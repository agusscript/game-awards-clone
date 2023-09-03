import "./Nav.scss";
import { useContext } from "react";
import { AwardsContext } from "../../../provider/Provider";

function Nav() {
  const { footer } = useContext(AwardsContext);

  return (
    <nav className="footer-nav">
      <ul className="footer-nav-ul">
        {footer.nav.map((item) => (
          <li className="footer-nav-li" key={item.id}>
            <a className="footer-nav-a" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
