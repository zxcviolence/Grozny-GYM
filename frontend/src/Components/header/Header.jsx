import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";

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

  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logoPhoto" className={styles.logoImage} />
      </div>

      <div className={styles.routes}>
        <div> Тренажёры </div>
        <div> Тренеры </div>
        <div> Массаж </div>
        <div> Спортбар </div>
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
              Sign In
            </Link>
            {token && (
              <div className={styles.username}>
                <VscAccount className={styles.userIcon} />
                {login} |
                <button className={styles.exitButton} onClick={clearToken}>
                  Log out
                  <BiLogOut className={styles.logoutIcon} />
                </button>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
