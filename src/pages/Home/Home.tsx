import "./Home.scss";
import Intro from "./Intro/Intro";
import News from "./News/News";

function Home() {
  return (
    <div className="home">
      <Intro />

      <News/>

      <section className="home-explore"></section>
      
      <section className="home-email"></section>
    </div>
  );
}

export default Home;
