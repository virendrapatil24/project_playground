import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
