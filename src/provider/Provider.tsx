import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const data = {
  header: {
    nav: [
      { id: uuidv4(), title: "home", href: "#", active: true },
      { id: uuidv4(), title: "news", href: "#" },
      { id: uuidv4(), title: "about", href: "#" },
      { id: uuidv4(), title: "rewind", href: "#" },
      { id: uuidv4(), title: "watch", href: "#" },
      { id: uuidv4(), title: "jury", href: "#" },
      { id: uuidv4(), title: "winners", href: "#" },
      { id: uuidv4(), title: "players' voice", href: "#" },
      { id: uuidv4(), title: "future class", href: "#" },
    ],

    button: {
      title: "sign in",
    },
  },

  home: {
    intro: {
      date: {
        month: "december 7",
        year: "2023",
      },
      subtitle: "sign up for updates",
      button: {
        title: "sign up",
      },
    },

    news: {
      articles: [
        {
          id: uuidv4(),
          date: "August 28, 2023",
          title: "The game awards set for December 7, 2023",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/tga23-teaser.jpg?raw=true",
        },
        {
          id: uuidv4(),
          date: "December 16, 2022",
          title: "The game awards hits 103 millions livestreams",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/tga22_103.jpg?raw=true",
        },
        {
          id: uuidv4(),
          date: "December 6, 2022",
          title: "Twitch viewer rewards during The game awards",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/twitch_rewards.jpg?raw=true",
        },
        {
          id: uuidv4(),
          date: "November 16, 2022",
          title: "The game awards: the imax experience",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/news-img-4.jpg?raw=true",
        },
        {
          id: uuidv4(),
          date: "December 6, 2021",
          title: "The game awards partners with truth",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/news-img-5.jpg?raw=true",
        },
        {
          id: uuidv4(),
          date: "December 9, 2020",
          title: "The game awards festival on Steam/Xbox/Geforce Now",
          img: "https://github.com/agusscript/game-awards-clone/blob/main/src/assets/news-img-6.jpg?raw=true",
        },
      ],
    },
  },

  footer: {
    nav: [
      { id: uuidv4(), title: "about", href: "#" },
      { id: uuidv4(), title: "jury", href: "#" },
      { id: uuidv4(), title: "privacy", href: "#" },
      { id: uuidv4(), title: "subscriptions", href: "#" },
      { id: uuidv4(), title: "faq", href: "#" },
      { id: uuidv4(), title: "contact", href: "#" },
      { id: uuidv4(), title: "terms", href: "#" },
    ],

    copyright: "© 2023, The Game Awards",
  },
};

export const AwardsContext = createContext(data);

export const AwardsProvider = ({ children }: { children: React.ReactNode }) => {
  return <AwardsContext.Provider value={data}>{children}</AwardsContext.Provider>;
};
