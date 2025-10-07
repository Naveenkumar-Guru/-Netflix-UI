import React from "react";
import ReactDOM from "react-dom/client"; // React 18
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

// ✅ Select the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
