import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle redirect from 404.html for GitHub Pages
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
