import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoaches } from "../../features/coachSlice";
import styles from "./Coach.module.scss";
import Modal from "./Modal";

const Coach = () => {
  const dispatch = useDispatch();

  const coaches = useSelector((state) => state.coach.coaches);
  const error = useSelector((state) => state.coach.error);
  const loading = useSelector((state) => state.coach.loading);

  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const filtered = coaches.filter((coach) => {
    return coach.name.toLowerCase().includes(text.toLowerCase());
  })

  useEffect(() => {
    dispatch(fetchCoaches());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.glavniyBLock}>
      <div>
        <input className={styles.poisk} onChange={handleInput} placeholder='Поиск определенного тренера...'/>
      </div>
      <div className={styles.mainBlock}>
        {filtered.map((coach) => {
          return (
            <>
              <div className={styles.mapBlock} >
                <div className={styles.imgBlock}>
                  <img
                    className={styles.imgCoach}
                    src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
                    alt="Фотографии тренеров"
                  />
                </div>
                <div className={styles.name}>{coach.name}</div>
                <div className={styles.description}>{coach.description}</div>
                <button
                  className={styles.btn}
                  onClick={() => setModalActive(true)}
                >
                  Записаться
                </button>
              </div>
            </>
          );
        })}
        <Modal active={modalActive} setActive={setModalActive}>
          <div>
            <button className={styles.closeBtn} onClick={() => setModalActive(false)}>X</button>
          </div>
          <div className={styles.info}>
            <input className={styles.inp} placeholder="Введите свою фамилию" />
            <input className={styles.inp} placeholder="Введите свое имя" />
            <input className={styles.inp} placeholder="Введите свое отчество" />
            <button>Отправить</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Coach;
