import "./News.scss";
import { useContext } from "react";
import { AwardsContext } from "../../../provider/Provider";
import NewsArticle from "../../../components/common/NewsArticle/NewsArticle";
import tgaTeaser from "../../../assets/tga23-teaser.jpg";
import tgaLiveStreams from "../../../assets/tga22_103.jpg";
import tgaRewards from "../../../assets/twitch_rewards.jpg";

function News() {
  const { home } = useContext(AwardsContext);

  return (
    <section className="news">
      <div className="wrapper">

        <div className="title-container">
          <h1 className="title-container-title">news</h1>
          <h2 className="title-container-subtitle">view all</h2>
        </div>

        <div className="grid-news-container">
          <NewsArticle
            srcImg={tgaTeaser}
            date="August 28, 2023"
            title="The game awards set for December 7, 2023"
          />
          <NewsArticle
            srcImg={tgaLiveStreams}
            date="December 16, 2022"
            title="The game awards hits 103 millions livestreams"
          />
          <NewsArticle
            srcImg={tgaRewards}
            date="December 6, 2022"
            title="Twitch viewer rewards during tga"
          />
        </div>

      </div>
    </section>
  );
}

export default News;
