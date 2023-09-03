import "./Home.scss";
import Intro from "./Intro/Intro";
import News from "./News/News";
import Explore from "./Explore/Explore";
import Email from "./Email/Email";

function Home() {
  return (
    <div className="home">
      <Intro />
      <News />
      <Explore />
      <Email />
    </div>
  );
}

export default Home;
