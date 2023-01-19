import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("token");
  const login = useSelector((state) => state.users.login);

  // const clearToken = () => {
  //   window.location.reload();
  //   localStorage.clear(token);
  // };

  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logoPhoto" className={styles.logoImage} />
      </div>

      <div className={styles.routes}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#fdc113" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/simulators"
        >
          Тренажёры
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#fdc113" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/coaches"
        >
          Тренеры
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#fdc113" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/massage"
        >
          Массаж
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#fdc113" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/sports_bar"
        >
          Спорт-Бар
        </NavLink>
      </div>

      <div className={styles.burger} onClick={handleShow}>
        <GiHamburgerMenu />
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll="true"
        className={styles.offcanvas}
      >
        <Offcanvas.Header className={styles.offcanvas_header} closeButton>
          <Offcanvas.Title className={styles.offcanvas_title}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvas_body}>
          <div className={styles.auth}>
            <Link to="/login">
              <button className={styles.bottone1}>Авторизация</button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
