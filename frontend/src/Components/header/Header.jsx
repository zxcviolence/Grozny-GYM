import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("token");
  const login = useSelector((state) => state.users.login);

  const clearToken = () => {
    window.location.reload();
    localStorage.clear(token);
  };

  const handleClick = () => {
    setShow(false);
    window.location.href = "/login";
  };

  return (
    <header>
      <div className={styles.logo}>
      <a href="/">  <img src={logo} alt="logoPhoto" className={styles.logoImage} /></a>
      </div>

      <div className={styles.routes}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
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
              color: isActive ? "#960018" : "white",
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
              color: isActive ? "#960018" : "white",
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
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/sports_bar"
        >
          Спорт-Бар
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#960018" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/job"
        >
          Вакансии
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
            <Link to="/login" hidden={token}>
              <button onClick={handleClick} className={styles.bottone1}>
                <strong>Личный кабинет</strong>
              </button>
            </Link>
          </div>
          {token && (
            <>
              <div className={styles.profilebox}>
                <div className={styles.nickname}>{login}</div> |
                <div className={styles.profile}>
                  <Link to="/profile/edituser">Личный кабинет</Link>
                </div>
                |
                <div className={styles.logoutbtn}>
                  <button onClick={clearToken}>Выйти</button>
                </div>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
