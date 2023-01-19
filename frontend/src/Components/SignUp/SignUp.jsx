import React, { useState } from "react";
import { authSignUp } from "../../features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    await dispatch(authSignUp({ login, password }));
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Grozny Gym
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://yt3.googleusercontent.com/bJBIdXdzb06uOOBAhjqgVEMufZ3kqRpNxireEJ2yy6ahhq_tHeC90B7mIV3iZzuXAmLMhm71tA=s900-c-k-c0x00ffffff-no-rj)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleRegister}
              sx={{ mt: 1 }}
            >
              <TextField
                autoFocus
                required
                margin="normal"
                fullWidth
                id="Login"
                label="Login"
                name="Login"
                type="text"
                autoComplete="Login"
                onChange={handleSetLogin}
                value={login}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleSetPassword}
                value={password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Зарегистрироваться
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link to="/login" element={<SignIn />} variant="body2">
                    {"Уже есть аккаунт? Войти"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
