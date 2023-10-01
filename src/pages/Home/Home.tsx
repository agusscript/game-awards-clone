import "./Home.scss";
import Intro from "./Intro/Intro";
import News from "./News/News";
import Explore from "./Explore/Explore";
import Email from "./Email/Email";
import { useEffect, useRef } from "react";

function Home() {
  const divOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 4 second!");
      divOverlayRef.current?.classList.add("hidden");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="home-overlay" ref={divOverlayRef}></div>
      <Intro />
      <News />
      <Explore />
      <Email />
    </div>
  );
}

export default Home;
