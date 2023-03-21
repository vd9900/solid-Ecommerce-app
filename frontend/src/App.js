import {
  BrowserRouter as Router,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import { SearchContext } from "./SearchContext/searchContext";
import { searchReducer } from "./SearchContext/searchReducer";
import { lazy, Suspense, useEffect, useReducer, useState } from "react";
import { RequireAuth } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";

// pages
import Starter from "./pages/start";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetEmail from "./components/login&signup/resetPassword/ResetEmail";
import Enterotp from "./components/login&signup/resetPassword/Enterotp";
import CreatePassword from "./components/login&signup/resetPassword/CreatePassword";
import Address from "./components/order/Address";
import Payment from "./components/order/Payment";
import Order from "./components/order/Order";
import PaymentConform from "./components/order/PaymentConform.jsx";
import SingleOrder from "./components/order/SingleOrder";
import Contact from "./components/Contact.jsx";
import { Helmet } from "react-helmet";
import Loder from "./components/Loder";
import Offline from "./components/Offline";
const Home = lazy(() => import("./pages/Home"));
const SeeAll = lazy(() => import("./pages/SeeAll"));
const Cart = lazy(() => import("./pages/Mycart"));
const Profile = lazy(() => import("./pages/Profile"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));

function App() {
  const isAuth = useIsAuthenticated();
  const [isOffline, setIsoffline] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "offline",
      function (e) {
        setIsoffline(true);
      },
      false
    );
  }, []);
  if (isOffline) {
    return <Offline />;
  }
  return (
    <Router>
      <header>
        <Helmet>
          <title>E-commerce</title>
        </Helmet>
      </header>
      <Suspense fallback={<Loder />}>
        <Routes>
          <Route path="/welcome" element={<Starter />} />
          <Route path="/forgot_password" element={<ResetEmail />} />
          <Route path="/forgot_password/otp" element={<Enterotp />} />
          <Route
            path="/forgot_password/newPassword"
            element={<CreatePassword />}
          />
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
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="/myorders"
            element={
              <RequireAuth loginPath="/welcome">
                <Order />
              </RequireAuth>
            }
          />
          <Route
            path="/order"
            element={
              <RequireAuth loginPath="/welcome">
                <SingleOrder />
              </RequireAuth>
            }
          />

          <Route
            path="/payment"
            element={
              <RequireAuth loginPath="/welcome">
                <Payment />
              </RequireAuth>
            }
          />
          <Route
            path="/payment/successfull"
            element={
              <RequireAuth loginPath="/welcome">
                <PaymentConform />
              </RequireAuth>
            }
          />
          <Route
            path="/contact"
            element={
              <RequireAuth loginPath="/welcome">
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="/cart/address"
            element={
              <RequireAuth loginPath="/welcome">
                <Address />
              </RequireAuth>
            }
          />

          <Route
            path="/products/"
            element={
              <RequireAuth loginPath="/welcome">
                <SeeAll />
              </RequireAuth>
            }
          />

          <Route
            path="/product/"
            element={
              <RequireAuth loginPath="/welcome">
                <SingleProduct />
              </RequireAuth>
            }
          />
          <Route path="*" element={<h1>page not found 404</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
