import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import PlayerContextProvider from "./context/PlayerContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PlayerContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </PlayerContextProvider>
  </Provider>,
);
