import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hi");
    alert(`username is ${username}, password is ${password}`);
    props.setToken("hello");
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
  setToken: PropTypes.func,
};

export default Login;
