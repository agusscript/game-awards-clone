import "./NewsArticle.scss";
import MainButton from "../MainButton/MainButton";

type NewsArticleProps = {
  srcImg: string;
  title: string;
  date: string;
};

function NewsArticle({ srcImg, title, date }: NewsArticleProps) {
  return (
    <article className="news-card">
      <img className="news-card-img" src={srcImg} alt="The Game awards 2023 teaser" />
      <span className="news-card-date">{date}</span>
      <div className="news-card-divider"></div>
      <h2 className="news-card-title">{title}</h2>
      <MainButton className="main-btn news-card-button" text="READ MORE" />
    </article>
  );
}

export default NewsArticle;
