import {
  BrowserRouter as Router,
  Navigate,
  redirect,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";
import { SearchContext } from "./SearchContext/searchContext";
import { searchReducer } from "./SearchContext/searchReducer";
import { useReducer } from "react";

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
  const user = true;
  // const navigate = Navigate();
  const [state, searchDispatch] = useReducer(searchReducer, "");
  return (
    <SearchContext.Provider value={{ state, searchDispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<Starter />} />

          <Route
            path="/login"
            element={user ? <Home /> : <Navigate replace to="/login" />}
          />

          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            // element={user ? <Home /> : <Navigate replace to="/login" />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myCart" element={<Mycart />} />
          <Route path="/products/?" element={<SeeAll />} />
          <Route path="/product/?" element={<SingleProduct />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
