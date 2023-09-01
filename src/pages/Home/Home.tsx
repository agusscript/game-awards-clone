import Explore from "./Explore/Explore";
import "./Home.scss";
import Intro from "./Intro/Intro";
import News from "./News/News";

function Home() {
  return (
    <div className="home">
      <Intro />

      <News />

      <Explore />

      <section className="home-email"></section>
    </div>
  );
}

export default Home;
