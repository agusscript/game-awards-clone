import "./Explore.scss";
import homeExplore1 from "../../../assets/home_explore-1.jpg";
import homeExplore2 from "../../../assets/home_explore-2.jpg";

function Explore() {
  return (
    <section className="explore">
      <div className="wrapper explore-wrapper">
        <div className="explore-content">
          <h1 className="title">Explore</h1>
          <div className="options-container">
            <img
              className="explore-img"
              src={homeExplore1}
              alt="Home explore option winners"
            />
            <img
              className="explore-img"
              src={homeExplore2}
              alt="Home explore option future class"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
