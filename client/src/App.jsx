import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SendMessage from "./components/SendMessage";
import Dropdown from "./components/Dropdown";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import ProductSPage from "./pages/ProductSPage";
import { useSelector } from "react-redux";
import SucccessPage from "./pages/SucccessPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 639 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:category" exact>
            <ProductSPage />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage />
          </Route>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/register" exact>
            {user ? <Redirect to="/" /> : <RegisterPage />}
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/success" exact>
            <SucccessPage />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Switch>
        <SendMessage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
