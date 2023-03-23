import React from "react";

import { Provider } from "react-redux";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./store";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import ErrorBoundary from "./utils/hooks/Errors/ErrorBoundary";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>{" "}
      </Provider>
    </AuthProvider>
  </ErrorBoundary>
);
