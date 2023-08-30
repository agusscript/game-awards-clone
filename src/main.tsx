import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AwardsProvider } from "./provider/Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AwardsProvider>
      <App />
    </AwardsProvider>
  </React.StrictMode>
);
