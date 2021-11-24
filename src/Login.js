import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import AuthService from "./authService";

const Login = ({ /*user,*/ setCurrentUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hi");
    alert(`username is ${username}, password is ${password}`);
    //props.setToken("hello");
    AuthService.login(username);
    setCurrentUser(AuthService.getCurrentUser());
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        Username:
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

Login.propTypes = {
  setCurrentUser: PropTypes.func,
  //user: PropTypes.string,
};

export default Login;
