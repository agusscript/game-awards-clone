import "./Home.scss";
import { useContext } from "react";
import { AwardsContext } from "../../provider/Provider";
import LogoAwards from "../../components/common/LogoAwards";
import MainButton from "../../components/common/MainButton/MainButton";

function Home() {
  const { home } = useContext(AwardsContext);

  return (
    <div className="home">
      <section className="home-intro">
        <div className="wrapper">
          <div className="home-intro-video-container">
            <iframe
              className="home-video-container-iframe"
              width="auto"
              height="100%"
              src="https://www.youtube.com/embed/vl9yakt_5tc"
              title="THE GAME AWARDS 2022: Official 4K Livestream: Star Wars, FINAL FANTASY XVI,  Hades II, Halsey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="home-intro-text-container">
            <LogoAwards
              className="home-intro-text-container-logo-awards"
              color="whitesmoke"
            />

            <div className="home-intro-text-container-title-wrapper">
              <h1 className="date-month">{home.intro.date.month}</h1>
              <h2 className="date-year">{home.intro.date.year}</h2>
            </div>

            <h3 className="home-intro-text-container-subtitle">{home.intro.subtitle}</h3>

            <MainButton
              className="main-btn home-intro-text-container-button"
              text={home.intro.button.title}
            />

          </div>
        </div>
      </section>

      <section className="home-news"></section>
      <section className="home-explore"></section>
      <section className="home-email"></section>
    </div>
  );
}

export default Home;
