import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrdersPage from "./components/OrdersPage/OrdersPage";

const promise = loadStripe(
  "pk_test_51IGuTbDNiHKU4gzm0BTMGibSA6LI0bku44uFEoBpslAismSjceYfuFaW8jYO7gA0eCG2Q9ITqXAO4c92EhSpvpaP00xDE8e3q3"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // listens for change of user
  useEffect(() => {
    // will only run once with the app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        // the user has just logged in or was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <OrdersPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckoutPage />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <PaymentPage />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
