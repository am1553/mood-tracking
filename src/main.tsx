// style imports
import "@fontsource/reddit-sans/400.css";
import "@fontsource/reddit-sans/500.css";
import "@fontsource/reddit-sans/600.css";
import "@fontsource/reddit-sans/700.css";
import "@fontsource/reddit-sans/500-italic.css";
import "./index.css";

// app imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
