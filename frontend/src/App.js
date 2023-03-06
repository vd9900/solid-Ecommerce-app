import {
  BrowserRouter as Router,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import { SearchContext } from "./SearchContext/searchContext";
import { searchReducer } from "./SearchContext/searchReducer";
import { useReducer } from "react";
import { RequireAuth } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";

// pages
import Starter from "./pages/start";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Mycart from "./pages/Mycart";
import SeeAll from "./pages/SeeAll";
import SingleProduct from "./pages/SingleProduct.jsx";

function App() {
  const isAuth = useIsAuthenticated();
  const [state, searchDispatch] = useReducer(searchReducer, "");
  return (
    <SearchContext.Provider value={{ state, searchDispatch }}>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Starter />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/welcome">
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/me"
            element={
              <RequireAuth loginPath="/welcome">
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="/cart"
            element={
              <RequireAuth loginPath="/welcome">
                <Mycart />
              </RequireAuth>
            }
          />

          <Route
            path="/products/?"
            element={
              <RequireAuth loginPath="/welcome">
                <SeeAll />
              </RequireAuth>
            }
          />

          <Route
            path="/product/?"
            element={
              <RequireAuth loginPath="/welcome">
                <SingleProduct />
              </RequireAuth>
            }
          />
          <Route path="*" element={<h1>page not found 404</h1>} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
