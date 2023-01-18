import React, { useEffect, useState } from "react";
import { authSignIn } from "../../features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  const error = useSelector((state) => state.users.error);
  const loading = useSelector((state) => state.users.loading);
  const successfully = useSelector((state) => state.users.successfully);
  const token = localStorage.getItem("token");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
console.log(token);
  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    dispatch(authSignIn({ login, password }));
  };

//   useEffect(() => {
//     if (successfully) {
//       setStyle(styles.formBox);
//     }
//     if (token) {
//       window.location.href = "/";
//     }
//   }, [token, successfully]);

  return (
    <div>
      <p>Login</p>
      <form action="#" onSubmit={handleLogin}>
        <input
          type="text"
          value={login}
          onChange={handleSetLogin}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={handleSetPassword}
          placeholder="Enter your password"
        />
        <br />
        <button disabled={!login || !password} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default SignIn;
