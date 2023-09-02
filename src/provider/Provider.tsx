import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const data = {
  header: {
    nav: [
      { id: uuidv4(), title: "HOME", href: "#", active: true },
      { id: uuidv4(), title: "NEWS", href: "#" },
      { id: uuidv4(), title: "ABOUT", href: "#" },
      { id: uuidv4(), title: "REWIND", href: "#" },
      { id: uuidv4(), title: "WATCH", href: "#" },
      { id: uuidv4(), title: "JURY", href: "#" },
      { id: uuidv4(), title: "WINNERS", href: "#" },
      { id: uuidv4(), title: "PLAYERS' VOICE", href: "#" },
      { id: uuidv4(), title: "FUTURE CLASS", href: "#" },
    ],

    button: {
      title: "SIGN IN",
    },
  },

  home: {
    intro: {
      date: {
        month: "DECEMBER 7",
        year: "2023",
      },
      subtitle: "SIGN UP FOR UPDATES",
      button: {
        title: "SIGN UP",
      },
    },

    news: {},

    explore: {},

    email: {},
  },

  footer: {},
};

export const AwardsContext = createContext(data);

export const AwardsProvider = ({ children }: { children: React.ReactNode }) => {
  return <AwardsContext.Provider value={data}>{children}</AwardsContext.Provider>;
};
