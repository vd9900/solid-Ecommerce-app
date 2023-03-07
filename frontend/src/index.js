import React from "react";

import { Provider } from "react-redux";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import store from "./store";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <App />
      </AuthProvider>
    </PersistGate>
  </Provider>
);
