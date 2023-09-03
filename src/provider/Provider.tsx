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

    news: {},

    explore: {},

    email: {},
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
