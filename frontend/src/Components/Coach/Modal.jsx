import React from "react";
import styles from "./Coach.module.scss";
import style from "./Modal.module.scss";

const Modal = ({ modalActive, setModalActive, coach }) => {
  return (
    <div className={styles.modalBlock}>
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
    </div>
  );
};

export default Modal;
