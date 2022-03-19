import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.js";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory(); // allows us to programtically change the url e.i history of browser
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user with email and password
        console.log(auth);
        if (auth) {
          // "history of browser" go to homepage if user is authorized or newly registered
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="loginPage">
      <Link to="/">
        <img
          className="loginPage__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="loginPage__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="loginPage__signInButton btn--yellow"
          >
            Sign-In
          </button>
        </form>

        <p>
          By continuing, you agree to the <span>Amazon Clone</span> Conditions
          of Use and Privacy Notice.
        </p>

        <button
          onClick={register}
          className="loginPage__registerButton btn--gray"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
