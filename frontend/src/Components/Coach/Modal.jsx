import React from "react";
import styles from "./Coach.module.scss";
import style from "./Modal.module.scss";
import Fade from "react-reveal/Fade";
const Modal = ({ modalActive, setModalActive, coach }) => {
  return (
    <Fade left cascade>
    <div style={{backgroundColor: '#716f7083'}} className={styles.modalBlock}>
      <div className={styles.closeBlock}>
        <button
          className={styles.closeBtn}
          onClick={() => setModalActive(false)}
        >
          X
        </button>
      </div>
      <div className={style
      }>
        <div className={style.imgBlock}>
          <img
            className={style.imgCoach}
            src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
            alt="Фотографии тренеров"
          />
        </div>
        <div>
          <div>{coach.name}</div>
          <div>{coach.description}</div>
        </div>
      </div>
      <div className={styles.sendingBlock}>
        <button className={styles.sendingBtn}>Отправить</button>
      </div>
    </div></Fade>
  );
};

export default Modal;
