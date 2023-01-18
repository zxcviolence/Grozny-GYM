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
    <div className={styles.mainBlock}>
      {coaches.map((coach) => {
        return (
          <>
            <div className={styles.mapBlock}>
              <div className={styles.imgBlock}>
                <img
                  className={styles.imgCoach}
                  src={`http://localhost:4000/assets/images/coaches/${coach.image}`}
                  alt="Фотографии тренеров"
                />
              </div>
              <div className={styles.name}>{coach.name}</div>
              <div className={styles.description}>{coach.description}</div>
              <button className={styles.btn} onClick = {() => setModalActive(true)}>Записаться</button>
            </div>
          </>
        );
      })}
      <Modal active={modalActive} setActive={setModalActive}>
        <p className={styles.pa}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex temporibus officia velit quo impedit expedita accusantium et earum sed nesciunt aperiam, quaerat laudantium recusandae, quia quisquam, illum tenetur at.</p>
      </Modal>
    </div>
  );
};

export default Coach;
