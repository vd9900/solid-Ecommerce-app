import Starter from "./pages/start";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Mycart from "./pages/Mycart";
import SeeAll from "./pages/SeeAll";
import SingleProduct from "./pages/SingleProduct.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myCart" element={<Mycart />} />
        <Route path="/all" element={<SeeAll />} />
        <Route path="/product/?" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
