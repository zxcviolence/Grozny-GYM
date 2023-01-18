import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Header = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Логин/Регистрация
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#">
            <SignIn />
            <SignUp />
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

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
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Авторизация
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
