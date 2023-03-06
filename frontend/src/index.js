import React from "react";

import { Provider } from "react-redux";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <App />
    </AuthProvider>
  </Provider>
);
