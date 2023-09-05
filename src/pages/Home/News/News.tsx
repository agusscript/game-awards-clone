import "./News.scss";
import { useContext } from "react";
import { AwardsContext } from "../../../provider/Provider";
import NewsArticle from "../../../components/common/NewsArticle/NewsArticle";

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
          {home.news.articles.map((item) => (
            <NewsArticle key={item.id} srcImg={item.img} date={item.date} title={item.title} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default News;
