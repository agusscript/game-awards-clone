import "./HomeLoader.scss";
import { useEffect, useRef } from "react";
import loadingImg from "../../assets/skydiver-01.gif";

function HomeLoader() {
  const divLoaderRef = useRef<HTMLDivElement>(null);
  const textLoaderRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      textLoaderRef.current?.classList.add("active");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      divLoaderRef.current?.classList.add("animation");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      divLoaderRef.current?.classList.add("hidden");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-loader" ref={divLoaderRef}>
      <img className="home-loader-img" src={loadingImg} alt="loading" />
      <p className="home-loader-text" ref={textLoaderRef}>LOADING</p>
    </div>
  );
}

export default HomeLoader;
