import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logoPhoto" className={styles.logoImage} />
      </div>

      <div className={styles.routes}>
        <div> Тренажёры </div>
        <div> Тренеры </div>
        <div> Массаж </div>
        <div> Магазин </div>
      </div>

      <div className={styles.burger} onClick={handleShow}>
        <GiHamburgerMenu />
      </div>

      <Offcanvas
        bsPrefix={styles.offcanvas}
        placement="end"
        scroll="true"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header bsPrefix={styles.offcanvas_header} closeButton>
          <Offcanvas.Title bsPrefix={styles.offcanvas_title}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body bsPrefix={styles.offcanvas_body}>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
