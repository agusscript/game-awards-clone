import "./Footer.scss";
import Nav from "./Nav/Nav";
import LogoAwards from "../common/LogoAwards";
import IconCards from "./IconCards/IconCards";
import { useContext } from "react";
import { AwardsContext } from "../../provider/Provider";

function Footer() {
  const { footer } = useContext(AwardsContext);

  return (
    <footer className="footer">
      <div className="wrapper footer-wrapper">

        <section className="nav-section">
          <LogoAwards className="nav-section-logo" color="gray" />
          <Nav />
          <div className="nav-section-divider"></div>
          <p className="nav-section-copyright">{footer.copyright}</p>
        </section>

        <section className="icons-section">
          <h2 className="icons-section-title">Follow us</h2>
          <IconCards />
        </section>
        
      </div>
    </footer>
  );
}

export default Footer;
