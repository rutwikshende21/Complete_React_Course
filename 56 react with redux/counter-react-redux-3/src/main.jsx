import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import counterStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrapping our App as a child inside a provider, providing the store with react to our App, so that all the components inside our App can directly use the store */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
