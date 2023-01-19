import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Offcanvas.Body className={styles.offcanvas_body}></Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
