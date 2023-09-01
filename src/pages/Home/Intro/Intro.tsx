import "./Intro.scss";
import { useContext } from "react";
import { AwardsContext } from "../../../provider/Provider";
import LogoAwards from "../../../components/common/LogoAwards";
import MainButton from "../../../components/common/MainButton/MainButton";

function Intro() {
  const { home } = useContext(AwardsContext);

  return (
    <section className="intro">
      <div className="wrapper intro-wrapper">
        <div className="intro-video-container">
          <iframe
            className="video-container-iframe"
            width="auto"
            height="100%"
            src="https://www.youtube.com/embed/vl9yakt_5tc"
            title="THE GAME AWARDS 2022: Official 4K Livestream: Star Wars, FINAL FANTASY XVI,  Hades II, Halsey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="intro-text-container">
          <LogoAwards
            className="intro-text-container-logo-awards"
            color="whitesmoke"
          />

          <div className="intro-text-container-title-wrapper">
            <h1 className="date-month">{home.intro.date.month}</h1>
            <h2 className="date-year">{home.intro.date.year}</h2>
          </div>

          <h3 className="intro-text-container-subtitle">{home.intro.subtitle}</h3>

          <MainButton
            className="main-btn intro-text-container-button"
            text={home.intro.button.title}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;