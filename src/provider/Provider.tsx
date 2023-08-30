import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const data = {
  header: {
    nav: [
      { id: uuidv4(), title: "HOME", href: "#" },
      { id: uuidv4(), title: "NEWS", href: "#" },
      { id: uuidv4(), title: "ABOUT", href: "#" },
      { id: uuidv4(), title: "REWIND", href: "#" },
      { id: uuidv4(), title: "WATCH", href: "#" },
      { id: uuidv4(), title: "JURY", href: "#" },
      { id: uuidv4(), title: "WINNERS", href: "#" },
      { id: uuidv4(), title: "PLAYERS' VOICE", href: "#" },
      { id: uuidv4(), title: "FUTURE CLASS", href: "#" },
    ],
  },
};

export const AwardsContext = createContext(data);

export const AwardsProvider = ({ children }: { children: React.ReactNode }) => {
  return <AwardsContext.Provider value={data}>{children}</AwardsContext.Provider>;
};
