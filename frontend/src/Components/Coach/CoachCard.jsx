import React from "react";
import { useState } from "react";
import styles from "./Coach.module.scss"
import Modal from "./Modal";
import Fade from "react-reveal/Fade";
const CoachCard = ({coach}) => {
    const [modalActive, setModalActive] = useState(false);

  return (  
    <Fade bottom cascade>
    <div className={styles.mapBlock} key={coach._id}>
      <div className={styles.imgBlock}>
        <img
          className={styles.imgCoach}
          src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
          alt="Фотографии тренеров"
        />
      </div>
      <div className={styles.name}>{coach.name}</div>
      <div className={styles.description}>{coach.description}</div>
      <button className={styles.btn} onClick={() => setModalActive(true)}>
        Записаться
      </button>
      
      {modalActive === true ? (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          coach={coach}
        />
      ) : null}
      
    </div></Fade>
  
  );
};

export default CoachCard;
