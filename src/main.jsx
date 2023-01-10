import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./App/store";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
{ /* <BrowserRouter>*/}
    <Provider store={store}>
      <App />
    </Provider>
 {/* </BrowserRouter>*/}
  </HashRouter>
);
