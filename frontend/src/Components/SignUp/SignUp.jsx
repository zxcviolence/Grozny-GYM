import React, { useEffect, useState } from "react";
import { authSignUp } from "../../features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const error = useSelector((state) => state.users.error);
  const token = useSelector((state) => state.users.token);
  const successfully = useSelector((state) => state.users.successfully);
  const loading = useSelector((state) => state.users.loading);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    await e.preventDefault();
    dispatch(authSignUp({ login, password }));
  };

  return (
    <div>
      <form action="#" onSubmit={handleRegister}>
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
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
